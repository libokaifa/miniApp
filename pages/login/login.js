// pages/login/login.js

const api = require('../../api/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  bindRegister: function() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
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

  bindLogin: function() {
    api.login({
      username: this.data.username,
      password: this.data.password
    }).then(res => {
      wx.setStorageSync("userInfo", res.data);
      wx.navigateBack();
    });
  },

  bindWechatLogin: function() {

    wx.getSetting({
      success: res => {
        console.log("wx.getSetting----", res);
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log("----------获取登录信息", res);
            }
          });
        } else {
          wx.openSetting({
            success: res => {
              console.log("openSetting ---- ", res);
            }
          });
        }
      }
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