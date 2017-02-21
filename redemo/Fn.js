'use strict'
import Toast from 'react-native-root-toast';
let publicUrl ='http://127.0.0.1/index.php/Home/';
let topUrl ='http://127.0.0.1';
let  Fn ={
  // 生产验证码
    createCode:function(length){
          if(length ==undefined){
               length ==4;
          }
          var pow=Math.pow(10,length);
          var code=Math.floor(Math.random()*pow + pow/10).toString();
          return code.substr(0,length);
    },
    showToast:function(content,time){
       let toast = Toast.show(content, {
             duration: Toast.durations.LONG,
             position: Toast.positions.BOTTOM,
             shadow: true,
             animation: true,

         });
         if(!time){
            time=3000;
         }
         setTimeout(function () {
             Toast.hide(toast);
         },time);
     },
    //  发送验证码的url
    sendCodeUrl:function(phone,code){
      var time =Fn.createCode(6)
       return 'http://www.dongyixueyuan.com/send_code_do'+'?phone='+phone+'&code='+code+'&time='+time;
    },
    getTopUrl:function(){
       return topUrl;
    },
    // 获的公共的url
    getPublicUrl:function(){
       return publicUrl;
    },
    // 发送
    fetchUrl:function(url,callback,method,parameter){
      if (!method) {
          method = 'GET';
      }else {
           method =method.toUpperCase();
      }
      if (!parameter) {
          parameter= {};
      }
      if (method == "POST") {
         var json ={
             method:method,
             headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
             },
             body:JSON.stringify(parameter)
         };

      }

      fetch(url,json)
        .then((response)=>response.json())
        .then((data)=>{

             callback && callback(data);
        })
        .catch((err)=>{
          console.log(err);
        });
    },
    // 转换时间 把xxx分钟换成xx时xx分
    changTime:function(time){
        var h =parseInt(time/60);
        var m= time %60 ;
        return  h+'时'+m+'分';
    }



};

export {Fn as default};
