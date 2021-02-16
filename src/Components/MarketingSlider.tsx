import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {SLIDER_DATA} from '../Config/Travel'
import { ITEM_WIDTH, SPACING, width } from '../Config/Theme'

export default () => {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={ ITEM_WIDTH + SPACING}
      contentContainerStyle={{
        paddingRight: width - ITEM_WIDTH - SPACING * 2
      }}
      decelerationRate={'fast'}
      renderItem={({item}) => {
        return (
          <View style={[styles.itemContainer, { backgroundColor: item.color}]}>
            <Text style={[styles.itemText]}>{item.title}</Text>
          </View>
        )
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 0.6,
    backgroundColor: '#025',
    borderRadius: 16,
    padding: SPACING,
    marginLeft: SPACING,
    marginTop: SPACING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20
  }
});