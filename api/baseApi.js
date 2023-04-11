let  request = (method, url, param)=>new Promise((resolve, reject)=>{
    wx.showLoading({
      title: '加载中...' ,
      mask:true
    });
    wx.request({
      url: 'https://www.wanandroid.com' + url,
      method:method,
      data:param,
      header:{
        'content-type': "application/x-www-form-urlencoded",
         cookie: wx.getStorageSync("cookie")
      },
      success:function(res){
        if (res.data.errorCode === 0) {
          if (url == "/user/login" || url == "/user/register") {
            wx.setStorageSync("cookie", res.header['Set-Cookie']);
          }
          console.log('接口：' + url, '参数：', param, '\n返回值：', res);
          wx.hideLoading();
          resolve(res.data);
        } else {
          wx.hideLoading();
          wx.showToast({
            title: res.data.errorMsg,
            icon: 'none',
            duration: 2000
          })
          reject(res.data)
        }
      },
      fail:function(err){
        wx.hideLoading();
      wx.showToast({
        title: '服务连接异常',
        icon: 'none',
        duration: 2000
      })
      reject(err)
      }
    } )
});
module.exports = {
  request
}