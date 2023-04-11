// components/lb-article/lb-article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindArticle: function(event){
        let url=event.currentTarget.dataset.url;
        wx.navigateTo({
          url: '/pages/web/web?url=' + url,
        })
    },
    catchCollect: function() {
      console.log("点击收藏---------");
    }
  }
})
