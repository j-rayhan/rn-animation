import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
//
import { TabA, TabB, TabC } from './index';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else {
            iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
          }
          return <Ionicons name={iconName} size={ focused ? 28 : size } color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="Home" component={TabA} />
      <Tab.Screen name="Sign In" component={TabB} />
      <Tab.Screen name="Sign Up" component={TabC} />
    </Tab.Navigator>
  );
}
export default HomeScreen;
