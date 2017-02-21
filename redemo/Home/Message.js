
import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ListView
} from 'react-native';
import styles from '../Styles';
import messageDetail from './MessageDetail';
import Fn from '../Fn';
export default class Message extends Component {
  componentDidMount(){
    this.getMessage(this);
  }
  constructor(props){
      super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       ds:ds,
      dataSource:''
  };
 }
  async getMessage(_this){
     var phone =await AsyncStorage.getItem('loginPhone');

     var url=Fn.getPublicUrl()+'User/get_message?phone='+phone;
     Fn.fetchUrl(url,function(data){
         _this.setState({
            dataSource:_this.state.ds.cloneWithRows(data)
         });

     })

  }
  updateMessage(){
      this.getMessage(this);
  }
  render() {

    return (
       <View style={styles.boby}>
         
         <NavigationBar
           title={'消息'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
         />
         {
            this.state.dataSource.length !='' ? (
              <ListView
                 dataSource={this.state.dataSource}
                 renderRow={(data) =>{
                      let read='';
                      if (data.is_read == 0) {
                         read = '未读';
                      }else {
                         read ='已读';
                      }
                      return(
                         <TouchableOpacity
                          onPress ={()=>{
                            this.props.navigator.push({
                              name:'消息详情',
                              component:messageDetail,
                              passProps:{
                                  data:data,
                                  updateMessage:this.updateMessage.bind(this)
                              }
                            })
                          }}
                          >
                         <View style={[styles.fansViewCell,{alignItems:'flex-start'}]}>
                            <View style={styles.fansLeftView}>
                              <Image
                               source={require('../images/head.png')}
                               style={styles.fansHeadImage}
                               />
                               <View style={styles.fansViewRightView}>
                                 <Text style={styles.fansViewText}>{'敷衍('+read+')'}</Text>
                                 <Text  numberOfLines={1} style={styles.fansViewTextContent}>{data.content}</Text>
                               </View>
                            </View>
                            <View style={[styles.fansRightView,{marginTop:13}]}>
                                  <Text style={{color:'#999'}}>{data.time}</Text>

                            </View>
                         </View>
                         </TouchableOpacity>)
                 }}
                  />
            ):null
         }




       </View>

    );
  }
}
