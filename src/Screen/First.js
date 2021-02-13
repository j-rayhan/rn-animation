import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Routes from '../Navigation/Routes';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate(Routes.SECOND_PAGE)
            }
            title="Go to Second Page"
          />
          {/* <View style={{ marginVertical:16}} />
          <Button
            onPress={
              () => navigation.navigate(Routes.THIRD_PAGE)
            }
            title="Go to Third Page"
          /> */}
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

export default FirstPage;