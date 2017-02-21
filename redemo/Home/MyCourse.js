import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from  '../Styles';
import NavigationBar from '../Public/NavigationBar';
export default class MyCourse extends Component {
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
             <ScrollView>
               <TouchableOpacity
              
                 >
                 <View style={[styles.courseViewCell,styles.publicWidth]}>
                      <View style={styles.courseView}>
                        <Image
                          source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2965812645,1180239355&fm=116&gp=0.jpg'}}
                          style={styles.courseImage}
                        />
                        <View style={styles.courseRightview}>
                             <View style={styles.courseTitleView}>
                               <Text
                                 numberOfLines={1}
                                 style={styles.courTitle}
                                  >{'React Native'}</Text>
                             </View>
                            <View style={styles.courseInfoView}>
                                 <Text style={styles.time}>{'1024课时'}</Text>
                                 <Text style={styles.number}>{'1024学习'}</Text>
                            </View>
                            <View style={styles.priceView}>
                                   <Text style={styles.priceText}>{'¥19.9'}</Text>
                            </View>

                        </View>
                      </View>
                 </View>

               </TouchableOpacity>
             </ScrollView>
       </View>

    );
  }
}
