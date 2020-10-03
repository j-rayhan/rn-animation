import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//
import TabADetailsScreen from './TabAHome';
import Details from './TabADetails';

const Stack = createStackNavigator();

function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

export default TabAScreen;
