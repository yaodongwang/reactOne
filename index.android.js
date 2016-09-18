/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';

import Textinput from './util/textInput';

class reactOne extends Component {
  render() {
    return (
      <Textinput/>
    );
  }
}

AppRegistry.registerComponent('reactOne', () => reactOne);
