import React, { Component } from 'react'
import { View, TextInput } from 'react-native';


export default class AppTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'enter text' };
      }

      onPress = () => {
        this.setState({text:''});
      }

    render() {
        return (
            <View>
        <TextInput onTouchStart={this.onPress} clearTextOnFocus={true} secureTextEntry={(this.props.type==='password')} 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      

            </View>
        )
    }
}

