import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
//
import {
  JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen
} from './index';
import AddButton from './components/AddButton';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'TabA') {
            iconName = focused
              ? 'ios-medical'
              : 'md-medical';
          } else if (route.name === 'TabB') {
            iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
          } else if (route.name === 'TabC') {
            iconName = focused
              ? 'ios-trending-up'
              : 'ios-trending-down';
          } else if (route.name === 'TabD') {
            iconName = focused
              ? 'ios-people'
              : 'ios-arrow-up';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="TabA" component={JournalScreen} />
      <Tab.Screen name="TabB" component={MeasuresScreen} />
      <Tab.Screen
        name="Add"
        component={() => null}
        options={{
          tabBarButton: () => (<AddButton />)
        }}
      />
      <Tab.Screen name="TabC" component={TreatmentScreen} />
      <Tab.Screen name="TabD" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
