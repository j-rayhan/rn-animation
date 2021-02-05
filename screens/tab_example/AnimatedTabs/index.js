import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

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
const Indicator  = () => (
  <View style={{
    width: 100,
    height: 4,
    position: 'absolute',
    top: 25,
    backgroundColor: 'white'
  }}
  />
)
const Tab = ({ title }) => (
  <View>
    <Text style={{ color: 'white', fontWeight: '800', textTransform: 'uppercase', fontFamily: 'Menlo', fontStyle: 'italic', fontSize: 16 }}>{title}</Text>
  </View>
)
const Tabs = ({ data, scrollX }) => {
  return (
    <View style={{ position: 'absolute', top: 100 }}>
      <View style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flex: 1,
        width,
      }}>
        {data.map(({ key, title }) => {
          return (
            <Tab key={key} title={title} />
          )
        })}
      </View>
      <Indicator />
    </View>
  )
}
export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: 'cover' }}
              />
              <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0,0.3)' }]} />
            </View>
          )
        }}
      />
      <Tabs data={data} scrollX={scrollX} />
    </View>
  );
}
