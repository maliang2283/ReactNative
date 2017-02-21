/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from  '../Styles';
export default class ModPassWord extends Component {
  render() {
    return (
       <View style={styles.boby}>
              <View style={[styles.modUserListViewCell,styles.modPassWordCell]}>
                    <Text style={styles.ModUserInfoText}>{'新密码'}</Text>
                    <View  style={styles.modUserInfoRightView}>
                             <TextInput style={styles.modPassInput}/>
                    </View>

              </View>
              <View style={[styles.modUserListViewCell,styles.modPassWordCell]}>
                    <Text style={styles.ModUserInfoText}>{'确认密码'}</Text>
                    <View  style={styles.modUserInfoRightView}>
                             <TextInput style={styles.modPassInput}/>
                    </View>

              </View>
              <TouchableOpacity>
              <View style={styles.modPassView}>
                  <Text style={styles.btnText}>{'提交修改'}</Text>

              </View>
              </TouchableOpacity>

       </View>

    );
  }
}
