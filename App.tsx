import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, Text, View } from 'react-native';
import List from './src/Screens/List'
import Details from './src/Screens/Details'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar hidden />
        {/* <List /> */}
        <Details />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
