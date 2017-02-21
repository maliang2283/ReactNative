import React, { Component } from 'react';
import styles from '../Styles';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';
import NavigationBar from '../Public/NavigationBar';
import questionTextarea from './QuestionTextarea';
import Fn from '../Fn';
export default class QuestionDetail extends Component {
  constructor(props){
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
            data:'',
            replyList:'',
            replyNumber:'',
            ds:ds
      };
  }
  componentDidMount(){
     var id= this.props.id;
     var url =Fn.getPublicUrl()+ 'Question/get_detail?id='+id;

     var _this =this ;
     Fn.fetchUrl(url,function(data){


         _this.setState({
          data:data[0],
          replyList:_this.state.ds.cloneWithRows(data[1]),
          replyNumber:data[2]
         })

     });
  }
  render() {

    return (
       <View style={styles.boby}>
           <NavigationBar
             title={'问答详情'}
             leftImage={require('../images/leftjiantou.png')}
             leftEvent={
               this.props.onPrBack
             }
           />
           <View style={styles.questionDetailView}>
                <Text style={styles.questionDetailViewTitle}>{this.state.data.title}</Text>
                <View style={styles.questionDetailViewInfo}>
                   <Text style={[styles.questionDetailPublicText,styles.questionDetailUserName]}>&bull; {'敷衍'}</Text>
                   <Text style={[styles.questionDetailPublicText,styles.questionDetailTime]}>&bull; {'26分钟前'}</Text>
                   <Text style={[styles.questionDetailPublicText,styles.questionDetailReplyNumber]}>&bull; {this.state.replyNumber+'个回答'}</Text>
                </View>
                <Text style={styles.questionDetailContent}>{this.state.data.content}</Text>
           </View>
           <View style={styles.questionDetailReply}>
             <View  style={styles.couresDetailInfo}>
                 <Text style={styles.courseComment}>{'回复'}</Text>
                 <View>
                      {
                         this.state.replyList !=''?(
                            <ListView
                              enableEmptySections = {true} 
                             dataSource={this.state.replyList}
                             renderRow={(data)=>{
                                 return(
                                   <View style={styles.courseCommentCell}>
                                       <Image
                                          source={require('../images//head.png')}
                                          style={styles.courseCommentImage}
                                          />
                                       <View style={styles.courseCommentRight}>
                                           <View style={styles.courseCommentUserAndTime}>
                                              <Text style={styles.courseCommentName}>{'Code'}</Text>
                                              <Text style={styles.courseCommentTime}>{'2017-1-1'}</Text>
                                           </View>
                                            <Text style={styles.courseCommentContant}>{'这课程很棒'}</Text>
                                       </View>
                                   </View>
                                 )
                             }}
                            />
                         ):(
                            <View>
                                <Text>{'还没有任何回复'}</Text>
                            </View>
                         )
                      }


                 </View>
             </View>
           </View>
           {
             /*
              回复按钮
             */
           }
           <View style={styles.questionDetailReplyView}>
                 <TouchableOpacity
                   onPress={
                      ()=>{
                        this.props.navigator.push({
                          name:'回答界面',
                          component: questionTextarea,
                          passProps:{
                             id :this.props.id
                          }
                        })
                      }
                   }

                   >
                 <Text style={styles.questionDetailReplyText}>{'我要回答'}</Text>
                 </TouchableOpacity>
           </View>

       </View>

    );
  }
}
