import React from 'react';
import { Text, View, Button } from 'react-native';
import {  createAppContainer,createBottomTabNavigator } from "react-navigation";
import OtherScreen from './OtherScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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



const AppNavigator = createBottomTabNavigator(
  {
  Form: HomeScreen,
  Other: OtherScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName = '';
        if (routeName === 'Form') {
          iconName = 'ios-archive';          
        
        } else if (routeName === 'Other') {
          iconName = 'md-appstore';
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
    initialRouteName:'Form'
  }
);

const AppContainer =  createAppContainer(AppNavigator);
