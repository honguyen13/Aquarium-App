import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import {Block, Badge, Card, Text} from '../components';
import {theme, plants, fishes, snails, crustaceans} from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import PlantCard from '../components/PlantCard';
import FishCard from '../components/FishCard';
import SnailCard from '../components/SnailCard';
import CrustaceanCard from '../components/CrustaceanCard';
import rgba from 'hex-to-rgba';

const Optimals = () => {
  return (
    <Block>
      <Text gray light size={18} spacing={0.3}>
        OPTIMAL CONDITIONS
      </Text>
      {/* <Block color="gray" style={styles.hLine} /> */}

      <Block row style={{marginVertical: theme.sizes.base}}>
        <Block center>
          <Image
            source={require('../../assets/images/fish-tank.png')}
            resizeMode="contain"
            style={{height: 35, width: 35}}
          />
          <Text size={12} regular style={{marginTop: 5}}>
            10 l.
          </Text>
        </Block>
        <Block center>
          <Image
            source={require('../../assets/images/thermometer.png')}
            resizeMode="contain"
            style={{height: 35, width: 35}}
          />
          <Text size={12} regular style={{marginTop: 5}}>
            15&#176;C - 20&#176;C
          </Text>
        </Block>
        <Block center>
          <Image
            source={require('../../assets/images/ruler.png')}
            resizeMode="contain"
            style={{height: 35, width: 35}}
          />
          <Text size={12} regular style={{marginTop: 5}}>
            3 cm
          </Text>
        </Block>
        <Block center>
          <Image
            source={require('../../assets/images/ph.png')}
            resizeMode="contain"
            style={{height: 35, width: 35}}
          />
          <Text size={12} regular style={{marginTop: 5}}>
            8 - 16
          </Text>
        </Block>
        <Block center>
          <Image
            source={require('../../assets/images/water.png')}
            resizeMode="contain"
            style={{height: 35, width: 35}}
          />
          <Text size={12} regular style={{marginTop: 5}}>
            1.5 - 7 dKH
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

const Instructions = () => {
  return (
    <Block>
      <Text gray light size={18} spacing={0.3}>
        INSTRUCTIONS
      </Text>
      {/* <Block flex={false} color="gray" style={styles.hLine} /> */}
      <Block style={{marginTop: theme.sizes.base}}>
        <Block row center style={{marginBottom: theme.sizes.base}}>
          <Badge color="gray" size={40} style={{marginRight: theme.sizes.base}}>
            <Text bold size={20}>
              1
            </Text>
          </Badge>
          <Block>
            <Text medium size={14} spacing={0.3} justify>
              Browse our catalogues to get yourself
            </Text>
            <Text medium size={14} spacing={0.3} justify>
              inspired.
            </Text>
          </Block>
        </Block>
        <Block row center style={{marginBottom: theme.sizes.base}}>
          <Badge color="gray" size={40} style={{marginRight: theme.sizes.base}}>
            <Text bold size={20}>
              2
            </Text>
          </Badge>
          <Block>
            <Text medium size={14} spacing={0.3} justify>
              Tap on a catalogues item to see more
            </Text>
            <Text medium size={14} spacing={0.3} justify>
              information.
            </Text>
          </Block>
        </Block>
        <Block row center style={{marginBottom: theme.sizes.base}}>
          <Badge color="gray" size={40} style={{marginRight: theme.sizes.base}}>
            <Text bold size={20}>
              3
            </Text>
          </Badge>
          <Block>
            <Text medium size={14} spacing={0.3} justify>
              Use the button on the item screen to add
            </Text>
            <Text medium size={14} spacing={0.3} justify>
              to this aquarium.
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const Plants = () => {
  return (
    <Block>
      <Text
        gray
        light
        size={16}
        spacing={0.3}
        style={{marginVertical: theme.sizes.base}}>
        CATALOGUES - PLANTS
      </Text>
      <ScrollView horizontal={true} style={{marginBottom: theme.sizes.base}}>
        <TouchableOpacity activeOpacity={0.7} style={styles.browseBtn}>
          <Block middle center>
            <Badge size={70} style={{borderWidth: 2, borderColor: 'white'}}>
              <Image
                source={require('../../assets/images/browse-plant-icon.png')}
                resizeMode="contain"
                style={{height: 45, width: 45}}
              />
            </Badge>
          </Block>
        </TouchableOpacity>
      </ScrollView>
      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Background Plants
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {plants.backgroundPlants.map(item => (
          <PlantCard data={item} key={item.id} doneBtn />
        ))}
      </ScrollView>

      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Midground Plants
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {plants.midgroundPlants.map(item => (
          <PlantCard data={item} key={item.id} doneBtn />
        ))}
      </ScrollView>

      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Foreground Plants
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 30}}>
        {plants.foregroundPlants.map(item => (
          <PlantCard data={item} key={item.id} doneBtn />
        ))}
      </ScrollView>
    </Block>
  );
};

const Fishes = () => {
  // const [text, onChangeText] = React.useState("Useless Text");
  return (
    <Block style={{padding: theme.sizes.base}}>
      {/**search bar */}
      <Block flex={false} row center style={styles.searchBar}>
        <Feather name="search" size={20} color="gray" style={{margin: 10}} />
        <TextInput
          style={{fontSize: 16, width: '90%'}}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Search here"
        />
      </Block>
      <Text gray light size={16} spacing={0.3}>
        List Of Fishes
      </Text>
      {/* List of Fish were chose */}
      <ScrollView horizontal={true} style={{marginBottom: theme.sizes.base}}>
        <Block style={{marginRight: 5}}>
          <Image
            source={require('../../assets/images/Fishes/Neon-Tetra.jpg')}
            resizeMode="contain"
            style={{height: 90, width: 90}}
          />
        </Block>
      </ScrollView>
      <Block
        flex={false}
        color="gray"
        style={[styles.hLine, {marginVertical: 5}]}
      />

      {/*list fishes */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {fishes.data.map(item => (
          <FishCard data={item} key={item.id} choose={true} />
        ))}
      </ScrollView>
    </Block>
  );
};

const Browser = ({
  title,
  icon,
  data,
  browse,
  setBrowse,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Block>
      <Text gray light size={16} spacing={0.3}>
        {title}
      </Text>
      <Block
        flex={false}
        color="gray"
        style={[styles.hLine, {marginVertical: 5}]}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginBottom: theme.sizes.base}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.browseBtn}
          onPress={() => {
            setBrowse('List of Fishes');
            setModalVisible(true);
          }}>
          <Block middle center>
            <Badge size={70} style={{borderWidth: 2, borderColor: 'white'}}>
              <Image
                source={icon}
                resizeMode="contain"
                style={{height: 45, width: 45}}
              />
            </Badge>
          </Block>
        </TouchableOpacity>
      </ScrollView>
    </Block>
  );
};

export default function AquariumDetailScreen({navigation, route}) {
  // const [showInstruction, setShowIntroduction] = useState(true);
  const [browse, setBrowse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [aquariumItems, setAquariumItems] = useState({
    
  });

  const [item, setItem] = useState({}); // data a aquarium from Aquarium Screen

  useEffect(() => {
    setItem(route.params.aquarium);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TextInput
          style={styles.input}
          placeholder={item.name}
          onChangeText={newText =>
            setItem({
              id: item.id,
              name: newText,
              plant: item.plant,
              fish: item.fish,
              crustacean: item.crustacean,
              snail: item.snail,
            })
          }
          value={item.name}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Alert.alert('Save')}>
          <Text bold size={16}>
            Save
          </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: theme.colors.gray2,
      },
      headerShadowVisible: true,
    });
  }, [navigation, item]);
  // console.log('item sau:',item)
  return (
    <ScrollView style={styles.container}>
      {/* {item.plant.length > 0 ||
      item.fish.length > 0 ||
      item.crustacean.length > 0 ||
      item.snail.length > 0 ? (
        <Optimals />
      ) : (
        <Instructions />
      )} */}
      <Optimals />
      <Instructions />
      <Block flex={false} color="gray" style={styles.hLine} />

      <Text gray light size={18} spacing={0.3}>
        CATALOGUES
      </Text>
      <Block style={{marginTop: theme.sizes.base / 2}}>
        <Browser
          title="List of Plants"
          icon={require('../../assets/images/browse-plant-icon.png')}
          data={plants.backgroundPlants}
          browse={browse}
          setBrowse={setBrowse}
        />
        <Browser
          title="List of Fishes"
          icon={require('../../assets/images/browse-fish-icon.png')}
          data={fishes.data}
          browse={browse}
          setBrowse={setBrowse}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Browser
          title="List of Crustaceans"
          icon={require('../../assets/images/browse-crustacean-icon.png')}
          data={crustaceans.data}
          browse={browse}
          setBrowse={setBrowse}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Browser
          title="List of Snails"
          icon={require('../../assets/images/browse-snail-icon.png')}
          data={snails.data}
          browse={browse}
          setBrowse={setBrowse}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Block>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullscreen"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {browse == 'List of Plants' && (
          <Plants
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
          />
        )}
        {browse == 'List of Fishes' && <Fishes />}
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray2,
    padding: theme.sizes.base,
    marginBottom: 80,
  },
  hLine: {
    height: 1,
    marginVertical: theme.sizes.base,
  },
  vLine: {
    width: 1,
    marginVertical: theme.sizes.base,
  },
  browseBtn: {
    height: 90,
    width: 90,
    marginRight: 5,
    backgroundColor: theme.colors.blue3,
    shadowColor: theme.colors.white,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
    elevation: 13,
  },
  input: {
    height: 40,
    width: 240,
    fontSize: 20,
    color: theme.colors.black,
    letterSpacing: 0.3,
    marginTop: 6,
  },
  searchBar: {
    height: 50,
    borderRadius: 15,
    backgroundColor: theme.colors.gray2,
    marginBottom: theme.sizes.base,
  },
});
