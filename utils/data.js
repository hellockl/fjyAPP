const API_URL = 'http://192.168.1.124:1183/';
const SEND_MSG_URL = 'http://192.168.1.124:1340/v1/sendMessage'
const Promise = require('./bluebird')

function fetchApi(URL,params,method) {
  var token = wx.getStorageSync('token');
  console.log(token);
  return new Promise((resolve, reject) => {
    wx.request({
      url: URL,
      data: Object.assign({}, params),
      method: method,
      header: { 
        "Content-Type": "application/json",  //post
        "Authorization": "Bearer 39764c78-e9e6-4ba5-b17b-909d79eb42b0"
      },
      success: resolve,
      fail: reject
    })

  })
}
//绑定手机
function wechatBandMobile(params) {
  return fetchApi(API_URL+ "weChatBandMobile", params, "POST").then(res => res.data);
}
//微信授权登录
function wechatLoginSystem(params) {
  return fetchApi(API_URL + "weChatLoginSystem", params, "POST").then(res => res.data);
}
//获取用户信息
function getUserInfo(params) {
  return fetchApi(API_URL +"getUserInfo", params, "POST").then(res => res.data);
}
//发送短信
function sendMessage(params) {
  return fetchApi(SEND_MSG_URL, params, "POST").then(res => res.data);
}
//得到产品列表
function getProductList(params){
  return fetchApi(API_URL + "getProductListToFront",params,"GET").then(res=>res.data);
}
//得到产品详情
function getProductDetail(params){
  return fetchApi(API_URL + "getProductDetail/" + params, "", "GET").then(res => res.data);
}
//新增甩单
function createOrder(params) {
  return fetchApi(API_URL + "addCustomer", params, "POST").then(res => res.data);
}
//我的订单列表
function getMyOrderList(params) {
  return fetchApi(API_URL + "getMyList", params, "GET").then(res => res.data);
}
//新增提现
function createWithdrawals(params) {
  return fetchApi(API_URL + "addBanks", params, "POST").then(res => res.data);
}
//得到首页轮播资迅
function getHeadLines(params) {
  return fetchApi(API_URL + "getHeadLines", params, "GET").then(res => res.data);
}
//得到消息列表
function getMessageList(params) {
  return fetchApi(API_URL + "getMessageList", params, "GET").then(res => res.data);
}
//读取消息
function readMessages(params){
  return fetchApi(API_URL + "readMessages", params, "POST").then(res => res.data);
}
//添加邮件地址
function createEmailAddr(params) {
  return fetchApi(API_URL + "addMail", params, "POST").then(res => res.data);
}

module.exports = {
  API_URL: API_URL,
  wechatBandMobile: wechatBandMobile,
  wechatLoginSystem: wechatLoginSystem,
  sendMessage:sendMessage,
  getUserInfo: getUserInfo,
  getProductList : getProductList,
  getProductDetail: getProductDetail,
  createOrder : createOrder,
  getMyOrderList: getMyOrderList,
  createWithdrawals: createWithdrawals,
  getHeadLines:getHeadLines,
  getMessageList: getMessageList,
  readMessages: readMessages,
  createEmailAddr: createEmailAddr
}