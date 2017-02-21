/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  AsyncStorage
} from 'react-native';
import Index from './Index/Index';
import Questions from './Questions/Questions';
import Home from './Home/Index';
import styles from './Styles';
import TabNavigator  from 'react-native-tab-navigator';

export default class Main extends Component {
  onPressBack(navigator){
       navigator.pop();
  }
  componentDidMount(){
    //  AsyncStorage.removeItem('loginPhone');
  }
  render() {
    return (
       <Navigator
         initialRoute={{
            name:'首页',
            component:MainIndex
         }}
         renderScene={
            (route,navigator)=>{
               var Component =route.component;
               return(
                 <Component {...route.passProps} navigator={navigator} onPrBack={this.onPressBack.bind(this,navigator)}/>
               );
            }
         }

       />
    );
  }
}
class MainIndex extends Component {
  constructor(props){
      super(props);
      this.state ={
          index:0
      }
  }

   creatTab(index,title,icon,selectIcon,Component){
       return(
         <TabNavigator.Item
             title={title}
             titleStyle={{color:'#888'}}
             selectTitleStyle={{color:'#0070cd'}}
             selected ={this.state.index == index}
             onPress={()=>{
                 this.setState({
                    index:index
                 })
             }}
           renderIcon={()=>{
             return(
                <Image
                 source={icon}
                 style={styles.publicMainIconImage}
                />
             )
             }}
             renderSelectIcon={()=>{
               return(
                  <Image
                   source={selectIcon}
                   style={styles.publicMainIconImage}
                  />
               )
               }}
           >
           {<Component navigator={this.props.navigator} />}
         </TabNavigator.Item>
       );
   }
   render(){
       return(
         <TabNavigator>
             {this.creatTab(
                 0,
                 '课程',
                 require('./images/index.png'),
                 require('./images/index_select.png'),
                 Index

             )}
             {this.creatTab(
                 1,
                 '问答',
                 require('./images/question.png'),
                 require('./images/question_select.png'),
                 Questions

             )}
             {this.creatTab(
                 2,
                 '我的',
                 require('./images/home.png'),
                 require('./images/home_select.png'),
                 Home

             )}
         </TabNavigator>
       );
   }
}
