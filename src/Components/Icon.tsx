import React from 'react';
import {View, Image, StyleSheet } from 'react-native';
import { ICON_SIZE } from '../Config/Theme';

const styles = StyleSheet.create({
  imageContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: ICON_SIZE * 0.6,
    height: ICON_SIZE * 0.6,
    resizeMode: 'contain'
  }
})
export default ({ uri }) => {
  return (
    <View style={[styles.imageContainer]}>
      <Image source={{uri}} style={[styles.image]} />
    </View>
  )
}