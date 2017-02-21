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
  TouchableOpacity
} from 'react-native';

export default class ForgetPassword extends Component {
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
                <Text style={styles.registreText}>{'找回密码'}</Text>

                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'输入手机号码'}
                             underlineColorAndroid='transparent'
                          />
                    </View>
                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'输入验证码'}
                             underlineColorAndroid='transparent'
                          />

                          <Text style={styles.registreCode}>{'发送验证码'}</Text>

                    </View>
                    <View style={styles.regisetInputView}>
                          <TextInput
                             style={styles.reagistreInput}
                             placeholder={'新密码'}
                             underlineColorAndroid='transparent'
                          />
                    </View>

             <TouchableOpacity>
                <View style={styles.btnView}>

                    <Text style={styles.btnText}>{'注册'}</Text>
                </View>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}
