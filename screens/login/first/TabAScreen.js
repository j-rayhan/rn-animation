import React from 'react';
import { View, StyleSheet, StatusBar, Animated, Dimensions, Text } from 'react-native';

const { height } = Dimensions.get("window");
const LOGO_HEIGHT = height * 0.7 * 0.4
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a'
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: LOGO_HEIGHT,
    height: LOGO_HEIGHT,
    borderRadius: LOGO_HEIGHT / 2
  }
})
function TabAScreen() {
  const opacity = new Animated.Value(0);

  // const onLoad = () => {
  //   Animated.timing(opacity, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        {/* <Animated.Image
          onLoad={onLoad} 
          source={require("../../../assets/app_logo.png")}
          style={[
            {
              opacity: opacity,
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.75, 1],
                  })
                },
              ],
            },
            styles.logo,
          ]}
        /> */}
      </View>
      <View style={styles.footer}>
        <Text>Stay connect with everyone!</Text>
        <Text animation="zoomInUp">Zoom me up, Scotty</Text>
      </View>
    </View>
  );
}

export default TabAScreen;
