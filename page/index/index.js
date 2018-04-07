var app = getApp();
var dataAPI = require("../../utils/data.js")
Page({
  
  data: {
    isMy:false,
    product_list:[
      {
        productId:1,
        productName: "test",
        star: ["01", "01", "01", "01", "01"],
        backRate:"70%",
        moneyRate:"20%",
        loanQuota:"1",
        loanTerm:'1',
        productCharacterOne:"test",
        productCharacterTwo: "test",
        productCharacterThree: "test"
      }
    ],
    
      headPic:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLs1FRrgeeEYuZWfWFEdWE7ibAPye89EBqYGKPM7AZdaRwLvL739EdbYPlbaBB4xictCjzAtRejRtcw/0"
  },
  onLoad(e) {
    let params = {page:0,size:10};
    dataAPI.getProductList(params).then((res) => {
      let data = res.data.rows;
      for(var i=0;i<data.length;i++){
        let star_arr = [];
        for(var j=0;j<data[i].level;j++){
          star_arr.push("01");
        }
        if (data[i].level % 1 !== 0){
          star_arr.push("02");
        }
        for(var n = data[i].level;n<5;n++){
          star_arr.push("03");
        }
        data[i].star = star_arr;
      }
      this.setData({
        //product_list : data
      });
    });
    
    let msg_params = {page:0,size:6};
    dataAPI.getHeadLines(msg_params).then((res) => {
      this.setData({
        msgList: res.data
      });
    });
    
  },
  navToShuaiDan: function () {
    wx.switchTab({
      url: '../shuaidan/shuaidan',
    })
  },
  navToProductDetail: function (e) {
    wx.navigateTo({
      url: '../productdetail/productdetail?id=' + e.currentTarget.id,
    })
  },
  navToMineNews: function (e) {
    wx.navigateTo({
      url: '../mineNews/mineNews',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})