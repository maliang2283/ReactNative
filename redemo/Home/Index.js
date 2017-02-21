/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import message from './Message';
import modUserInfo from './ModUserInfo';
import myCourse from './MyCourse';
import fans from './Fans';
import account from './Account';

import login from '../LoginAndRegister/Login';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from  '../Styles';
import Fn from '../Fn';
export default class Index extends Component {
   constructor(props){
       super(props);
       this.state = {
          isLogin:false,
          name:'请登陆',
          content:'登陆后可查看',
          head_imag :require('../images/head.png'),
          sNumber:0,
          sex:'',
          fans1Number:0,
          fans2Number:0,
          updateInfo:(head_img,name,about)=>{
            this.setState({
              name:name,
              content:about,
              head_imag :{uri:Fn.getTopUrl()+head_img},


            })
          }

       };
   }
   pushFins(navigator,name){
      navigator.push({
         name:'粉丝和关注',
         component:fans,
         passProps:{
            name:name
         }
      })

    }
    pushMyCourse(navigator,name){
      navigator.push({
         name:'我的课程',
         component:myCourse,
         passProps:{
            name:name
         }
      })
    }
    //我们的网络请求或者一些耗性能的东西，尽量放到组件渲染完成以后去处理
    componentDidMount(){
       this.getUserInfo(this);

    }
    // 获取最新的用户信息
    getUserInfo(_this){
      // 1.判读你是不是已经登陆过了
       AsyncStorage.getItem('loginPhone',function(err,phone){
               if (!phone) {
                   return ;
               }
               // 2.如果你以前已经登陆过了，直接获取数据
               var url=Fn.getPublicUrl()+'User/get_user_info?phone='+phone;
               Fn.fetchUrl(url,function(data){
                  // 如果名字没有设置，我们显示他的电话名字
                  var name = '';
                  if (data.name == "") {
                       name =data.phone;

                  }else {
                      name =data.name;
                  }
                  // 判断是否下自我描述
                  var about = "";
                  if (data.about == "") {
                      about ="啥也没写" ;
                  } else {
                     about =data.about ;
                  }
                  // 判断头像是否有
                  var head_img = '';
                  if (data.head_img == '') {
                       head_img =_this.state.head_imag;
                  } else {

                      head_img ={uri:Fn.getTopUrl()+data.head_img };

                  }
                  // 判断选择性别
                  var sex="未选择";
                  if (data.sex) {
                     sex=data.sex;
                  }
                  // 设置
                  _this.setState({
                    name:name,
                    content:about,
                    head_imag :head_img,
                    isLogin:true,
                    sex:sex
                  })

               })
       })


    }
  render() {
    return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          >

         <View  style={styles.boby}>

                {/*
                   头部背景
                  */}
              <View  style={styles.homeBgView}>
                  <Image
                     source ={require('../images/homehead.jpg')}
                     style={styles.home_bg}
                  />
                  {
                    this.state.isLogin ? (

                        <TouchableOpacity
                          style={{
                              position:'absolute',
                              top:10,
                              right:10
                          }}
                            activeOpacity={0.9}
                            onPress={()=>{
                              this.props.navigator.push({
                                name:'设置',
                                component: modUserInfo,
                                passProps:this.state
                              })

                            }}
                          >
                               <Image
                                source={require('../images/shizhi.png')}
                                style={styles.homeTopRightImage}
                               />
                        </TouchableOpacity>

                    ):null
                  }
                 {
                   this.state.isLogin ?(
                     <TouchableOpacity
                       style={{
                           position:'absolute',
                           top:10,
                           left:10
                       }}
                         activeOpacity={0.9}
                         onPress={()=>{
                           this.props.navigator.push({
                             name:'消息',
                             component: message

                           })


                         }}
                       >
                            <Image
                             source={require('../images/shizhi.png')}
                             style={styles.homeTopRightImage}
                            />
                     </TouchableOpacity>
                   ):null
                 }


              </View>
              {/*
                 用户的信息
                */}
              <View  style={styles.homeinfoView}>
                <TouchableOpacity
                   activeOpacity={0.9}
                   style={{alignItems:'center'}}

                   onPress={()=>{
                       var _this =this ;
                       if(this.state.isLogin){
                          return ;
                       }
                       this.props.navigator.push({
                           name:'登陆',
                           component:login ,
                           passProps:{
                               updateUserInfo:function(phone){
                                   _this.setState({
                                        isLogin: true,
                                        name:phone ,
                                        content:'啥也没写'
                                   })

                               }
                           }
                       })
                   }}
                  >
                   <View style={styles.homeinfoViewPos}>
                       <Image
                          source ={this.state.head_imag}
                          style={styles.home_head_img}
                       />
                       <Text style={styles.homeInfoName}>{this.state.name}</Text>
                       <Text style={styles.homeInfoContent}>{this.state.content}</Text>
                   </View>
                </TouchableOpacity>
              </View>
              {/*
                 我的学习
                */}
                <View style={styles.homeNavTopView}>
                     <View  style={styles.homeNavView}>
                           <Text style={styles.homeNavNumber}>{this.state.sNumber}</Text>
                           <Text style={styles.homeNavSpan}>{'节学习'}</Text>
                     </View>

                     <View style={styles.homeNavView}>
                       <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={this.pushFins.bind(this,this.props.navigator,'粉丝')}
                          style={{
                             alignItems:'center'
                          }}
                       >
                           <Text style={styles.homeNavNumber}>{this.state.fans1Number}</Text>
                           <Text style={styles.homeNavSpan}>{'粉丝'}</Text>
                        </TouchableOpacity>
                     </View>


                     <View style={styles.homeNavView}>
                       <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={this.pushFins.bind(this,this.props.navigator,'关注')}
                          style={{
                             alignItems:'center'
                          }}
                         >
                           <Text style={styles.homeNavNumber}>{this.state.fans2Number}</Text>
                           <Text style={styles.homeNavSpan}>{'关注'}</Text>
                         </TouchableOpacity>
                     </View>

                </View>
              {
                /*
                    列表
                 */
              }
              <View style={styles.listView}>
                  <TouchableOpacity
                     activeOpacity={0.9}
                     onPress={this.pushMyCourse.bind(this,this.props.navigator,'我的课程')}
                    >
                      <View style={styles.listViewCell}>
                         <Image
                             source={require('../images/shipin.png')}
                             style={styles.listViewCellIcon}
                         />
                         <Image
                             source={require('../images/arrows.png')}
                             style={styles.arrow}
                         />
                         <Text style={styles.listViewCellText}>{'我的课程'}</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.9}
                     onPress={this.pushMyCourse.bind(this,this.props.navigator,'我的收藏')}
                    >
                        <View style={styles.listViewCell}>
                           <Image
                               source={require('../images/shoucang.png')}
                               style={styles.listViewCellIcon}
                           />
                           <Image
                               source={require('../images/arrows.png')}
                               style={styles.arrow}
                           />
                           <Text style={styles.listViewCellText}>{'我的收藏'}</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity
                   activeOpacity={0.9}
                   onPress={()=>{
                       this.props.navigator.push({
                         name:'我的账户',
                         component:account,
                         passProps:{
                            name:'我的账户'
                         }
                       })
                   }}
                  >
                  <View style={styles.listViewCell}>
                     <Image
                         source={require('../images/zhanghu.png')}
                         style={styles.listViewCellIcon}
                     />
                     <Image
                         source={require('../images/arrows.png')}
                         style={styles.arrow}
                     />
                     <Text style={styles.listViewCellText}>{'我的账户'}</Text>
                  </View>
                </TouchableOpacity>
                  <View style={styles.listViewCell}>
                     <Image
                         source={require('../images/shizhi.png')}
                         style={styles.listViewCellIcon}

                     />
                     <Image
                         source={require('../images/arrows.png')}
                         style={styles.arrow}
                     />
                     <Text style={styles.listViewCellText}>{'学习记录'}</Text>
                  </View>

              </View>
         </View>
         </ScrollView>
    );
  }
}
