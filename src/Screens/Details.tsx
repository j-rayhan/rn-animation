import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, FlatList, ScrollView, Text, Animated } from 'react-native';
import { DATA } from '../Config/Travel';
import BackIcon from '../Components/BackIcon';
import Icon from '../Components/Icon';
import { SPACING, width, ICON_SIZE } from '../Config/Theme';
import { SharedElement } from 'react-navigation-shared-element';

const Detail = ({route, navigation}) => {
  const {item} = route.params;
  const ref = React.useRef(null);
  const selectedItemIndex = DATA.findIndex(i => i.id === item?.id);
  const mountedAnimated = React.useRef(new Animated.Value(0)).current;
  const activeIndex = React.useRef(new Animated.Value(selectedItemIndex)).current;
  const animatedIndex = React.useRef(new Animated.Value(selectedItemIndex)).current;
  
  const animation = ( toValue, delay) => (
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true
    })
  )

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedIndex, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true
      }),
      animation(1, 1000)
    ]).start();
  }, []);

  const translateY =  mountedAnimated.interpolate({
    inputRange: [0,1],
    outputRange: [ 50, 1]
  })
  const size = ICON_SIZE + SPACING * 2;
  const translateX =  animatedIndex.interpolate({
    inputRange: [-1,0,1],
    outputRange: [ size, 0, -size]
  });
  console.log('on press 1', activeIndex);

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackIcon onPress={() => {
        animation(0).start(() => {
          navigation.goBack()
        })}} />
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 10,
          marginLeft: width / 2 - ICON_SIZE / 2 - SPACING,
          transform: [{translateX}]
        }}
      >
        {
            DATA.map((item, index) => {
              const inputRange = [ 
                (index - 1) * size, 
                index * size, 
                (index + 1) * size
              ];
              const opacity = animatedIndex.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
              })
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{padding: SPACING}}
                  onPress={()=>{
                    activeIndex.setValue(index);
                    console.log('on press', index);
                    
                    // ref?.current?.scrollToIndex({
                    //   index,
                    //   animated: true,
                    // })
                  }}
                  >
                    <Animated.View style={{ alignItems: 'center',  }}>
                      <SharedElement id={`item.${item.id}.icon`}>
                        <Icon uri={item.imageUri} />
                        </SharedElement>
                    </Animated.View>
                  </TouchableOpacity>
              )
            })
          }
      </Animated.View>
      <Animated.FlatList
        style={{opacity: mountedAnimated, transform: [{ translateY }]}}
        ref={ref}
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index
        })}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / width);
          activeIndex.setValue(newIndex);
        }}
        renderItem={({item}) => {
          return (
            <ScrollView
              style={{
                width: width - SPACING * 2,
                margin: SPACING,
                backgroundColor: 'rgba(0,0,0,0.054)',
                borderRadius: 16,
              }}
            >
              <View style={{padding: SPACING}}>
                <Text style={{ fontSize: 16}}>
                  {Array(50).fill(`${item.title} inner text \n`)}
                </Text>
              </View>
            </ScrollView>
          )
        }}
      />
    </SafeAreaView>
  )
}

Detail.sharedElements = (route, otherRoute, showing) => {
  // const { item } = route.params;
  // return [`item.${item.id}.icon`];
  return DATA.map(item => `item.${item.id}.icon`);
}

export default Detail;