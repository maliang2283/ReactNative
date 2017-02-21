
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
export default  class QuestionTextatea extends Component {
  constructor(props){
      super(props);
      this.state = {
        content:'',
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

    var url =Fn.getPublicUrl()+'Question/add_reply?phone='+phone+'&content='+value+'&question_id='+this.props.id;
    console.log(url);
    Fn.fetchUrl(url,function(data){
      alert(data);
       if(data>0){
         Fn.showToast('发布成功');
           _this.props.updateQuestion();
           _this.props.navigator.pop();
       }else {
          Fn.showToast('发布失败');
       }

    });

  }
  render() {
    return (
       <View style={styles.boby}>
         <NavigationBar
           title={'回复'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
           rightText={'发布'}
           rightEvent={this.submitData.bind(this)}
         />
             <View >
                  <AutoGrowingTextInput style={{
                       backgroundColor:'#fff',
                       padding:20

                  }} placeholder={'这里写内容'}
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
