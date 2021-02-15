// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/
import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';

// import { Text, View } from '../components/Themed';
import faker from 'faker';

const { width, height } = Dimensions.get('screen');

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={DATA}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item, index }) => {
          const { image, name, jobTitle, email } = item;
          return (
            <View style={{flexDirection: "row", padding: SPACING, marginBottom: SPACING, backgroundColor: 'blue', borderRadius: 12}}>
              <Image
                source={{ uri: image }}
                style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2 }}
              />
              <View>
                <Text style={{ fontSize: 22, fontWeight: '700'}}>{name}</Text>
                <Text style={{ fontSize: 18, opacity: .7}}>{jobTitle}</Text>
                <Text style={{ fontSize: 12, opacity: .8, color: '#0099cc'}}>{email}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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