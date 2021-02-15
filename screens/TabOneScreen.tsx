// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/
import * as React from 'react';
import { StatusBar, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import faker from 'faker';
import niceColors from 'nice-color-palettes';

const { width, height } = Dimensions.get('screen');

faker.seed(10);
const colors = [
  ...niceColors[1].slice(1, niceColors[1].length),
  ...niceColors[55].slice(0,3),
]
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    color: colors[i % colors.length],
    categories: [...Array(3).keys()].map(()=> {
      return {
        key: faker.random.uuid(),
        title: faker.name.jobTitle(),
        subcats: [...Array(3).keys()].map(faker.name.jobType)
      }
    })
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const HEADER_HEIGHT = 100;


export default ({navigation}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const headerY = React.useRef(HEADER_HEIGHT);

  // const [scrollAnim] = React.useState(new Animated.Value(0));
  const [offsetAnim] = React.useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = React.useState(Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      }),
      offsetAnim
    ), 0, 1
  ));

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp'
  });
  // const titleTopPadding = clampedScroll.interpolate({
  //   inputRange: [0, HEADER_HEIGHT],
  //   outputRange: [0, HEADER_HEIGHT],
  //   extrapolate: 'clamp',
  // });
  // console.log('----------------->', titleTopPadding);
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View 
        ref={headerY}
        style={[styles.header, {
          transform: [{ translateY: navbarTranslate }]
        }]}

        // onLayout={(event) => {
        //   let {height} = event.nativeEvent.layout;
        //   setClampedScroll(Animated.diffClamp(
        //     Animated.add(
        //       scrollY.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [0, 1],
        //         extrapolateLeft: 'clamp'
        //       }),
        //       offsetAnim
        //     ), 0, height)
        //   );
        // }}
      >
        <Text style={styles.headerText}>HEADER</Text>
      </Animated.View>
      <Image 
        source={{uri: 'https://user-images.githubusercontent.com/21338587/107904367-cb717800-6f75-11eb-931c-8cd6d2b5e74b.jpg'}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        data={DATA}
        contentInset={{ top: HEADER_HEIGHT }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true}
        )}
        keyExtractor={item => item.key.toString()}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: HEADER_HEIGHT + (StatusBar.currentHeight || 42) 
        }}
        renderItem={({ item, index }) => {
          const { image, name, jobTitle, email } = item;
          const inputRange = [ -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)]
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1,1,1,0]
          });
          const opacityInputRange = [ -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)]
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1,1,1,0]
          });
          return (
            <TouchableOpacity onPress={()=>{ navigation.navigate('USER_DETAILS', {item})}}>
              <Animated.View style={{flexDirection: "row", padding: SPACING, marginBottom: SPACING, backgroundColor: item.color, borderRadius: 12, shadowColor: '#000',
            shadowOffset: {
              height: 10,
              width: 0
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            opacity,
            transform: [{scale}]
            }}>
              <Image
                source={{ uri: image }}
                style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2 }}
              />
              <View>
                <Text style={{ fontSize: 22, fontWeight: '700'}}>{name}</Text>
                <Text style={{ fontSize: 14, opacity: .7}}>{jobTitle}</Text>
                <Text style={{ fontSize: 12, opacity: .8, color: '#0099cc'}}>{email}</Text>
              </View>
            </Animated.View>  
            </TouchableOpacity>
          )
        }}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: HEADER_HEIGHT,
    // marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10000
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});