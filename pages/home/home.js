// pages/home/home.js

const api = require('../../api/api.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    barInfo: null,
    banner: null,
    articleList: {
      datas: [],
      curPage: 0,
      pageCount: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      barInfo: app.globalData.barInfo
    });
    this.requestBanner();
    this.requestArticleList();
  },

  requestBanner: function() {
    api.banner().then(res => {
      this.setData({
        banner: res.data
      });
    }).catch(e => {
      console.log(e);
    });
  },
  requestArticleList: function() {
    let curPage = this.data.articleList.curPage;
    api.articleList(curPage).then(res => {
      this.data.articleList.datas.push(...res.data.datas);
      this.data.articleList.curPage = res.data.curPage;
      this.data.articleList.pageCount = res.data.pageCount;

      this.setData({
        articleList: this.data.articleList
      });
      wx.stopPullDownRefresh();
    });
  },

  bindSearch: function(res) {
    console.log(";dsf'ds'sfd';");
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.data.articleList = {
      datas: [],
      curPage: 0,
      pageCount: 0
    };
    this.requestBanner();
    this.requestArticleList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if(this.data.articleList.curPage < this.data.articleList.pageCount){
      this.requestArticleList();
    }
  },

})