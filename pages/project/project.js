// pages/project/project.js

const api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectList: [],
    category: [],
    swiperIndex: 0,
    scrollWidth: 0,
    categoryRect: [],
    scrollLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestCategory();
  },

  requestCategory: function() {
    api.projectCategory().then(res => {
      res.data.forEach((item, index) => {
        this.data.projectList[index] = {
          datas: [],
          curPage: 0,
          pageCount: 0
        }
      });
      this.setData({
        category: res.data,
        projectList: this.data.projectList
      });
      this.requestProjectList();
      this.getSize();
    });
  },

  getSize: function() {
    wx.createSelectorQuery().select('.category').boundingClientRect(rect => {
      console.log("getSize:", rect);
      this.data.scrollWidth = rect.width;
    }).exec();
    wx.createSelectorQuery().selectAll('.category-item').boundingClientRect(rects => {
      console.log("getSizes:", rects);
      rects.forEach(rect => {
        this.data.categoryRect.push(rect);
      })
    }).exec();
  },

  requestProjectList: function() {
    let index = this.data.swiperIndex;
    let cid = this.data.category[index].id;
    let curPage = this.data.projectList[index].curPage;
    api.projectListData(curPage + 1, {
      cid: cid
    }).then(res => {
      this.data.projectList[index].datas.push(...res.data.datas);
      this.data.projectList[index].curPage = res.data.curPage;
      this.data.projectList[index].pageCount = res.data.pageCount;
      let key = `projectList[${index}]`;
      this.setData({
        [key]: this.data.projectList[index]
      });
    });
  },

  bindSwiperChange: function(event) {
    let index = event.detail.current;

    let item = this.data.categoryRect[index];
    let distance = item.left - (this.data.scrollWidth / 2 - item.width / 2);

    this.setData({
      swiperIndex: index,
      scrollLeft: distance
    });

    if (this.data.projectList[index].datas.length > 0) {
      return;
    }
    this.requestProjectList();
  },

  bindCategory: function(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      swiperIndex: index
    });
  },

  bindLoadMore: function() {
    let index = this.data.swiperIndex;
    if (this.data.projectList[index].curPage < this.data.projectList[index].pageCount) {
      this.requestProjectList();
    }
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