import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from '../Styles';
import Fn from '../Fn';
export default class MessageDetail extends Component {
  componentDidMount(){

    var _this =this;
     var url =Fn.getPublicUrl()+'User/mod_message_state?id='+this.props.data.id;
     
     Fn.fetchUrl(url,function(data){
       alert(data);
       if (data) {
           _this.props.updateMessage();
       }

     });

  }
  render() {
    return (
       <View  style={styles.boby}>
             <NavigationBar
               title={'消息详情'}
               leftImage={require('../images/leftjiantou.png')}
               leftEvent={
                 this.props.onPrBack
               }
             />
            <View style={styles.mdView}>
                 <View style={styles.mdTime}>
                     <Text style={styles.mdTimeText}>{this.props.data.time}</Text>
                 </View>
                 <View style={styles.mdContent}>
                     <Image
                       source={require('../images/head.png')}
                      style={styles.mdHeadImg}
                       />
                       <View style={styles.mdContentView}>

                            <Text style={styles.mdContentViewText}>{this.props.data.content}</Text>
                       </View>

                 </View>
            </View>
            {/*
               右边
               */}
               <View style={[styles.mdView]}>
                    <View style={styles.mdTime}>
                        <Text style={styles.mdTimeText}>{'2017-1-1'}</Text>
                    </View>
                    <View style={[styles.mdContent,styles.mdViewReverse]}>
                        <Image
                          source={require('../images/head.png')}
                         style={styles.mdHeadImg}
                          />
                          <View style={[styles.mdContentView,styles.mdRightContet]}>

                               <Text style={styles.mdContentViewText}>{'Happer yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper yearHapper year'}</Text>
                          </View>

                    </View>
               </View>
       </View>

    );
  }
}
