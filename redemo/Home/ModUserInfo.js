/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from '../Public/NavigationBar';
import ModUserName from './ModUserName';
import ModUserDescribe from './ModUserDescribe';
import ActionSheet from 'react-native-actionsheet';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
 AsyncStorage
} from 'react-native';
import styles from  '../Styles';
import ImagePicker from 'react-native-image-picker';
import  Fn from '../Fn';
const buttons = ['取消', '男', '女'];
const CANCEL_INDEX = 0;
var options = {
  title: '请选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'照相机',
  chooseFromLibraryButtonTitle:'相册',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class ModUserInfo extends Component {
  constructor(props){
      super(props);
      this.state = {
         name:this.props.name,
         about:this.props.content,
         head_img:this.props.head_imag,
         sex:this.props.sex,
         image_url:'',
         android_image_path:''
      };
  }
  uploadImage(image_url,path){
    var _this =this ;
     var url= image_url;//这个是我们图像在本机的位置
     var name =image_url;//图片的名称，必须到后缀的如jpg
     if(Platform.OS == 'android'){
         var last_index =path.lastIndexOf('.');
         var suff =path.substr(last_index,path.length);
         name =image_url +suff;

     }
     let formData = new FormData();
     let file ={uri:url,type:'multipart/form-data',name:name};
     formData.append('images',file);
    //  请求的地址
    var request_url ='http://127.0.0.1/upload_file.php';
     fetch(request_url,{
         method:'POST',
         headers:{
           'Content-Type':'multipart/form-data'
         },
         body:formData
     })
     .then((response)=>response.text())
     .then((data)=>{
       if (data) {
          var json =JSON.parse(data);
          var img_url =json.files.images.url;
          if (img_url) {
            _this.setState({
                image_url:img_url
            })


          }

       }




     })
     .catch((err)=>{
       console.log(err);
     });

  }
  render() {
    return (
       <View style={styles.boby}>
         <NavigationBar
           title={'我的信息'}
           leftImage={require('../images/leftjiantou.png')}
           leftEvent={
             this.props.onPrBack
           }
           rightText={'保存'}
           rightEvent={()=>{
              var head_img =this.state.image_url;
               var name =this.state.name ;
               var about =this.state.about;
               var sex =this.state.sex ;
              var url=Fn.getPublicUrl()+'User/updata_use_info';
              var _this =this;
               AsyncStorage.getItem('loginPhone',function(err,phone){
                 Fn.fetchUrl(url,function(data){
                       if (data == 1) {
                          Fn.showToast('已保存');
                          _this.props.updateInfo(head_img,name,about);
                          _this.props.navigator.pop();
                       } else {
                         Fn.showToast('保存失败');
                       }
                 },'POST',{
                     phone:phone,
                     name:name,
                     about:about,
                     sex:sex,
                     head_img:head_img
                 })

               })


           }}
         />
         {/*点击头像  */}
             <TouchableOpacity
               activeOpacity={1}
               onPress={()=>{
                 ImagePicker.showImagePicker(options, (response) => {
                        console.log('Response = ', response);

                        if (response.didCancel) {
                          // 当用户点击取消
                          console.log('User cancelled image picker');
                        }
                        else if (response.error) {
                          console.log('ImagePicker Error: ', response.error);
                        }
                        else if (response.customButton) {
                          console.log('User tapped custom button: ', response.customButton);
                        }
                        else {
                          let source;
                          // You can display the image using either data...
                          // source = { uri: 'data:image/jpeg;base64,' + response.data };
                          // Or a reference to the platform specific asset location
                          var image_url =response.uri;
                          if (Platform.OS === 'android') {
                            source = { uri: response.uri };
                          } else {
                            source = { uri: response.uri.replace('file://', '') };
                          }
                          this.uploadImage(image_url,response.path);

                          this.setState({
                            head_img: source,

                          });
                        }
                        });
               }}

               >
              <View style={styles.modUserListViewCell}>
                    <Text style={styles.ModUserInfoText}>{'头像'}</Text>
                    <View  style={styles.modUserInfoRightView}>
                      <Image
                          source={this.state.head_img}
                          style={styles.modUserInfoHeadImg}
                      />
                      <Image
                          source={require('../images/arrows.png')}
                          style={styles.modUserInfoArrow}
                      />
                    </View>

              </View>
              </TouchableOpacity>
              {/* 用户名 */}
              <TouchableOpacity
                activeOpacity={1}
                onPress={()=>{
                   this.props.navigator.push({
                       name:'我的用户名',
                       component:ModUserName,
                       passProps:{
                           name:this.state.name,
                           upDataName:(newName)=>{
                             this.setState({
                                 name:newName
                             })

                           }
                       }

                   })

                }}
                >
              <View style={styles.modUserListViewCell}>
                    <Text style={styles.ModUserInfoText}>{'用户名'}</Text>
                     <View style={styles.modUserInfoRightView}>
                       <Text style={styles.ModUserInfoText}>{this.state.name}</Text>
                       <Image
                           source={require('../images/arrows.png')}
                           style={styles.modUserInfoArrow}
                       />
                     </View>

              </View>
              </TouchableOpacity>
              {/* 性别 */}
              <TouchableOpacity
                activeOpacity={1}
                onPress={()=>{
                   this.ActionSheet.show();

                }}
                >
              <View style={styles.modUserListViewCell}>
                  <Text style={styles.ModUserInfoText}>{'性别'}</Text>
                  <Text style={styles.ModUserInfoText}>{this.state.sex}</Text>
              </View>
              </TouchableOpacity>
              {/*  描述*/}
              <TouchableOpacity
                activeOpacity={1}
                onPress={()=>{
                  this.props.navigator.push({
                      name:'我的描述',
                      component:ModUserDescribe,
                      passProps:{
                          about:this.state.about,
                          upDataAbout:(newAbout)=>{
                            this.setState({
                                about:newAbout
                            })

                          }
                      }

                  })

                }}

                >
              <View style={styles.modUserListViewCell}>
                    <Text style={styles.ModUserInfoText}>{'自我描述'}</Text>
                      <View style={styles.modUserInfoRightView}>
                        <Text>{this.state.about}</Text>
                        <Image
                            source={require('../images/arrows.png')}
                            style={styles.modUserInfoArrow}
                        />
                      </View>
              </View>
              </TouchableOpacity>
              <ActionSheet
                   ref={(o) => this.ActionSheet = o}
                   title="请选择"
                   options={buttons}
                   cancelButtonIndex={CANCEL_INDEX}
                   onPress={
                        (newSex)=>{
                             if (newSex == 0) {
                                 return ;
                             }
                             this.setState({
                                 sex:buttons[newSex]
                             })
                        }

                   }
               />
       </View>

    );
  }
}
