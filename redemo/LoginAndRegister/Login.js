/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from  '../Styles';
import register from '../LoginAndRegister/Registre';
import  Fn from '../Fn';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Main extends Component {
  constructor(props){
      super(props);
      this.state ={
          phone:'',
          password:'',

      }
  }
  render() {
    return (
      <View  style={styles.boby}>
          {
            /*
              头像
            */
          }
          <View style={styles.imgView}>
              <Image
              source ={require('../images/head.png')}
              style={styles.img}
              />
          </View>
          {
            /*
              输入框
            */
          }
          <View style={styles.TextInputView}>
              <View style={styles.inputView}>
                    <Image
                    source ={require('../images/shouji.png')}
                     style={styles.inputImg}
                    />
                    <TextInput
                       style={styles.input}
                       placeholder={'输入手机号码'}
                       underlineColorAndroid='transparent'
                       onChangeText={(data)=>{
                           this.setState({
                             phone:data
                           })
                       }}
                    />
              </View>
              <View style={styles.inputView}>
                    <Image
                    source ={require('../images/suo.png')}
                     style={[styles.inputImg,{marginLeft:-5}]}
                    />
                    <TextInput
                       style={styles.input}
                       placeholder={'输入密码'}
                       secureTextEntry ={true}
                       underlineColorAndroid='transparent'
                       onChangeText={(data)=>{
                           this.setState({
                             password:data
                           })
                       }}
                    />
              </View>
          </View>
          {
            /*
              登陆按钮
            */
          }
          <View style={styles.btnTopView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
              var _this =this ;
                var phone = this.state.phone ;
                if(phone ==''||phone.length !=11){
                   Fn.showToast('手机号码错误',2000);
                   return;
                }
                var password =this.state.password;
                if(password ==''){
                   Fn.showToast('密码不能为空',2000);
                   return;
                }
                // 请求数据库
                var url=Fn.getPublicUrl()+'User/login?phone='+phone+'&password='+password;
                Fn.fetchUrl(url,function(data){
                      if (data == -1) {
                          Fn.showToast('手机号码不存在');

                      } else if(data == 0){
                        Fn.showToast('密码不正确');

                      }else {
                          Fn.showToast('登陆成功');
                          //  本地存储
                          try {
                             AsyncStorage.setItem('loginPhone',phone);
                          } catch (e) {
                            console.log(e);
                          }
                           _this.props.updateUserInfo(phone);
                           _this.props.navigator.pop();
                      }
                });
            }}
            >
                <View style={styles.btnView}>
                      <Text style={styles.btnText}>{'登陆'}</Text>
                </View>
            </TouchableOpacity>
          </View>
          {
            /*
              忘记密码
            */
          }
          <View style={styles.forgetView}>
            <TouchableOpacity
              activeOpacity={0.8}
              >
                <Text style={styles.forgetText}>{'忘记密码'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>{
                 this.props.navigator.push({
                     name:'注册',
                     component:register,
                     passProps:{
                       updateUserInfo:this.props.updateUserInfo
                     }
                 })
              }}
              >
                <Text style={styles.forgetText}>{'注册'}</Text>
            </TouchableOpacity>
          </View>
          {
            /*
              第三方登陆
            */
          }
          <View style={styles.oView}>
              <Text style={styles.oText}>{'第三方登陆:'}</Text>
                 <TouchableOpacity>
                <Image
                source ={require('../images/QQ.png')}
                 style={styles.loginIconImage}
                />
                  </TouchableOpacity>
                    <TouchableOpacity>
                <Image
                source ={require('../images/weixin.png')}
                 style={styles.loginIconImage}
                />

                  </TouchableOpacity>
          </View>
      </View>
    );
  }
}
