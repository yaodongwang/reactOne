/**
 * Created by Administrator on 2016/9/18.
 */
import React, { Component } from 'react';
import {
    View, Text, TextInput,
} from 'react-native';

export default class textInput extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {text : ''};
      }

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text>{this.state.text}</Text>
            </View>
        );
    }

}