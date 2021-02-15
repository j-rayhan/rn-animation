import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { RootStackParamList } from '../types';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
const DURATION = 500;
const SPACING = 20;
const ITEM_HEIGHT = height * 0.18;
const TOP_HEADER_HEIGHT = height * 0.3;

const detailsIcons = [
  { color: '#9FD7F1', icon: 'isv' },
  { color: '#F3B000', icon: 'Trophy' },
  { color: '#F2988F', icon: 'edit' },
]
export default function Details({
  navigation, route
}: StackScreenProps<RootStackParamList, 'USER_DETAILS'>) {
  const { item } = route?.params;
  const { image, name, color, categories } = item;

  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={28} style={{
        padding: 12,
        position: 'absolute',
        top: SPACING * 2,
        left: SPACING,
        zIndex: 2,
      }}
        onPress={() => navigation.goBack()}
      />
      <View style={[
        StyleSheet.absoluteFillObject, {
        backgroundColor: color,
        borderRadius: 0, 
        height: TOP_HEADER_HEIGHT + 32
      }]}
      />
      <Text style={styles.name}>{name}</Text>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.bg}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: SPACING + 32, marginVertical: SPACING }}>
          {detailsIcons.map((item, i) => {
            return (
              <Animatable.View
                animation='bounceIn'
                delay={DURATION + i * 100}
              key={`${item.icon}-${i}`} style={{ justifyContent: 'center', alignItems: 'center', height: 42, width: 42, borderRadius: 42, backgroundColor: item.color }}>
                <AntDesign name={item.icon} size={16} color={'white'} />
              </Animatable.View>
            )
          })}
          </View>
          <View>
            {categories.map((item, index) => {
              return (
                <Animatable.View
                animation='fadeInUp'
                delay={DURATION * 2 + index * 100}
                key={item.key} style={{marginVertical: SPACING}}>
                  <Text style={styles.title}>{item.title}</Text>
                  {
                    item.subcats.map((subcat, index) => {
                      return (
                        <View key={`${index}`} style={{flexDirection: 'row', alignItems: 'center', marginBottom: SPACING/2, marginLeft: SPACING}}>
                          <View 
                            style={{
                              height: 6,
                              width: 6,
                              borderRadius: 6,
                              backgroundColor: 'gold',
                              marginRight: SPACING,
                            }}
                          />
                          <Text style={styles.subTitle}>{subcat}</Text>
                        </View>
                      )
                    })
                  }
                </Animatable.View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: TOP_HEADER_HEIGHT - SPACING * 3,
    left: SPACING,
  },
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8,
    borderRadius: ITEM_HEIGHT,
    right: SPACING,
  },
  bg: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'white',
    transform: [{ translateY: TOP_HEADER_HEIGHT }],
    borderRadius: 32,
    padding: SPACING,
    paddingTop: SPACING + 32,
    paddingBottom: TOP_HEADER_HEIGHT
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: SPACING
  },
  subTitle: {
    fontSize: 14,
    opacity: 0.7
  },
});
