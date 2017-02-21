import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
var Dimensions=require("Dimensions");
var {width,height} =Dimensions.get('window');
export default class NavigationBar extends Component {
  render() {
    return (
       <View style ={[styles.headerTopView,this.props.navigationBarStyle]}>
          <View style={styles.headerView}>
              {
                 /*
                 *left view
                */
              }
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.headerViewLeft}
                onPress={
                  this.props.leftEvent
                }
              >
                {
                  this.props.leftImage?(
                    <Image
                    source={this.props.leftImage}
                    style={styles.headerArrowImage}
                    />
                  ) :null
                }
                {
                  this.props.leftText ?(
                       <Text style={[styles.headerText,{marginLeft:this.props.leftImage ? -3:0}]}>{this.props.leftText}</Text>
                  ):null
                }


              </TouchableOpacity>
              {
                /*
                 标题
                */
              }
              <View>
                  <Text style={styles.headTitle}>{this.props.title || ''}</Text>
              </View>
              {
                /*
                 right view
                */
              }
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.headerViewRight}
                onPress ={this.props.rightEvent}
                >
                  {
                    this.props.rightText ?(
                       <Text style={styles.headerText}>{this.props.rightText}</Text>
                    ):null
                  }
                  {
                    this.props.rightImage ?(
                      <Image
                      source={require('../images/leftjiantou.png')}
                      style={styles.headerArrowImage}
                      />
                    ):null
                  }



              </TouchableOpacity>

          </View>
       </View>

    );
  }
}
const styles =StyleSheet.create({
   headerTopView:{
      height:44,
      width:width,
      backgroundColor:'#0070cd'
   },
   headerView:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height:44
   },
   headTitle:{
      color:'#fff',
      fontSize:18
   },
   headerViewRight:{
     paddingRight:10,
     flexDirection:'row',
     alignItems:'center',
     position:'absolute',
     right:10,
     top:13
   },
   headerViewLeft:{

      flexDirection:'row',
      alignItems:'center',
      position:'absolute',
      left:10,
      top:10
   },
   headerText:{
     color:'#fff',
     fontSize:15
   },
   headerArrowImage:{
      height:26,
      width:26
   }

});
