// pages/user/user.js

const api = require('../../api/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "/images/user_head.png",
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  bindLogin: function() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  bindUnlogin: function() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '还没登录',
        icon: 'none'
      })
      return;
    }

    api.unlogin().then(res => {
      wx.removeStorageSync("userInfo");
      wx.removeStorageSync("cookie");

      this.setData({
        userInfo: wx.getStorageSync("userInfo"),
        head: "/images/user_head.png"
      });
    });

  },

  bindHead: function() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '还没登录',
        icon: 'none'
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["查看我的头像", "从相册选择上传"],
      success: res => {
        console.log("showActionSheet:", res);
        let index = res.tapIndex;
        if (index == 0) {
          wx.previewImage({
            urls: [this.data.head[0]]
          })
        } else if (index == 1) {
          wx.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            sourceType: ["album,camera"],
            success: res => {
              this.setData({
                head: res.tempFilePaths
              });
            },
          })
        }

      }
    })
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
    this.setData({
      userInfo: wx.getStorageSync("userInfo")
    });
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