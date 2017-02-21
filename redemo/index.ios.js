/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './Main.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewDemo extends Component {
  render() {
    return (
       <Main/>

    );
  }
}



AppRegistry.registerComponent('NewDemo', () => NewDemo);
