// page/productdetail/productdetail.js
var app = getApp();
var dataAPI = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '产品参数', '进件条件', '材料要求'
    ],
    index: 0,
    currentTab: 0, // 导航栏切换索引，
    id:0,
    productName:"",
    productInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    dataAPI.getProductDetail(options.id).then((res) => {
      let star_arr = [];
      for (var j = 0; j < res.data.level; j++) {
        star_arr.push("01");
      }
      if (res.data.level % 1 !== 0) {
        star_arr.push("02");
      }
      for (var n = res.data.level; n < 5; n++) {
        star_arr.push("03");
      }
      console.log(star_arr);
      res.data.star = star_arr;
      wx.setNavigationBarTitle({
        title: res.data.productName
      });
      this.setData({
        productInfo: res.data,
        id:options.id,
        productName:res.data.productName
      });
    });
    
  },
  // 导航栏操作
  onNavbarTap: function (ev) {
    this.setData({ currentTab: ev.currentTarget.dataset.index });
  },
  navToShuaiDan: function (e) {
    app.globalData.id = this.data.id;
    app.globalData.productName = this.data.productName;
    wx.switchTab({
      url: '../shuaidan/shuaidan',
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})