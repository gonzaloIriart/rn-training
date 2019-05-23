import React, { Component } from 'react';
import {  Text, View, Button } from 'react-native';

export default class OtherScreen extends Component {
   
        render() {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Other Screen</Text>
                <Button
                  title="Go to Details... again"
                  onPress={() => this.props.navigation.push('Details')}
                />
              </View>
            );
          }
    }

