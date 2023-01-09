import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AquariumScreen from '../screens/AquariumScreen';
import AquariumDetailScreen from '../screens/AquariumDetailScreen';

const Stack = createNativeStackNavigator();

function AquariumNavigation() {
  return (
    <Stack.Navigator initialRouteName="Aquarium">
      <Stack.Screen name="Aquarium" component={AquariumScreen} />
      <Stack.Screen name="AquariumDetail" component={AquariumDetailScreen} />
    </Stack.Navigator>
  );
}

export default AquariumNavigation;
