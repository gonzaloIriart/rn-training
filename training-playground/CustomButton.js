import React, { Component } from 'react'
import {  TouchableOpacity,Text } from 'react-native';

const getTextStyle=(type,isDisabled)=>{
    if(isDisabled){
        return {
            backgroundColor: 'transparent',
            borderColor: '#EAEAEA',
            color: '#EAEAEA'
        }
    }
    if(type === 'primary'){
        return {
            backgroundColor: 'green',
            borderColor: 'green',
            color: 'white'
        }
    }
    if(type === 'secondary'){
        return {
            backgroundColor: 'transparent',
            borderColor: 'blue',
            color: 'blue'
        }
    }
}
export default class CustomButton extends Component {

    
    render() {
        const {type,isDisabled,title} = this.props;
        
            return (
                <TouchableOpacity  style={[{margin: 15,paddingVertical:5,paddingHorizontal:10,borderRadius:25,borderWidth:2},getTextStyle(type,isDisabled)]}>
                <Text style={getTextStyle(type,isDisabled)}>{title}</Text>
                </TouchableOpacity>
            )
        }
        
    }


