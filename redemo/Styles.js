import {StyleSheet} from 'react-native' ;
var Dimensions=require("Dimensions");
var {width,height} =Dimensions.get('window');
let styles = {
     boby :{
       flex:1,
       backgroundColor:"#eee"
     },
     publicWidth:{
        width:width*0.9,
        marginLeft:width * 0.05
     },
     img:{
        height:80 ,
        width:80,
     },
     imgView :{
        alignItems:'center',
        marginTop:80 ,
        marginBottom:30,
     },
    inputView :{
         paddingTop:5,
         paddingBottom:5,
         width:width *0.9,
         marginLeft:width *0.05,
         height:60,
         borderBottomWidth:1,
         borderColor:'#eee',
         flexDirection:'row',
         alignItems:'center'
     },
     inputImg :{
        width:40 ,
        height:40,

     },
     input :{
        flex:1,
        fontSize:15 ,
        marginLeft:15,

     },
     btnView :{
          width:width *0.8,
          height:36,
          backgroundColor:'#0070cd',
          borderRadius:3,
          justifyContent:'center',
          alignItems:'center',
          marginTop :20 ,


     },
     btnText:{
        color :'#fff',
        fontSize:15,
     },
     forgetView :{
         marginLeft:width *0.1,
         marginRight:width*0.1,
         marginTop:20,
         flexDirection:'row',
         justifyContent:'space-between'

     },
     loginIconImage:{
        width:50,
        height:50

     },
     oView:{
        flexDirection:'row',
        position:'absolute',
        bottom:20,
        alignItems:'center',
       marginLeft:width *0.05
     },
     oText :{
           marginRight:10
     },
    //  注册
     registre_img:{
         width:100,
         height:100,
         borderRadius:50,
         borderWidth :2 ,
         borderColor:'#fff',
         position:'absolute',
         bottom:width *0.05,
         left:width *0.1
     },
     registreTopView :{
         height:230,
         width:width,
         backgroundColor:'#0070cd'
     },
     centerView:{
        width:width *0.8,

        marginLeft:width *0.1,
        paddingTop:40,

     },
     registreText :{
        color:'#0070cd',
        fontSize:18,

     },
     regisetInputView:{
       paddingTop:5,

       borderBottomWidth:1,
       borderColor:'#0070cd',

     },
     reagistreInput:{
        height:38,
        lineHeight:38
     },
     registreCode:{
         position:'absolute',
         right:0,
         top:20,
         color:'red'
     },
    //  home
    homeTopRightImage:{
           height:38,
           width:38,
    },
     homeBgView:{
        width:width,
        height:260
     },
     home_bg:{
         width:width,
         height:260
     },
     home_head_img:{
        width:110  ,
        height:110 ,
        borderRadius:55,
        borderWidth:2,
        borderColor:'#eee'
     },
     homeinfoView:{
          alignItems:'center',

     },
     homeInfoName:{
        fontSize:22 ,
        fontWeight:'700',
        color:'#0070cd',
        marginTop:18,
        marginBottom:6
     },
     homeinfoViewPos :{
          marginTop:-55,
          alignItems:'center',

     },
     homeNavTopView:{
        flexDirection:'row',
        marginTop:40
     },
     homeNavView :{
        flex:1 ,
        alignItems:'center'
     },
     homeNavNumber:{
        color:'#0070cd',
        fontSize:20
     },
     homeNavSpan:{
        color:'#999',
        marginTop:2
     },
     listView:{
       marginTop:40,
       marginBottom:50
     },
     listViewCellIcon :{
        height:34,
        width:34
     },
     arrow :{
       height:26,
       width:26,
       position:'absolute',
       top:14,
       right:width *0.05
     },
     listViewCell :{
       backgroundColor:'#fff',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#eee',
        paddingTop:12,
        paddingBottom:12,
        alignItems:'center',
        paddingLeft:width *0.05 ,
        paddingRight:width *0.05
     },
     listViewCellText :{
        paddingLeft:10 ,
        fontSize:16
     },
     modUserListViewCell:{
       backgroundColor:'#fff',
       paddingLeft:width *0.05,
       paddingRight:width *0.05 ,
       marginBottom:1.5,
       flexDirection:'row',
       paddingTop:15,
       paddingBottom:15,
       justifyContent:'space-between',
       alignItems:'center'
     },
     modUserInfoHeadImg :{
        height:60 ,
        width:60,
        borderRadius:3,

     },
     ModUserInfoText:{
          fontSize :16,
          color:'#555'
     },
     modUserInfoRightView :{
         flexDirection:'row',
         alignItems:'center'

     },
     modUserInfoArrow:{
         width:24,
         height:24
     },
     modPassView:{
       width:width *0.8,
       height:36,
       marginLeft:width *0.1,
       backgroundColor:'#0070cd',
       borderRadius:3,
       justifyContent:'center',
       alignItems:'center',
       marginTop :20 ,
     },
     modPassInput:{

        width:width *0.5,
        height:40,
        fontSize:15,
        textAlign:'right'
     },
     modPassWordCell:{

       height:54
     },
     modUserNameView:{
         backgroundColor:'#fff',
         marginTop:20 ,
         height:50,
         justifyContent:'center',

     },
     modUserNameInput:{
        fontSize:14,

        width:width*0.8,
        marginLeft:width *0.1,
        height:50
     },
     fansViewCell:{
        paddingTop:12 ,
        paddingBottom:12,
        backgroundColor:'#fff',
        marginBottom:1.5,
        flexDirection:'row',
        paddingLeft:width*0.05,
        paddingRight:width*0.05,
        alignItems:'center',
        justifyContent:'space-between'
     },
     fansHeadImage:{
        height:50,
        width:50,
        borderRadius:25
     },
     fansViewText:{
         fontSize:15,
         color:'#333',

     },
     fansViewRightView:{
         marginLeft:10
     },
     fansViewTextContent:{
         color:'#888',
         marginTop:3,
         fontSize:13,

         width:width*0.5
     },
     fansLeftView:{
         flexDirection:'row',
         alignItems:'center'
     },
     fansRightView:{
       justifyContent:'center'
     },
     fansbtnView:{
        backgroundColor:'#0070cd',
        height:30,
        width:80,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
     },
     fansBtnText:{
        fontSize:13,
        color:'#fff'
     },
     mdView:{
        paddingLeft:width*0.05,
        paddingRight:width*0.05,

     },
     mdHeadImg:{
         height:50,
         width:50,
         borderRadius:25
     },
     mdTime:{
       alignItems:'center',
       paddingTop:8,
       paddingBottom:8
     },
     mdTimeText:{
       color:'#666',
     },
     mdContent:{
       flexDirection:'row',

     },
     mdContentView:{
        marginLeft:10,
        backgroundColor:'#fff',
        padding:5,
        borderRadius:3,

     },
     mdContentViewText:{
        maxWidth:width*0.8-60,

     },
     mdLeftArrow:{
          height:10,
          width:10,
          backgroundColor:'red',
          position:'absolute',
          top:0,
          left:0,


     },
     mdViewReverse:{
         flexDirection:'row-reverse',
     },
    mdRightContet:{
       marginRight:10
    },
    quesionView:{
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#fff',
      marginBottom:1.5,
      paddingLeft:20,
      paddingRight:20
    },
    questionText:{
       fontSize:20,
       color:'#0070cd'

    },
    questionInfo:{
       flexDirection:'row',
       marginTop:3,
       justifyContent:'space-between'
    },
    courseViewCell:{
       backgroundColor:'#fff',
       paddingTop:10,
       paddingBottom:15,

    },
    courseImage:{
        height:87,
        width:150
    },
    courseView:{
       flexDirection:'row'
    },
    courseRightview:{
       marginLeft:10
    },
    courseTitleView:{
      marginBottom:2
    },
    courTitle:{
       color:'#0070cd',
       fontSize:15,
       paddingTop:3,
       paddingBottom:3
    },
    courseInfoView:{
       flexDirection:'row'
    },
    time:{
       color:"#888",
       marginRight:12
    },
    number:{
      color:'#888',

    },
    priceView:{

    },
    priceText:{
      fontSize:13,
      color:'#f25f54',
      paddingTop:3

    },
    indexImage:{
      width:width,
      height:220
    },
    opacityViewPath:{
       height:30,
       backgroundColor:'rgba(0,0,0,0.3)',
       width:width,
       position:'absolute',
       bottom:0,
       left:0,
       zIndex:999,
       justifyContent:'center',

    },
    opacityViewPathTitle:{

      paddingLeft:width*0.05,
      color:'#fff',
      fontSize:12
    },
    newCourseText:{
       marginTop:10,
       marginBottom:5

    },
    couresDetailVideoImage:{
       width:width,
       height:220
    },
    couresDetailContentNav:{
      paddingTop:13,
      paddingBottom:13,
      borderBottomWidth:1,
      borderColor:'#eee',
      backgroundColor:'#fff',
      flexDirection:'row',
    },
    couresDetailContentNavPublicText:{
        flex:1,
        textAlign:'center',
        fontSize:14
    },
    couresDetailContentNavTextActive:{
        color:'#0070cd',
    },
    couresDetailInfo:{
        backgroundColor:'#fff',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:width*0.05,
        paddingRight:width*0.05,
        marginBottom:1
    },
    couresDetailInfoTitle:{
       fontSize:16,
       color:'#0070cd',
       marginBottom:10,
       marginTop:3
    },
    couresDetailInfoView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:6
    },
    couresDetailInfoText:{
       fontSize:13,
       color:'#999',
       marginRight:15,

    },
    couresDetailInfoPrice:{
        color:'#f25f54',
        fontSize:15
    },
    couresDetailDescribe:{
        lineHeight:25
    },
    courseComment:{
       color:'#888',
       marginBottom:10

    },
    courseCommentCell:{
         paddingTop:10,
         paddingBottom:10,
         borderTopWidth:1,
         borderColor:'#eee',
         flexDirection:'row'

    },
    courseCommentImage:{
       height:60,
       width:60,
       borderRadius:30
    },
    courseCommentRight:{
       marginLeft:12,
       flex:1
    },
    courseCommentUserAndTime:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:7,
      paddingBottom:4
    },
    courseCommentTime:{
      color:'#888'
    },
    couresDetailCatalogView:{
       paddingTop:5,
       paddingBottom:5,
       paddingLeft:width*0.05,
       paddingRight:width*0.05,
       marginBottom:1,
       backgroundColor:'#fff',
       flexDirection:'row',
       justifyContent:'space-between'
    },
    couresDetailCatalogTime:{
       color:'#888',
       fontSize:13
    },
    courseDetailBuyText:{
        color:'#fff',
        fontSize:16

    },
    couresDetailArrowView:{
         height:30,
         width:30,
         position:'absolute',
         top:15,
         left:15,
         backgroundColor:'rgba(0,0,0,0.5)',
         borderRadius:15,
         justifyContent:'center',
         alignItems:'center'
    },
    couresDetailArrowImage:{
       height:24,
       width:24
    },
    courseDetailBuyView:{
      width:width,
      height:40,
      position:'absolute',
      left:0,
      bottom:0,
     zIndex:9999,

      backgroundColor:'#13ab78',
      justifyContent:'center',
      alignItems:'center'

    },
    questionDetailView:{
        backgroundColor:'#fff',
        padding:width*0.05,

    },
    questionDetailViewTitle:{
       color:'#0070cd',
       fontSize:18,
       marginBottom:10
    },
    questionDetailViewInfo:{
       flexDirection:'row',
       marginBottom:10,

    },
    questionDetailPublicText:{
       fontSize:13,
       marginRight:15,
       color:'#888'
    },
    questionDetailContent:{
        lineHeight:22
    },
    questionDetailReply:{
       marginBottom:40
    },
    questionDetailReplyView:{
       position:'absolute',
       bottom:0,
       left:0,
       width:width,
       backgroundColor:'#0070cd',
       height:40,
       justifyContent:'center',
       alignItems:'center'
    },
    questionDetailReplyText:{
      fontSize:15,
      color:'#fff',
      width:width,
      textAlign:'center'
    },
    QuestionTextateaText:{
      height:100,
      backgroundColor:'#fff',
      paddingLeft:width*0.05,
      paddingRight:width*0.05
    },
    QuestionTextateaBtn:{
       marginLeft:width*0.1,
       marginRight:width*0.1
    },
    publicMainIconImage:{
       height:30,
       width:30
    },
    // 我的账户
     accountView:{
        alignItems:'center',
        paddingTop:30
     },
     accountViewImage:{
        width:180,
        height:180,
        marginBottom:10
     },
     accountViewMoney:{
        fontSize:22,
        fontWeight:'700',
        color:'#f40'
     },
     btnTopView:{
         marginLeft:width*0.1,
         marginRight:width*0.1
     },
     publicLoadingView:{
         height:100,
         width:100,
         backgroundColor:'rgba(0,0,0,0.5)',
         position:'absolute',
         top:(height-100)/2,
         left:(width-100)/2,
         zIndex:9999999,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:3
     },
     publicLoadingText:{
        color:'#ddd'

     }



















}
export {styles as default} ;
