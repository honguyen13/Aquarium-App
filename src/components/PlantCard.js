import React from 'react';
import {Image, Modal, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Badge, Card, Text} from '.';
import {theme} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DoneBtn = () => {
  const [done, setDone] = React.useState(false);
  const SetIcon = flag => {
    return flag ? (
      <Image
        source={require('../../assets/images/done-icon.png')}
        resizeMode="contain"
        style={{height: 40, width: 40}}
      />
    ) : (
      <Image
        source={require('../../assets/images/done-fullfill-icon.png')}
        resizeMode="contain"
        style={{height: 40, width: 40}}
      />
    );
  };

  return (
    <Badge style={{marginRight: 5}}>
      <TouchableOpacity
        style={{padding: 20, borderRadius: 32}}
        activeOpacity={0.7}
        onPress={() => setDone(true)}>
        <SetIcon flag={done} />
      </TouchableOpacity>
    </Badge>
  );
};

const PlantDetail = ({modalVisible, setModalVisible, data}) => {
  return (
    <Block>
      <Block row center style={{paddingHorizontal: theme.sizes.base, borderBottomWidth: 0.75, borderColor: '#ccc'}}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{paddingRight: 30}}
          activeOpacity={0.7}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </TouchableOpacity>
        <Text spacing={0.3} bold size={18}>
          {data.name}
        </Text>
      </Block>
      <Image
        source={data.img[0]}
        resizeMode="stretch"
        style={{width: '100%', height: '40%'}}
      />
      <ScrollView>
        <Block style={{margin: theme.sizes.base}}>
          <Text semibold size={20} style={{marginBottom: theme.sizes.base}}>
            {data.name.replace(/_/g, ' ')}
          </Text>
          <Text bold size={16}>
            Hints:
          </Text>
          <Text regular size={12} justify spacing={0.3}>
            {data.hints}
          </Text>
          <Block
            row
            style={{
              marginTop: theme.sizes.padding,
              paddingRight: theme.sizes.base,
            }}>
            <Block center>
              <Image
                source={require('../../assets/images/ph.png')}
                resizeMode="contain"
                style={{height: 50, width: 50, marginLeft: 18}}
              />
              <Text
                size={14}
                regular
                spacing={0.3}
                style={{paddingVertical: 10}}>
                {data.pH.min} - {data.pH.max}
              </Text>
            </Block>
            <Block center>
              <Image
                source={require('../../assets/images/height.png')}
                resizeMode="contain"
                style={{height: 50, width: 50, marginLeft: 8}}
              />
              <Text
                size={14}
                regular
                spacing={0.3}
                style={{paddingVertical: 10}}>
                {data.height}
              </Text>
            </Block>
            <Block center>
              <Image
                source={require('../../assets/images/growthSpeed.png')}
                resizeMode="contain"
                style={{height: 50, width: 50, marginLeft: 8}}
              />
              <Text
                size={14}
                regular
                spacing={0.3}
                style={{paddingVertical: 10}}>
                {data.growthSpeed}
              </Text>
            </Block>
            <Block center>
              <Image
                source={require('../../assets/images/water.png')}
                resizeMode="contain"
                style={{height: 50, width: 50, marginLeft: 8}}
              />
              <Text
                size={14}
                regular
                spacing={0.3}
                style={{paddingVertical: 10}}>
                {data.waterHardness.min} - {data.waterHardness.max} dKH
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

const PlantCard = ({data, nextBtn, doneBtn}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Card shadow style={styles.container}>
      <Image resizeMode="contain" source={data.img[0]} style={styles.image} />
      <Block center row style={{paddingTop: 10}}>
        <Block style={{marginRight: 10}}>
          {data.name.split('_').map((name, idx) => (
            <Text semibold size={12} spacing={0.4} key={idx}>
              {name}
            </Text>
          ))}
        </Block>

        {/* next button */}
        {nextBtn && (
          <Badge style={{marginRight: 5}}>
            <LinearGradient
              colors={[theme.colors.blue3, theme.colors.blue2]}
              style={styles.nextBtn}
              start={{y: 0.0, x: 0.5}}
              end={{y: 1.0, x: 0.5}}>
              <TouchableOpacity
                style={{padding: 20, borderRadius: 32}}
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={require('../../assets/images/next.png')}
                  resizeMode="contain"
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </LinearGradient>
          </Badge>
        )}

        {/* done button */}
        {doneBtn && <DoneBtn done={doneBtn} />}

        {/* Plant detail */}
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="fullscreen"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <PlantDetail
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
          />
        </Modal>
      </Block>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    width: 180,
    elevation: 10,
    marginRight: theme.sizes.base,
  },
  image: {
    height: 180,
    width: '100%',
  },
  nextBtn: {
    borderRadius: 32,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.blue,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
    elevation: 10,
  },
});

export default PlantCard;
