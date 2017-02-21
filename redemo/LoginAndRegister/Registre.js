import React, { Component } from 'react';
import styles from  '../Styles';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import  Fn from '../Fn';
export default class Registre extends Component {
  constructor(props){
      super(props);
      this.state ={
          phone:'',
          code:'',
          inputCode:'',
          password:'',
          codeText:'发送验证码'
      }
  }

  render() {
    return (
      <View  style={styles.boby}>
             {
               /*
                 安卓沉浸式

               */
             }
          <StatusBar
                backgroundColor="#0070cd"
          />
          {
              /*
                  图标=背景
              */
            }
            <View style={styles.registreTopView}>
                <Image
                source ={require('../images/dongtai.gif')}
                  style={styles.registre_img}
                />
            </View>
            {
              /*
               中间的是一个整块
              */
            }
            <View  style={styles.centerView}>
                <Text style={styles.registreText}>{'用户注册'}</Text>

                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'输入手机号码'}
                             underlineColorAndroid='transparent'
                             onChangeText={(data)=>{
                               this.setState({
                                   phone:data
                               })

                             }}
                          />
                    </View>
                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'输入验证码'}
                             underlineColorAndroid='transparent'
                             onChangeText={(data)=>{
                               this.setState({
                                   inputCode:data
                               })


                             }}
                          />

                          <Text
                            onPress={()=>{
                            var codeText =this.state.codeText ;
                             if(codeText !='发送验证码'){
                                return;
                             }
                             //  1.获得要发送的手机号码
                              var phone=this.state.phone;
                              if(phone ==''||phone.length !=11){
                                 Fn.showToast('手机号码错误',2000);
                                 return;
                              }
                              // 2.我们生产一个验证码
                              var code=Fn.createCode(4);

                              this.setState({
                                 code :code
                              })
                              // 3.发送
                              var url=Fn.sendCodeUrl(phone,code);
                              var _this =this ;
                              //请求
                              Fn.fetchUrl(url,function(data){
                                var num =60 ;
                                var timer=setInterval(function(){
                                     num -- ;
                                     let content = '';
                                     if (num == 0) {
                                          content ='发送验证码';
                                          clearInterval(timer);
                                     } else {
                                        content =num +'s';
                                     }
                                     _this.setState({
                                          codeText:content
                                     })
                                },1000);
                              })


                            }}
                            style={styles.registreCode}>{this.state.codeText}</Text>

                    </View>
                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'输入密码'}
                             underlineColorAndroid='transparent'
                             secureTextEntry
                             onChangeText={(data)=>{
                               this.setState({
                                   password:data
                               })

                             }}
                          />
                    </View>

             <TouchableOpacity
               activeOpacity ={0.9}

               onPress ={()=>{
                 var _this =this ;
                   var phone = this.state.phone ;
                   if(phone ==''||phone.length !=11){
                      Fn.showToast('手机号码错误',2000);
                      return;
                   }

                   var code =this.state.code ;
                   var inputCode =this.state.inputCode;
                  //  if(inputCode ==''||inputCode.length !=4){
                  //     Fn.showToast('验证码不正确',2000);
                  //     return;
                  //  }
                  //  if(inputCode !=code){
                  //    Fn.showToast('验证码不正确',2000);
                  //    return;
                  //  }
                   var password =this.state.password;
                   if(password ==''){
                      Fn.showToast('密码不能为空',2000);
                      return;
                   }
                   var url=Fn.getPublicUrl()+'User/register';

                   Fn.fetchUrl(url,function(data){

                      if (data >0) {
                         Fn.showToast('注册成功');
                        //  本地存储
                        try {
                           AsyncStorage.setItem('loginPhone',phone);
                        } catch (e) {
                          console.log(e);
                        }
                         _this.props.updateUserInfo(phone);
                        // pop是推出一层 popN(2)是推出2层
                         _this.props.navigator.popN(2);
                      } else {
                         Fn.showToast('注册失败,请重新尝试');
                      }
                   },
                   'POST',
                   {
                        phone:phone,
                        password:password

                   });

               }}
               >
                <View style={styles.btnView}>
                  <Text   style={styles.btnText}>{'注册'}</Text>
                </View>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}
