import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from  '../Styles';
import NavigationBar from '../Public/NavigationBar';
export default class Account extends Component {
  render() {
    return (
       <View style={styles.boby}>
              <NavigationBar
                title={this.props.name}
                leftImage={require('../images/leftjiantou.png')}
                leftEvent={
                  this.props.onPrBack
                }
                rightText={'明细'}
                rightEvent={()=>{
                   alert('adf')
                }}
              />
              <View style={styles.accountView}>
                  <Image
                     source={require('../images/qianbao.png')}
                     style={styles.accountViewImage}
                   />
                   <Text style={styles.accountViewMoney}>{'¥ 1000'}</Text>
                   <View style={[styles.btnView,styles.QuestionTextateaBtn]}>
                      <Text style={styles.btnText}>{'充值'}</Text>

                   </View>
              </View>

       </View>

    );
  }
}
