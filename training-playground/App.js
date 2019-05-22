import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
        style={{          
          height: 100,
          flexDirection: "row",
          padding: 10          
        }}>
        <View style={{backgroundColor: 'pink', flex: 0.3,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.2,margin:2}} /> 
        <View style={{backgroundColor: 'grey',borderColor:'purple' ,borderWidth:2, flex: 0.7,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.5,margin:2}} />
      </View> 

      <View
        style={{          
          height: 90,
          flexDirection: "row",
          padding: 10          
        }}>
        <View style={{backgroundColor: 'blue',borderColor:'orange' ,borderWidth:1.5, flex: 0.7,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.3,margin:2}} /> 
        <View style={{backgroundColor: 'grey', flex: 0.5,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.7,margin:2}} />
      </View> 

      <View
        style={{          
          height: 150,
          flexDirection: "row",
          padding: 10          
        }}>
        <View style={{backgroundColor: 'blue',borderColor:'black' ,borderWidth:3.5, flex: 0.3,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.8,margin:2}} /> 
        <View style={{backgroundColor: 'grey', flex: 0.2,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.5,margin:2}} />
      </View> 
       
      <View
        style={{          
          height: 15,
          flexDirection: "row",
          paddingHorizontal: 10    
        }}>
        
        <View style={{backgroundColor: 'red', flex: 1,margin:2}} />
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
