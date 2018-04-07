//app.js
var dataAPI = require("./utils/data.js");
App({
  onLaunch: function () {
    
    var openid = wx.getStorageSync('openid');
    console.log(openid);
    var that = this;
    if(!openid){
      wx.login({
        success: function (res) {
          console.log(res.code);
          if (res.code) {
            //发起网络请求         
            wx.request({
              url: dataAPI.API_URL+"getOpenId",
              method: 'POST',
              data: {
                code: res.code,
              },
              header: {
                
                //"Authorization": "Bearer a50e3e5e-078c-4aa9-8ec8-e6c50b07074f"
              },
              success: function (result) {
                console.log(result);
                that.globalData.openid = result.data.data.open_token;
                wx.setStorageSync('openid', result.data.data.open_token)
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
    
    
  },
  
  globalData: {
    userInfo: null,
    openid:'',
    id:0,
    productName:''
  },
  
 
  
})