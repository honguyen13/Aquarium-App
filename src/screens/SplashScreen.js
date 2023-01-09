import React, { useEffect } from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {Block, Badge, Card, Text} from '../components';
import {theme} from '../constants';
// import theme from '../../'

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.containerBackground}>
      <Block style={styles.subcription}>
        <Text spacing={0.3} semiBold white size={50}>
          Aquarium
        </Text>
        <Text
          spacing={0.3}
          medium
          size={14}
          white
          style={{marginTop: theme.sizes.padding}}>
          Are you ready to build your aquarium ?
        </Text>
        <Block shadow>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={styles.button}>
            <Text h2 white size={16}>
              Get started
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    height: '100%',
    width: '100%',
  },
  subcription: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: theme.sizes.padding * 2,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: theme.colors.blue2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: theme.sizes.padding,
  },
});