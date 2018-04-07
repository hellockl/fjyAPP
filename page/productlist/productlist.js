// page/productlist/productlist.js
var dataAPI = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = { page: 0, size: 10 };
    dataAPI.getProductList(params).then((res) => {
      let data = res.data.rows;
      for (var i = 0; i < data.length; i++) {
        let star_arr = [];
        for (var j = 0; j < data[i].level; j++) {
          star_arr.push("01");
        }
        if (data[i].level % 1 !== 0) {
          star_arr.push("02");
        }
        for (var n = data[i].level; n < 5; n++) {
          star_arr.push("03");
        }
        data[i].star = star_arr;
      }
      this.setData({
        product_list: data
      });
    });
  },
  navToProductDetail: function (e) {
    wx.navigateTo({
      url: '../productdetail/productdetail?id=' + e.currentTarget.id,
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