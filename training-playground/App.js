import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 10,
        }}>
        <View style={{backgroundColor: 'blue',borderColor:'black' ,borderWidth:3.5, flex: 0.3}} />
        <View style={{backgroundColor: 'green', flex: 0.2}} />         
      </View>
      
     
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
