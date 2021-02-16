import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
//
import MarketingSlider from '../Components/MarketingSlider'
import Icon from '../Components/Icon'
import { SPACING } from "../Config/Theme";
import { DATA } from '../Config/Travel';

const List = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
                  onPress={()=>{}}
                  >
                    <Icon uri={item.imageUri} />
                  </TouchableOpacity>
              )
            })
          }
        </View>
    </SafeAreaView>
  )
}

export default List;