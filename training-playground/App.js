import React from 'react';
import { Image, Text, View } from 'react-native';
import {styles} from './style.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerText} >
          <Text style = {styles.title}>
            Title of the article
          </Text>
          <Text style={{fontStyle:'italic',margin: 10}}>
          by <Text style={{color:'blue'}}>author</Text>
          </Text>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.container}>
            <Image source={require('./social-buttons/comentario.png')}/>
            <Image source={require('./social-buttons/face.png')}/>
            <Image source={require('./social-buttons/insta.png')}/>
            <Image source={require('./social-buttons/linkedin.png')}/>
            <Image source={require('./social-buttons/pinterest.png')}/>
          </View>
        </View>     

        <View style={styles.containerImg}>
          <Image source = {{uri: 'https://i.pinimg.com/originals/2b/66/19/2b6619f49cc04b95b2ae27f995c365f3.jpg'}}style={{width: 80, height: 160}}/>
        </View>
        
      </View>
    );
  }
}

