// app.js
App({

  globalData: {
    barInfo: {
      height: null,
      menuHeight: null,
      menuTop: null
    }
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    this.getMenuInfo();
  },

  getMenuInfo: function() {
    let menuInfo = wx.getMenuButtonBoundingClientRect();
    console.log("胶囊按钮：", menuInfo);

    wx.getSystemInfo({
      success: res => {
        console.log(res);
        // 导航栏的高度 = 状态栏高度 + 菜单按钮高度 + 菜单按钮的上下间隔的高度
        this.globalData.barInfo.height = res.statusBarHeight + menuInfo.height + (menuInfo.top - res.statusBarHeight) * 2;
        this.globalData.barInfo.menuTop = menuInfo.top;
        this.globalData.barInfo.menuHeight = menuInfo.height;
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})
