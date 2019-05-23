import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {  createAppContainer,createBottomTabNavigator } from "react-navigation";
import OtherScreen from './OtherScreen';

export default class App extends React.Component {
  render() {
    return (      
        <AppContainer />        
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Other"
          onPress={() => this.props.navigation.navigate('Other')}
        />
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

const AppNavigator = createBottomTabNavigator(
  {
  Home: HomeScreen,
  Other: OtherScreen
  },
  {
    initialRouteName:'Home'
  }
);

const AppContainer =  createAppContainer(AppNavigator);
