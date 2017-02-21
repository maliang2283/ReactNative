/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles';
import NavigationBar from '../Public/NavigationBar';
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
import Fn from '../Fn';
import Comment from './Comment';
export default class CourseDetail extends Component {
    constructor(props){
       super(props);
       this.state ={
           defaultPath:'describe',
           opacity:0,
           courseData:'',
           commentList:'',
           isComment:false,
           collTitle:'收藏',

       }
      }
      _onScroll(e){
           var  y=e.nativeEvent.contentOffset.y;
           this.setState({
               opacity:y/30,
           })

      }
    createCourseList(){
       var arr=[];
          for(var a=1;a<=20;a++){
                arr.push(
                  <View key={a} style={styles.couresDetailCatalogView}>
                       <Text style={styles.couresDetailCatalogName}>{'第'+a+'节'}</Text>
                       <Text style={styles.couresDetailCatalogTime}>{'10分钟'}</Text>
                  </View>
                )
          }
          return arr;
    }
    componentDidMount(){
       this.getComment();
       var id =this.props.id;
       var url =Fn.getPublicUrl()+'Index/get_course_detail?id='+id;
      var _this =this ;
       Fn.fetchUrl(url,function(data){
               _this.setState({
                  courseData:data,
               })
       });

    }
    // 收藏
async   _coll(){
      var id =this.props.id;
      var phone =await AsyncStorage.getItem('loginPhone');
      if (!phone) {
         Fn.showToast('请先登陆');
         return ;
      }
       var url =Fn.getPublicUrl()+'User/add_coll?course_id='+id+'&phone='+phone;
       var _this =this ;

        Fn.fetchUrl(url,function(data){
          var title= _this.state.collTitle;
      if(title =='收藏'){
           title ="取消收藏";
        }else {
            title ='收藏'
        }
       _this.setState({
           collTitle:title
       })
        });

    }
    getComment(){
       var id =this.props.id;
      var url =Fn.getPublicUrl()+'Index/getComment?id='+id;
      var _this =this ;
       Fn.fetchUrl(url,function(data){
               _this.setState({
                  commentList:data
               })
       });
    }
   async  addComment(){
      // 判断有没有登陆
      var phone =await AsyncStorage.getItem('loginPhone');
      if (!phone) {
         Fn.showToast('请先登陆');
         return ;
      }

      // 判断有没有购买

      this.props.navigator.push({
        name:'课程评价',
        component:Comment,
        passProps:{
            id:this.props.id,
            updataComment:()=>{
                this.getComment()
            }
        }

      })
    }
    createComment(){
      let arr=[];
      let list =this.state.commentList;
      for (var i = 0; i < list.length; i++) {
        let name ='';
        let head_img ='';
        if (list[i].user.name) {
            name =list[i].user.name;
        }else {
           name =list[i].user.phone;
        }
        if (list[i].user.head_img) {
            head_img=list[i].user.head_img;
        }else {
           head_img=require('../images//head.png');
        }
        arr.push(
          <View key={i} style={styles.courseCommentCell}>
              <Image
                 source={head_img}
                 style={styles.courseCommentImage}
                 />
              <View style={styles.courseCommentRight}>
                  <View style={styles.courseCommentUserAndTime}>
                     <Text style={styles.courseCommentName}>{name}</Text>
                     <Text style={styles.courseCommentTime}>{list[i].time}</Text>
                  </View>
                   <Text style={styles.courseCommentContant}>{list[i].content}</Text>
              </View>
          </View>
        )
      }
      return arr ;
    }

  render() {
    return (
       <View style={styles.boby}>
            <NavigationBar
              title={this.props.title}
              leftImage={require('../images/leftjiantou.png')}
              navigationBarStyle={{
                  position:'absolute',
                  top:0,
                  left:0,
                  zIndex:999,
                  opacity:this.state.opacity,

              }}
              leftEvent={
                this.props.onPrBack
              }


            />

           {
             /*
              视频
              */
           }
           <ScrollView
              style={{marginBottom:30}}
              onScroll={this._onScroll.bind(this)}
             >
          <View style={styles.couresDetailVideo}>
                  <Image
                     source={{uri:'http://i.dongyixueyuan.com/courses/'+this.state.courseData.img}}
                     style={styles.couresDetailVideoImage}

                  />
                <TouchableOpacity
                  style={styles.couresDetailArrowView}
                  activeOpacity={0.9}
                  onPress={()=>{

                  }}

                  >
                  <Image
                    source={require('../images/leftjiantou.png')}
                    style={styles.couresDetailArrowImage}
                   />
                </TouchableOpacity>

          </View>
          {
            /*
             介绍和目录
            */

          }
          <View style={styles.couresDetailContentView}>
              <View style={styles.couresDetailContentNav} >
                  <Text
                     onPress={()=>{
                         this.setState({
                            defaultPath:'describe'
                         })
                     }}

                    style={[styles.couresDetailContentNavPublicText,this.state.defaultPath == 'describe'?styles.couresDetailContentNavTextActive:null]}>{'课程介绍'}</Text>
                  <Text
                    onPress={()=>{
                        this.setState({
                           defaultPath:'nav'
                        })
                    }}
                    style={[styles.couresDetailContentNavPublicText,this.state.defaultPath == 'nav'?styles.couresDetailContentNavTextActive:null]}>{'课程目录'}</Text>
              </View>

              {
                /*
                  介绍
                */
                this.state.defaultPath =='describe'?(
                    <View>
                      <View style={styles.couresDetailInfo}>
                          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                              <Text style={styles.couresDetailInfoTitle}>{this.state.courseData.name}</Text>
                              <TouchableOpacity
                                  style={{paddingTop:5}}
                                  activeOpacity={0.9}
                                  onPress={this._coll.bind(this)}
                                 >
                                  <Text>{this.state.collTitle}</Text>
                              </TouchableOpacity>
                          </View>

                          <View style={styles.couresDetailInfoView}>

                             <Text style={styles.couresDetailInfoText}>&bull; {Fn.changTime(this.state.courseData.duration)}</Text>
                             <Text style={styles.couresDetailInfoText}>&bull; {this.state.courseData.study_number+'次学习'}</Text>
                          </View>
                          <Text style={styles.couresDetailInfoPrice}>{'¥'+this.state.courseData.price}</Text>
                      </View>
                      <View style={styles.couresDetailInfo}>
                          <Text style={styles.couresDetailDescribe}>{this.state.courseData.introduce}</Text>
                      </View>
                      <View  style={styles.couresDetailInfo}>
                          <View style={{
                              flexDirection:'row',
                              justifyContent:'space-between'
                          }}>
                              <Text style={styles.courseComment}>{'课程评价'}</Text>
                              {
                                this.state.isComment ?(
                                  <TouchableOpacity
                                     onPress={this.addComment.bind(this)}
                                    >
                                      <Text style={styles.courseComment}>{'我来评价'}</Text>
                                  </TouchableOpacity>
                                ):null
                              }

                          </View>

                          <View>
                            {this.createComment()}

                          </View>
                      </View>
                    </View>
                ):
                 /*
                 目录
                 */
                (

                   <View>
                       {this.createCourseList()}

                   </View>
                )
              }


          </View>
          </ScrollView>
          {
            /*
             购买
            */
          }
         <TouchableOpacity style={styles.courseDetailBuyView}
             onPress={
                ()=>{
                   alert('支付')
                }
             }

           >
          <View >

              <Text style={styles.courseDetailBuyText}>{'购买课程'}</Text>
          </View>
          </TouchableOpacity>
       </View>

    );
  }
}
