import React from 'react';
import {  Text, View } from 'react-native';
import {styles} from './style.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redBox}></View>
        <View style={styles.purpleBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
    );
  }
}

