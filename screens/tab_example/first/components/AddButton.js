import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Animated
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome5, Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72
  },
  buttonPlus: {
    position: 'absolute',
    top: -40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7F58FF',
    width: 72,
    height: 72,
    borderRadius: 36,
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#FFF'
  },
  touchable: {
    width: 72, height: 72, borderRadius: 36, alignItems: 'center', justifyContent: 'center'
  },
  secoundaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7F58FF'
  }
});

class AddButton extends Component {
 buttonSize = new Animated.Value(1);

 mode = new Animated.Value(0);

 // eslint-disable-next-line react/state-in-constructor
 state = { activeValue: 1 }

 handlePress = () => {
   this.setState((prevState) => ({ activeValue: prevState.activeValue === 0 ? 1 : 0 }));
   Animated.sequence([
     Animated.timing(this.buttonSize, {
       toValue: 0.85,
       duration: 200,
       useNativeDriver: true
     }),
     Animated.timing(this.buttonSize, {
       toValue: 1,
       useNativeDriver: true
     }),
     Animated.timing(this.mode, {
       toValue: this.state.activeValue,
       useNativeDriver: true
     })
   ]).start();
 }

 render() {
   const sizeStyle = {
     transform: [{ scale: this.buttonSize }]
   };
   const rotation = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: ['0deg', '45deg']
   });
   const thermometerX = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [10, -80]
   });
   const thermometerY = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [-10, -60]
   });
   const clockX = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [10, 10]
   });
   const clockY = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [-10, -120]
   });
   const pulseX = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [10, 100]
   });
   const pulseY = this.mode.interpolate({
     inputRange: [0, 1],
     outputRange: [-10, -60]
   });
   return (
     <View style={styles.button}>
       <Animated.View style={[
         { ...StyleSheet.absoluteFillObject, top: -20 },
         { transform: [{ translateX: thermometerX, translateY: thermometerY }] }]}
       >
         <View style={styles.secoundaryButton}>
           <Feather name="thermometer" size={24} color="#FFF" />
         </View>
       </Animated.View>
       <Animated.View style={[
         { ...StyleSheet.absoluteFillObject, top: -20 },
         { transform: [{ translateX: clockX, translateY: clockY }] }]}
       >
         <View style={styles.secoundaryButton}>
           <Feather name="clock" size={24} color="#FFF" />
         </View>
       </Animated.View>
       <Animated.View style={[
         { ...StyleSheet.absoluteFillObject, top: -20 },
         { transform: [{ translateX: pulseX, translateY: pulseY }] }]}
       >
         <View style={styles.secoundaryButton}>
           <Feather name="activity" size={24} color="#FFF" />
         </View>
       </Animated.View>
       <Animated.View style={[styles.buttonPlus, sizeStyle]}>
         <TouchableHighlight onPress={this.handlePress} style={styles.touchable} underlayColor="#7F58FF">
           <Animated.View style={{ transform: [{ rotate: rotation }] }}>
             <FontAwesome5 name="plus" size={24} color="#FFF" />
           </Animated.View>
         </TouchableHighlight>
       </Animated.View>
     </View>
   );
 }
}

export default AddButton;
