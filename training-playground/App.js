import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import AppTextInput from './AppTextInput';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <AppTextInput type = {'password'}></AppTextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
