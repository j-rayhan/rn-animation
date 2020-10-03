import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

function TabADetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button
        onPress={() => navigation.navigate('TabA Details')}
        title="Go to TabA Details"
      />
    </View>
  );
}

TabADetailsScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired
};

export default TabADetailsScreen;
