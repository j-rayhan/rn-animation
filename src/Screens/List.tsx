import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
//
import { StatusBar } from 'expo-status-bar';
import MarketingSlider from '../Components/MarketingSlider'
import Icon from '../Components/Icon'
import { SPACING } from "../Config/Theme";
import { DATA } from '../Config/Travel';
import { SharedElement } from 'react-navigation-shared-element';

const List = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>

<StatusBar hidden/>
      <MarketingSlider />
      <View 
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20
        }}
        >
          {
            DATA.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{padding: SPACING}}
                  onPress={()=>{navigation.push('Detail', {item})}}
                  >
                   <SharedElement id={`item.${item.id}.icon`}>
                    <Icon uri={item.imageUri} />
                   </SharedElement>
                  </TouchableOpacity>
              )
            })
          }
        </View>
    </SafeAreaView>
  )
}

export default List;