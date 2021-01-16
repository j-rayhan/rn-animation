import React from 'react';
import PropTypes from 'prop-types';
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
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabBasickScreen} />
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="HomeFirst" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
