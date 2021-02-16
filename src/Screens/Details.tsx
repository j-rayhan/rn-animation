import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, FlatList, ScrollView, Text } from 'react-native';
import { DATA } from '../Config/Travel';
import BackIcon from '../Components/BackIcon';
import Icon from '../Components/Icon';
import { SPACING, width } from '../Config/Theme';
import { SharedElement } from 'react-navigation-shared-element';

const Detail = ({route, navigation}) => {
  const {item} = route.params;
  const ref = React.useRef(null);
  const selectedItemIndex = DATA.findIndex(i => i.id === item?.id);
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackIcon onPress={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
        }}
      >
        {
            DATA.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{padding: SPACING}}
                  onPress={()=>{}}
                  >
                   <SharedElement id={`item.${item.id}.icon`}>
                    <Icon uri={item.imageUri} />
                    </SharedElement>
                  </TouchableOpacity>
              )
            })
          }
      </View>
      <FlatList
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