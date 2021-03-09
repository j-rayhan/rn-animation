import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';


const { width, height} = Dimensions.get('window');

export default class App extends Component {
  state = {
    bollAnimation: new Animated.Value(0),
  }
  animatedBall = () => {
    Animated.timing(this.state.bollAnimation, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: false
    }).start();
  }
  render() {
    const balAnimation = { 
      borderRadius: this.state.bollAnimation
    }
    // console.log('------------>', balAnimation);
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.animatedBall()}>
          <Animated.View style={[styles.box, balAnimation]}></Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: width * 0.5,
    height: width * 0.5,
    // borderRadius: width,
    backgroundColor: 'green'
  }
})