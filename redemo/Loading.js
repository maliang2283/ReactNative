import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './Styles';
export default class Loading extends Component {
  constructor(props){
     super(props);

  }
  render() {
    return (
      <View style={styles.publicLoadingView}>
           <Text style={styles.publicLoadingText}>{'loading...'}</Text>
      </View>

    );
  }
}
