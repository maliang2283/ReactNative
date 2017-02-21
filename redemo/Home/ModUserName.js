
import React, { Component } from 'react';

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
export default  class ModUserName extends Component {
  constructor(props){
      super(props);
      this.state = {
         name:this.props.name

      };
  }
  render() {
    return (
       <View style={styles.boby}>
         <NavigationBar
           title={'我的用户名'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
           rightText={'保存'}
           rightEvent={()=>{
               this.props.upDataName(this.state.name);
               this.props.navigator.pop();
           }}
         />
             <View style={styles.modUserNameView}>
                 <TextInput
                     placeholder={'请填写用户名'}
                     style={styles.modUserNameInput}
                     onChangeText={(data)=>{
                         this.setState({
                             name:data
                         })
                     }}

                     defaultValue={this.state.name}
                 />
             </View>

       </View>

    );
  }
}
