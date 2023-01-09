import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Block, Badge, Card, Text} from '../components';
import {theme} from '../constants';

const AquariumDetails = ({item}) => {
  return (
    <Card style={{borderWidth: 0.5, marginBottom: theme.sizes.base}}>
      <Text center size={20} regular style={{marginLeft: theme.sizes.base}}>
        Aquarium
      </Text>
      <Text center size={18} regular style={{marginLeft: theme.sizes.base}}>
        {item.name}
      </Text>

      <Block style={{marginTop: theme.sizes.base}}>
        <Block row>
          <Block center style={{marginBottom: theme.sizes.base}}>
            <Image
              source={require('../../assets/images/fish-icon-aquarium.png')}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
            <Text>{item.fish.length}</Text>
          </Block>
          <Block flex={false} color="gray2" style={styles.vLine} />
          <Block center>
            <Image
              source={require('../../assets/images/plant-icon-aquarium.png')}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
            <Text>{item.plant.length}</Text>
          </Block>
        </Block>

        <Block flex={false} color="gray2" style={styles.hLine} />

        <Block row>
          <Block center>
            <Image
              source={require('../../assets/images/crustacean-icon-aquarium.png')}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
            <Text>{item.crustacean.length}</Text>
          </Block>
          <Block flex={false} color="gray2" style={styles.vLine} />
          <Block center>
            <Image
              source={require('../../assets/images/snail-icon-aquarium.png')}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
            <Text>{item.snail.length}</Text>
          </Block>
        </Block>
      </Block>
    </Card>
  );
};

const IntroductionCard = ({handleAddAquarium}) => {
  return (
    <Card
      style={{
        backgroundColor: 'white',
        height: '40%',
        marginBottom: theme.sizes.base,
      }}>
      <Text center spacing={0.3} size={18} light>
        Create a virtual aquarium with the
      </Text>
      <Text center spacing={0.3} size={18} light style={{marginBottom: 8}}>
        animals and plants you like
      </Text>
      <Text center spacing={0.3} size={14} light>
        You will get hints abuout compatibility and
      </Text>
      <Text center spacing={0.3} size={14} light style={{marginBottom: 8}}>
        optimal conditions along the way.
      </Text>
      <Text center spacing={0.3} size={14} light>
        When you are satisfied with your selection,
      </Text>
      <Text center spacing={0.3} size={14} light>
        Aquareka will guide you through a step-by-step
      </Text>
      <Text center spacing={0.3} size={14} light>
        process to safely setup a real aquarium.
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleAddAquarium()}
        style={styles.addbtn}>
        <Text white>Create your first aquarium</Text>
      </TouchableOpacity>
    </Card>
  );
};

const AquariumCard = ({
  item,
  navigation,
  handleDeleteAquarium,
  autoSetCurrentAquarium,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => autoSetCurrentAquarium(item.id)}
      style={{marginBottom: theme.sizes.base}}>
      <Card shadow row center color={theme.colors.white}>
        <Block center row>
          <Image
            source={require('../../assets/images/aquarium.png')}
            resizeMode="contain"
            style={{height: 40, width: 40, marginRight: theme.sizes.base}}
          />
          <Text medium size={14} spacing={0.3}>
            {item.name}
          </Text>
        </Block>
        <Block row right>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('AquariumDetail', {
                aquarium: item,
              });
              autoSetCurrentAquarium(item.id);
            }}
            style={{paddingHorizontal: 10}}>
            <Image
              source={require('../../assets/images/customize.png')}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleDeleteAquarium(item.id)}
            style={{paddingLeft: 10}}>
            <Image
              source={require('../../assets/images/delete.png')}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </Block>
      </Card>
    </TouchableOpacity>
  );
};

export default function AquariumScreen({navigation, route}) {
  const [aquariumItems, setAquariumItems] = useState([]); //list aquariums
  const [currentItem, setCurrentItem] = useState({
    name: '',
    plant: [],
    fish: [],
    crustacean: [],
    snail: [],
  }); //data of Aquarium Details

  const handleAddAquarium = () => {
    setAquariumItems([
      {
        id: aquariumItems.length < 1 ? 0 : aquariumItems[0].id + 1,
        name:
          aquariumItems.length < 1
            ? 'New Aquarium'
            : 'New Aquarium ' + (aquariumItems[0].id + 1),
        plant: [],
        fish: [],
        crustacean: [],
        snail: [],
      },
      ...aquariumItems,
    ]);
  };

  const handleDeleteAquarium = id => {
    setAquariumItems(aquariumItems.filter(item => item.id != id));
  };

  const autoSetCurrentAquarium = id => {
    setCurrentItem(aquariumItems.find(item => item.id == id));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text spacing={0.3} black size={28}>
          Aquariums
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Setting')}
          style={styles.btnSetting}>
          <Image
            source={require('../../assets/images/setting.png')}
            resizeMode="contain"
            style={{height: 22, width: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: theme.colors.gray2,
      },
      headerShadowVisible: true,
      // headerShown: false,
    });
  }, [navigation]);

  return (
    <Block style={styles.container}>
      <AquariumDetails item={currentItem} />
      {aquariumItems.length < 1 ? (
        <IntroductionCard handleAddAquarium={handleAddAquarium} />
      ) : (
        <Block>
          <Block
            flex={false}
            row
            space="between"
            center
            style={{marginBottom: 10}}>
            <Text spacing={0.3} semibold size={16}>
              AQUARIUMS
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleAddAquarium()}>
              <Image
                source={require('../../assets/images/add.png')}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
          </Block>

          <ScrollView showsVerticalScrollIndicator={false}>
            {aquariumItems.map(item => (
              <AquariumCard
                item={item}
                key={item.id}
                navigation={navigation}
                handleDeleteAquarium={handleDeleteAquarium}
                autoSetCurrentAquarium={autoSetCurrentAquarium}
              />
            ))}
          </ScrollView>
        </Block>
      )}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray2,
    padding: theme.sizes.base,
    marginBottom: 70,
  },
  btnSetting: {
    height: 20,
    width: 20,
  },
  addbtn: {
    height: 50,
    margin: theme.sizes.base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue2,
    borderRadius: theme.sizes.padding,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
    elevation: 13,
  },
  hLine: {
    height: 1,
    margin: theme.sizes.base,
  },
  vLine: {
    width: 1,
    marginVertical: theme.sizes.base,
  },
});
