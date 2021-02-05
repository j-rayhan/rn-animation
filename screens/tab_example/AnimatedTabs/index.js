import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { StyleSheet, Text, View, Dimensions, Animated, Image, TouchableOpacity } from 'react-native';

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
  ref: React.createRef(),
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const Indicator = ({measures, scrollX}) => {
  const inputRange = data.map((_, index) => index * width); // [0, width, width * 2, width * 3, .....]
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(m => m.width)
  })
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(m => m.x)
  })
  return (
    <Animated.View style={{
      width: indicatorWidth,
      left: 0,
      height: 4,
      position: 'absolute',
      top: 25,
      backgroundColor: 'white',
      transform: [{
        translateX
      }]
    }}
    />
  )
}
const Tab = React.forwardRef(({ title, onTabClick }, ref) => {
  return (
    <TouchableOpacity onPress={onTabClick}>
      <View ref={ref}>
        <Text style={{ color: 'white', fontWeight: '800', textTransform: 'uppercase', fontFamily: 'Menlo', fontStyle: 'italic', fontSize: 16 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
})
const Tabs = ({ data, scrollX, onTabClick }) => {
  const containerRef = React.useRef();
  const [measures, setMeasures] = React.useState([])
   React.useEffect(() => {
     let m = []
    data.forEach(item => {
      item.ref.current.measureLayout(containerRef.current, (x, y, width, height)=>{
        m.push({x, y, width, height})
        if (m.length === data.length) setMeasures(m);
      })
    });
  }, [data]);
  return (
    <View style={{ position: 'absolute', top: 100 }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          flex: 1,
          width,
        }}>
        {data.map(({ key, title, ref }, index) => {
          return (
            <Tab key={key} title={title} ref={ref} onTabClick={() => onTabClick(index)} />
          )
        })}
      </View>
      { measures.length > 0 && <Indicator {...{measures, scrollX}} />}
    </View >
  )
}
export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef(0);
  const onTabClick = React.useCallback( itemIndex => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    })
  })
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        ref={ref}
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
      <Tabs data={data} scrollX={scrollX} onTabClick={onTabClick} />
    </View>
  );
}
