// components/lb-swiper/lb-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: Object
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
    bindBanner:function(event){
      console.log("点击bindBanner",event);
      let url = event.currentTarget.dataset.url;
      wx.navigateTo({
        url: '/pages/web/web?url='+url,
      });

    }
  }
})
