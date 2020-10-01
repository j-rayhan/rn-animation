import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabADetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button
        onPress={() => navigation.navigate('TabA Details')}
        title="Go to TabA Details"
      />
    </View>
  );
}

TabADetailsScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired
};

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}

function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

function TabBScreen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'TabA') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'TabB') {
            iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="TabA" component={TabAScreen} />
      <Tab.Screen name="TabB" component={TabBScreen} />
    </Tab.Navigator>
  );
}

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

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
