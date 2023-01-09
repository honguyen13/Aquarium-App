import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import {Block, Badge, Card, Text} from '../components';
import {theme, plants, fishes, snails, crustaceans} from '../constants';
import PlantCard from '../components/PlantCard';
import FishCard from '../components/FishCard';
import SnailCard from '../components/SnailCard';
import CrustaceanCard from '../components/CrustaceanCard';

const ButtonGroup = ({buttons, doSomethingAfterClick}) => {
  const [clickedId, setClickedId] = React.useState(0);

  const handleClick = (item, id) => {
    setClickedId(id);
    doSomethingAfterClick(id);
  };

  return (
    <Block style={styles.buttonBar}>
      <Block center middle row style={{marginHorizontal: 8}}>
        {buttons.map((buttonLabel, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={item => handleClick(item, index)}
              style={index === clickedId ? styles.buttonActive : styles.button}>
              <Text semibold size={12}>
                {buttonLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Block>
    </Block>
  );
};

const Plants = ({navigation}) => {
  return (
    <Block style={{marginBottom: 100}}>
      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Background Plants
      </Text>
      <FlatList
        data={plants.backgroundPlants}
        renderItem={({item}) => (
          <PlantCard data={item} navigation={navigation} nextBtn />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Midground Plants
      </Text>
      <FlatList
        data={plants.midgroundPlants}
        renderItem={({item}) => (
          <PlantCard data={item} navigation={navigation} nextBtn />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <Text
        spacing={0.3}
        semibold
        size={16}
        style={{marginVertical: theme.sizes.base}}>
        Foreground Plants
      </Text>
      <FlatList
        data={plants.foregroundPlants}
        renderItem={({item}) => (
          <PlantCard data={item} navigation={navigation} nextBtn />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </Block>
  );
};

const Fishes = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 100}}>
      {fishes.data.map(item => (
        <FishCard data={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const Crustaceans = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 100}}>
      {crustaceans.data.map(item => (
        <CrustaceanCard data={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const Snails = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 100}}>
      {snails.data.map(item => (
        <SnailCard data={item} key={item.id}  />
      ))}
    </ScrollView>
  );
};

export default function CataloguesScreen({navigation}) {
  const [showList, setShowList] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text spacing={0.3} black size={28}>
          Catalogues
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
    });
  }, [navigation]);

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <Text spacing={0.3} semibold size={16}>
          Help Us To Build Our Aquarium
        </Text>
        <ButtonGroup
          buttons={['Plants', 'Fishes', 'Crustaceans', 'Snails']}
          doSomethingAfterClick={id => setShowList(id)}
        />
        {showList === 0 ? (
          <Plants navigation={navigation} />
        ) : showList === 1 ? (
          <Fishes />
        ) : showList === 2 ? (
          <Crustaceans />
        ) : (
          <Snails />
        )}
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray2,
    padding: theme.sizes.base,
  },
  btnSetting: {
    paddingRight: theme.sizes.base
  },
  buttonBar: {
    backgroundColor: theme.colors.blue3,
    height: 44,
    marginVertical: theme.sizes.base,
    borderRadius: theme.sizes.padding,
  },
  button: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue3,
    borderRadius: theme.sizes.padding,
  },
  buttonActive: {
    flex: 1,
    height: 30,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.padding,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
    elevation: 13,
  },
});
