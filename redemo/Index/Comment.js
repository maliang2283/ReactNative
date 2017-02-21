
import React, { Component } from 'react';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from '../Styles';
import NavigationBar from '../Public/NavigationBar';
import Fn from '../Fn';
export default  class Comment extends Component {
  constructor(props){
      super(props);
      this.state = {
        content:''
      };
  }
  async submitData(){
    var value= this.state.content;
     var _this =this;
      var phone =await AsyncStorage.getItem('loginPhone');
    if (value == "") {
        Fn.showToast('内容不能为空');
        return;
    }
    var url =Fn.getPublicUrl()+'Index/add_comment?course_id='+this.props.id+'&content='+value+'&phone='+phone;

    Fn.fetchUrl(url,function(data){
       if(data){
         Fn.showToast('感谢您的评价');
           _this.props.updataComment();
           _this.props.navigator.pop();
       }else {
          Fn.showToast('评价失败');
       }

    });

  }
  render() {
    return (
       <View style={styles.boby}>
         <NavigationBar
           title={'课程评价'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
           rightText={'提交'}
           rightEvent={this.submitData.bind(this)}
         />
             <View >
                  <AutoGrowingTextInput style={{
                       backgroundColor:'#fff',
                       padding:20

                  }} placeholder={'请填写你的评论'}
                  defaultValue={this.state.about}
                  onChange={(data)=>{
                       this.setState({
                            content:data.nativeEvent.text
                       })
                  }}
                />
             </View>

       </View>

    );
  }
}
