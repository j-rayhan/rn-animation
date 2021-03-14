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

const RenderIcon = ({translateX, translateY, iconName}) => (
  <Animated.View
    style={[
      {
        ...StyleSheet.absoluteFillObject,
        top: -20,
      },
      {transform: [{translateX}, {translateY}]},
    ]}>
    <View style={styles.secondaryButton}>
      <IconEON
        origin={ICON_TYPE.FEATHER_ICONS}
        name={iconName}
        size={24}
        color="#FFF"
      />
    </View>
  </Animated.View>
);
const AddButton = () => {
  const buttonSize = useRef(new Animated.Value(1)).current;
  const mode = useRef(new Animated.Value(0)).current;

  const [activeValue, setActiveValue] = useState(1);

  const handlePress = () => {
    setActiveValue((prevState) => (prevState === 0 ? 1 : 0));
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.85,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(mode, {
        toValue: activeValue,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '90deg'],
  });
  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -80],
  });
  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, -60],
  });

  const clockX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 10],
  });
  const clockY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, -120],
  });
  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 100],
  });
  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, -60],
  });
  return (
    <View style={styles.button}>
      <RenderIcon
        {...{
          translateX: thermometerX,
          translateY: thermometerY,
          iconName: 'thermometer',
        }}
      />
      <RenderIcon
        {...{translateX: clockX, translateY: clockY, iconName: 'clock'}}
      />
      <RenderIcon
        {...{translateX: pulseX, translateY: pulseY, iconName: 'activity'}}
      />
      <Animated.View
        style={[styles.buttonPlus, {transform: [{scale: buttonSize}]}]}>
        <TouchableWithoutFeedback
          onPress={() => handlePress()}
          style={styles.touchable}
          underlayColor="#7F58FF">
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <IconEON
              origin={ICON_TYPE.FEATHER_ICONS}
              name="x"
              size={24}
              color="#FFF"
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default AddButton;
