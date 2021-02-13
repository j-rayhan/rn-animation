import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Routes from '../Navigation/Routes';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is Second Page under Second Page Option
          </Text>
          <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate(Routes.FIRST_PAGE)
            }
          />
          <View style={{ marginVertical:16}} />
          <Button
            title="Go to Third Page"
            onPress={
              () => navigation.navigate(Routes.THIRD_PAGE)
            }
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;