// pages/register/register.js
const api = require('../../api/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    repassword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  bindNameInput: function(event) {
    this.setData({
      username: event.detail.value
    });
  },

  bindPwdInput: function(event) {
    this.setData({
      password: event.detail.value
    });
  },

  bindRePwdInput: function(event) {
    this.setData({
      repassword: event.detail.value
    });
  },

  bindRegister: function() {
    api.register({
      username: this.data.username,
      password: this.data.password,
      repassword: this.data.repassword
    }).then(res => {
      wx.setStorageSync("userInfo", res.data);
      wx.navigateBack({
        delta: 2
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})