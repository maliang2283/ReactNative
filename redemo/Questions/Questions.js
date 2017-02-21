import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  RefreshControl
} from 'react-native';
import styles from '../Styles';
import Fn from '../Fn';
import Loading from '../Loading';
import questionsDetail from './QuestionDetail';
import addQuestion from './AddQuestion';
var dataArr=[];
var path =1;
export default class Questions extends Component {
  constructor(props){
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state ={
         dataSource:'',
         ds:ds,
         isDown:false
     }
    }
  componentDidMount(){
       this.loadData();

  }
  loadData(){
    var url =Fn.getPublicUrl()+ 'Question/get_all?path='+path;
    var _this =this ;
     Fn.fetchUrl(url,function(data){
       if(!data){
         return ;
       }
      var newdata = dataArr.concat(data);
       _this.setState({
          dataSource:_this.state.ds.cloneWithRows(newdata ),
          isDown:false
       })
        dataArr=newdata;
     });
  }
  loadNewData(){
        path++;
        this.loadData();


  }
  _onRefresh(){
      this.setState({
          isDown:true
      });
       path =1;
       dataArr=[];
       this.loadData();
  }
  updata(){
     this._onRefresh();
  }
  render() {
    return (
       <View style={[styles.boby]}>
               <NavigationBar
                 title={'问答'}
                 rightText={'发帖'}
                 rightEvent={()=>{
                   var _this =this ;
                   this.props.navigator.push({
                      name:'发帖',
                      component:addQuestion,
                      passProps:{
                          updateQuestion:this.updata.bind(this)
                      }
                   })
                 }}
                />
                {
                   this.state.dataSource !='' ?(
                     <ListView
                       refreshControl={
                         <RefreshControl
                             refreshing={this.state.isDown}
                             onRefresh={this._onRefresh.bind(this)}
                           />
                       }
                       onEndReached ={this.loadNewData.bind(this)}
                       onEndReachedThreshold ={10}
                       dataSource={this.state.dataSource}
                       renderRow ={
                         (data)=>{
                          return(
                            <TouchableOpacity
                                 activeOpacity={0.9}
                                 onPress={()=>{
                                    this.props.navigator.push({
                                       name:'问答详情',
                                       component:questionsDetail,
                                       passProps:{
                                           id:data.id
                                       }
                                    })
                                 }}
                              >
                              <View style={[styles.quesionView]}>
                                    <View style={styles.questionTitle}>
                                        <Text style={styles.questionText}>{data.title}</Text>
                                    </View>
                                     <View style={styles.questionInfo}>
                                         <Text style={styles.questionTime}>{data.time}</Text>
                                         <Text style={styles.questionUSer}>{'aries'}</Text>
                                     </View>
                              </View>
                              </TouchableOpacity>
                          )}
                        }
                       />)
                      :
                      (<Loading />)
                }







       </View>

    );
  }
}
