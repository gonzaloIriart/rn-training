import React from 'react';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import AppTextInput from './AppTextInput';
import CustomButton from './CustomButton';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <AppTextInput type = {'password'}></AppTextInput>
      
        <CustomButton type = {'primary'} isDisabled = {false} title = {'primary'}></CustomButton>
        <CustomButton type = {'secondary'} isDisabled = {false} title = {'secondary'}></CustomButton>
        <CustomButton type = {'primary'} isDisabled = {true} title = {'disabled'}></CustomButton>
      
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
