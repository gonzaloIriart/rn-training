import React, { Component } from 'react';
import {  Text, View, Button } from 'react-native';


export default class Form extends Component {
        render() {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.title}</Text>
                <Button
                  title={this.props.buttonTitle}
                  onPress ={this.props.onPress}
                />
              </View>
            );
          }
    }

