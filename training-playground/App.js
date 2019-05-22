import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style ={{height:15}}></View>
        <ScrollView style={{flex: 1,
        width: "100%"
         }}>
        <Text style={{margin:15, textAlign:"center",fontSize:25}}>Text <Text style={{fontWeight: 'bold'}}>nesting </Text>123</Text>
        <View
        style={{          
          height: 300,
          flexDirection: "row",    
          padding: 10      
        }}>
        
        <View style={{backgroundColor: 'pink', flex: 0.3,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.2,margin:2}} /> 
        <View style={{backgroundColor: 'grey',borderColor:'purple' ,borderWidth:2, flex: 0.7,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.5,margin:2}} />
      </View> 
      <Text style={{margin:15, textAlign:"center",fontSize:20}}>Text  123</Text>
      <View
        style={{          
          height: 190,
          flexDirection: "row",    
          padding: 10    
        }}>
        
        <View style={{backgroundColor: 'blue',borderColor:'orange' ,borderWidth:1.5, flex: 0.7,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.3,margin:2}} /> 
        <View style={{backgroundColor: 'grey', flex: 0.5,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.7,margin:2}} />
      </View> 
      <Text style={{margin:15, textAlign:"center"}}>Text 123</Text>
      <View
        style={{          
          height: 350,
          flexDirection: "row",
          padding: 10        
        }}>
        <View style={{backgroundColor: 'blue',borderColor:'black' ,borderWidth:3.5, flex: 0.3,margin:2}} />
        <View style={{backgroundColor: 'green', flex: 0.8,margin:2}} /> 
        <View style={{backgroundColor: 'grey', flex: 0.2,margin:2}} />  
        <View style={{backgroundColor: 'red', flex: 0.5,margin:2}} />
      </View> 
      <Text style={{margin:15, textAlign:"center", fontWeight:'800'}}>Text 123</Text>
      <View
        style={{          
          height: 150,
          flexDirection: "row",
          paddingHorizontal: 10    
        }}>
        
        <View style={{backgroundColor: 'red', flex: 1,margin:2}} />
      </View> 
      </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
