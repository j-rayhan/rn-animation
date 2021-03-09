import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Easing } from 'react-native';
import List from './src/Screens/List'
import Details from './src/Screens/Details'
import TestAnimation from './src/Screens/TestAnimation'

const Stack = createSharedElementStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List" headerMode="none">
          <Stack.Screen name="JRAnimation" component={TestAnimation} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Detail" component={Details} 
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: {duration: 500, easing: Easing.inOut(Easing.ease)}},
              close: { animation: 'timing', config: {duration: 500, easing: Easing.inOut(Easing.ease)}}
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                }
              }
            }
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

