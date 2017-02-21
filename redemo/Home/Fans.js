
import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../Styles';
export default class Fans extends Component {
  render() {
    return (
       <View style={styles.boby}>
             <NavigationBar
               title={this.props.name}
               leftImage={require('../images/leftjiantou.png')}
               leftEvent={
                 this.props.onPrBack
               }
             />
           <TouchableOpacity>
            <View style={styles.fansViewCell}>
               <View style={styles.fansLeftView}>
                 <Image
                  source={require('../images/head.png')}
                  style={styles.fansHeadImage}
                  />
                  <View style={styles.fansViewRightView}>
                    <Text style={styles.fansViewText}>{'敷衍'}</Text>
                    <Text style={styles.fansViewTextContent}>{'爱学习'}</Text>
                  </View>
               </View>
               <View style={styles.fansRightView}>
                   <TouchableOpacity>
                      <View style={styles.fansbtnView}>
                              <Text style={styles.fansBtnText}>{'关注'}</Text>
                      </View>
                    </TouchableOpacity>

               </View>


            </View>
            </TouchableOpacity>
       </View>

    );
  }
}
