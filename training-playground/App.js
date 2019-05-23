import React from 'react';
import {  Text, View } from 'react-native';
import {styles} from './style.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.redBox ,styles.borderStyle]} ></View>
        <View style={[styles.purpleBox ,styles.borderStyle]}></View>
        <View style={[styles.whiteBox ,styles.borderStyle]}></View>
      </View>
    );
  }
}

