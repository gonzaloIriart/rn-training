import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import Form from './Form';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return (      
        <AppContainer />        
    );
  }
}

class Form1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Form title ={'Form 1'} buttonTitle={'to Form 2'} buttonNavigation = {'Form2'} onPress={() => this.props.navigation.navigate('Form2')}></Form>       
      </View>
    );
  }
}

class Form2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>        
        <Form title ={'Form 2'} buttonTitle={'to Form 3'} buttonNavigation = {'Form3'} onPress={() => this.props.navigation.navigate('Form3')}></Form>        
      </View>
    );
  }
}

class Form3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Form title ={'Form 3'} buttonTitle={'to Form 1'} buttonNavigation = {'Form1'} onPress={() => this.props.navigation.navigate('Form1')}></Form>        
      </View>
    );
  }
}

const Form1Stack = createStackNavigator({
  Form2: Form2,
  Form3: Form3
});

const Form2Stack = createStackNavigator({
  Form1: Form1,
  Form3: Form3
});

const Form3Stack = createStackNavigator({
  Form1: Form1,
  Form2: Form2
});


const AppNavigator = createBottomTabNavigator(
  {
  Form1: Form1Stack,
  Form2: Form2Stack,
  Form3: Form3Stack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName = '';
        if (routeName === 'Form1') {
          iconName = 'ios-archive';         
        
        } else if (routeName === 'Form2') {
          iconName = 'md-appstore';
        } else{
          iconName = 'ios-add'
        }       
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
    ,tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  {
    initialRouteName:'Form1'
  }
);

const AppContainer =  createAppContainer(AppNavigator);
