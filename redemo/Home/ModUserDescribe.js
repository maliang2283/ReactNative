
import React, { Component } from 'react';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../Styles';
import NavigationBar from '../Public/NavigationBar';
export default  class ModUserDescribe extends Component {
  constructor(props){
      super(props);
      this.state = {
         about:this.props.about

      };
  }
  render() {
    return (
       <View style={styles.boby}>
         <NavigationBar
           title={'我的描述'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
           rightText={'保存'}
           rightEvent={()=>{
               this.props.upDataAbout(this.state.about);
               this.props.navigator.pop();
           }}
         />
             <View >
                  <AutoGrowingTextInput style={{
                       backgroundColor:'#fff',
                       padding:20

                  }} placeholder={'请填写你的描述'}
                  defaultValue={this.state.about}
                  onChange={(data)=>{
                       this.setState({
                            about:data.nativeEvent.text
                       })
                  }}
                />
             </View>

       </View>

    );
  }
}
