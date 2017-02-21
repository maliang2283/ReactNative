
import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import CourseDetail from './CourseDetail';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native';
import Loading from '../Loading';
var arr =[
    {
       title:'React Native' ,
       img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2965812645,1180239355&fm=116&gp=0.jpg'
    },
    {
       title:'Vue.js ',
       img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2965812645,1180239355&fm=116&gp=0.jpg'
    },
    {
       title:'Mui',
       img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2965812645,1180239355&fm=116&gp=0.jpg'
    },

];
import styles from '../Styles';
import Fn from '../Fn';
var Dimensions=require("Dimensions");
var {width,height} =Dimensions.get('window');
export default class Index extends Component {
   constructor(props){
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state={
        title:'',
        dataSource:'',
        isLoding:false,
        ds:ds,
        imgData:''
      }
   }
   changePath(e){
     var x =e.nativeEvent.contentOffset.x ;
     var index = Math.round(x/width);
         this.setState({
            title:arr[index].name
         })

   }
   componentDidMount(){
      // 请求课程
      var url =Fn.getPublicUrl()+ 'Index/get_course';
      var _that =this;
      Fn.fetchUrl(url,function(data){
           arr =data;
           _that.setState({
              dataSource:_that.state.ds.cloneWithRows(data),
              imgData:data,
              title:arr[0].name,

           })
      });
   }
   jumpCourseDetail(id,title){

     this.props.navigator.push({
        name:'课程详情页',
        component:CourseDetail,
        passProps:{
            title:title,
            id:id
        }
     })
   }
   createImg(navigator){
        let data=[];
        var _this =this;
        for (var i = 0; i < arr.length; i++) {
          (function(index){
            data.push(
               <View key={index} style={styles.indexImageView}>
                 <TouchableOpacity
                   activeOpacity ={0.9}
                   onPress={_this.jumpCourseDetail.bind(_this,arr[index].id,arr[index].name)}
                   >
                   <Image
                      source={{uri:'http://i.dongyixueyuan.com/courses/'+arr[index].img}}
                      style={styles.indexImage}
                   />
                 </TouchableOpacity>

               </View>
            )
          })(i)
        }
        return data;
   }
  render() {
    return (
       <View >
            {
               this.state.isLoding ?(<Loading />):null
            }

             {
               /* 头部导航
               */

             }
             <NavigationBar
              title={'首页'}

             />
             {
               /*
                轮播图
                */
             }
             <View>
               <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={{height:230}}
                    onMomentumScrollEnd={this.changePath.bind(this)}
                  >
                    {this.createImg(this.props.navigator)}

               </ScrollView>
               <View style={styles.opacityViewPath}>
                    <Text style={styles.opacityViewPathTitle}>{this.state.title}</Text>
               </View>
             </View>
              <View style={styles.publicWidth}>
                  <Text style={styles.newCourseText}>{'最新课程'}</Text>
              </View>
             {
               /*
                 可以滚动课程列表
               */
               this.state.dataSource != '' ?(<ListView
                   dataSource={this.state.dataSource}
                   renderRow ={(data)=>{
                      return(
                        <TouchableOpacity
                          onPress ={
                                this.jumpCourseDetail.bind(this,data.id,data.name)
                          }
                          >
                          <View style={[styles.courseViewCell,styles.publicWidth]}>
                               <View style={styles.courseView}>
                                 <Image
                                   source={{uri:'http://i.dongyixueyuan.com/courses/'+data.img}}
                                   style={styles.courseImage}
                                 />
                                 <View style={styles.courseRightview}>
                                      <View style={styles.courseTitleView}>
                                        <Text
                                          numberOfLines={1}
                                          style={styles.courTitle}
                                           >{data.name}</Text>
                                      </View>
                                     <View style={styles.courseInfoView}>
                                          <Text style={styles.time}>{Fn.changTime(data.duration)}</Text>
                                          <Text style={styles.number}>{data.study_number+'次学习'}</Text>
                                     </View>
                                     <View style={styles.priceView}>
                                            <Text style={styles.priceText}>{'¥'+data.price}</Text>
                                     </View>

                                 </View>
                               </View>
                          </View>

                        </TouchableOpacity>)
                   }}

               />):(<Loading />)
             }




       </View>


    );
  }
}
