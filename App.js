import React from 'react';
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';
import {
  Text,
  View,
  Button
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//
import Auth from './screens/login/first/HomeScreen';
import HomeScreen from './screens/tab_example/first/HomeScreen';
import StickMenu from './screens/tab_example/StickMenuScreen';
import TDCarosel from './screens/tab_example/ThreeDCarosel';
import AnimatedTabs from './screens/tab_example/AnimatedTabs';
import TabBasickScreen from './screens/tab_example/second/HomeScreen';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No New Notifications!</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}

NotificationsScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired
};

const Drawer = createDrawerNavigator();

export default function App() {
const [loaded] = useFonts({
    Menlo: require('./assets/fonts/Menlo-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tabs">
        <Drawer.Screen name="Home" component={TabBasickScreen} />
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="HomeFirst" component={HomeScreen} />
        <Drawer.Screen name="Stick Menu" component={StickMenu} />
        <Drawer.Screen name="3D carosel" component={TDCarosel} />
        <Drawer.Screen name="Tabs" component={AnimatedTabs} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
