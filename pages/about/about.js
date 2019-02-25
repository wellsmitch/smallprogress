// pages/about/about.js

Page({
back(){
  wx.navigateBack({
     delta: 1

  })
},
luyin(){
  wx.startRecord({
    success: function (res) {
      console.log(res,111)
      var tempFilePath = res.tempFilePath
    },
    fail: function (res) {
      console.log(res, 2222)
      //录音失败
    }
  })
},
stopluyin(){
    //结束录音  
  wx.stopRecord()
},
  startluyin(){
    console.log(333)
    wx.startRecord({
      success: function (res) {
        console.log(res,9999)
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
          }
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  // toast(){
  //   wx.showToast({
  //     title: '成功',
  //     icon: 'success',
  //     mask:true,
  //     duration: 2000
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(Number(options.id))
    wx.setNavigationBarTitle({
      title: '关于',
    })

    wx.showToast({
      title: '成功',  //标题
      icon: 'success',  //图标，支持"success"、"loading"
      // image: '../icon/Apple33.png',  //自定义图标的本地路径，image 的优先级高于 icon
      duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
      mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
      success: function () { }, //接口调用成功的回调函数
      fail: function () { },  //接口调用失败的回调函数
      complete: function () { } //接口调用结束的回调函数
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})