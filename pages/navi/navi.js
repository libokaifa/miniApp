// pages/navi/navi.js

const api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    naviData: [],
    selectIndex: 0,
    toIndex: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestNavi();
  },

  requestNavi: function() {
    api.navi().then(res => {
      this.data.naviData = res.data;

      api.friend().then(res => {
        let list = [];

        res.data.forEach(item => {
          list.push({
            link: item.link,
            title: item.name
          });
        });

        this.data.naviData.unshift({
          articles: list,
          name: '热门网站'
        });

        this.setData({
          naviData: this.data.naviData
        });

      });

    });
  },

  bindName: function(event) {
    let index = event.currentTarget.dataset.index;

    let toIndex = '';
    if (index >= 4) {
      toIndex = `to${index -4}`;
    }

    this.setData({
      selectIndex: index,
      toIndex: toIndex
    });
  },

  bindTitle: function(event) {
    let link = event.detail.dataset.link;
    wx.navigateTo({
      url: '/pages/web/web?url=' + link,
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