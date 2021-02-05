import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View, Dimensions, FlatList, Animated, Image } from 'react-native';

const { width, height } = Dimensions.get('screen');

const images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function App() {
  const [loaded] = useFonts({
    Menlo: require('../../../assets/fonts/Menlo-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, height}}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: 'cover' }}
              />
              <View style={[StyleSheet.absoluteFillObject, {backgroundColor: 'rgba(0,0,0,0.3)'}]} />
            </View>
          )
        }}
      />
      <Text style={{ fontFamily: 'Menlo', fontStyle: 'italic', fontSize: 12 }}>
        (expo.io)
      </Text>
    </View>
  );
}
