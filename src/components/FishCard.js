import React from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Block, Badge, Card, Text} from '../components';
import {theme} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const FishDetail = ({modalVisible, setModalVisible, data}) => {
  return (
    <Block>
      <Block
        flex={false}
        row
        center
        style={{paddingHorizontal: theme.sizes.base, paddingVertical: 10}}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{paddingRight: 30}}
          activeOpacity={0.7}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </TouchableOpacity>
        <Text spacing={0.3} bold size={18}>
          {data.commonName}
        </Text>
      </Block>
      <Image
        source={data.img[0]}
        resizeMode="stretch"
        style={{width: '100%', height: '40%'}}
      />
      <ScrollView style={{padding: theme.sizes.base}}>
        <Text gray light size={16} spacing={0.3}>
          OPTIMAL CONDITIONS
        </Text>
        <Block color="gray" style={styles.hLine} />

        <Block row style={{marginBottom: theme.sizes.base}}>
          <Block center>
            <Image
              source={require('../../assets/images/fish-tank.png')}
              resizeMode="contain"
              style={{height: 35, width: 35}}
            />
            <Text size={12} regular style={{marginTop: 5}}>
              {data.tankLenght} l.
            </Text>
          </Block>
          <Block center>
            <Image
              source={require('../../assets/images/thermometer.png')}
              resizeMode="contain"
              style={{height: 35, width: 35}}
            />
            <Text size={12} regular style={{marginTop: 5}}>
              {data.temp.min}&#176;C - {data.temp.max}&#176;C
            </Text>
          </Block>
          <Block center>
            <Image
              source={require('../../assets/images/ruler.png')}
              resizeMode="contain"
              style={{height: 35, width: 35}}
            />
            <Text size={12} regular style={{marginTop: 5}}>
              {data.adultSize}
            </Text>
          </Block>
          <Block center>
            <Image
              source={require('../../assets/images/ph.png')}
              resizeMode="contain"
              style={{height: 35, width: 35}}
            />
            <Text size={12} regular style={{marginTop: 5}}>
              {data.pH.min} - {data.pH.max}
            </Text>
          </Block>
          <Block center>
            <Image
              source={require('../../assets/images/water.png')}
              resizeMode="contain"
              style={{height: 35, width: 35}}
            />
            <Text size={12} regular style={{marginTop: 5}}>
              {data.waterHardness.min} - {data.waterHardness.max} dKH
            </Text>
          </Block>
        </Block>

        <Text gray light size={16}>
          COMMON NAME
        </Text>
        <Block color="gray" style={styles.hLine} />
        <Text medium size={14} spacing={0.3}>
          {data.commonName}
        </Text>

        <Text
          gray
          light
          size={16}
          spacing={0.3}
          style={{marginTop: theme.sizes.base}}>
          SCIENTIFIC NAME
        </Text>
        <Block color="gray" style={styles.hLine} />
        <Text medium size={14} spacing={0.3}>
          {data.scientificName}
        </Text>
      </ScrollView>
    </Block>
  );
};

const FishCard = ({data, infor, choose}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => (choose ? setCheck(!check) : setModalVisible(true))}
      style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullscreen"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <FishDetail
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          data={data}
        />
      </Modal>
      <Block shadow card row style={{backgroundColor: theme.colors.white}}>
        <Block flex={0.8}>
          {!choose ? (
            <Image
              source={data.img[0]}
              resizeMode="stretch"
              style={styles.img}
            />
          ) : (
            <ImageBackground
              source={data.img[0]}
              resizeMode="stretch"
              style={[
                styles.img,
                {justifyContent: 'center', alignItems: 'center'},
              ]}
              blurRadius={check ? 15 : 0}>
              {check ? (
                <EvilIcons name="check" size={90} color={theme.colors.blue3} />
              ) : null}
            </ImageBackground>
          )}
        </Block>
        <Block>
          <Text spacing={0.3} size={14} regular gray style={{marginTop: 6}}>
            {data.scientificName}
          </Text>
          <Text semibold spacing={0.3} size={16}>
            {data.commonName}
          </Text>
          <Block center row style={{marginTop: 10}}>
            <Block left>
              <Image
                source={require('../../assets/images/fish-tank.png')}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text size={10} regular style={{paddingLeft: 6}}>
                {data.tankLenght} l.
              </Text>
            </Block>
            <Block center>
              <Image
                source={require('../../assets/images/thermometer.png')}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text size={10} regular>
                {data.temp.min}&#176;C - {data.temp.max}&#176;C
              </Text>
            </Block>
            <Block bottom right style={{marginRight: 8}}>
              <Image
                source={require('../../assets/images/ruler.png')}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text size={10} regular style={{paddingRight: 4}}>
                {data.adultSize}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.sizes.border,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    elevation: 5,
    marginBottom: 6,
  },
  img: {
    height: 120,
    width: '95%',
    borderBottomLeftRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border,
  },
  icon: {
    height: 30,
    width: 30,
  },
  hLine: {
    height: 1,
    marginVertical: theme.sizes.base,
  },
});

export default FishCard;
