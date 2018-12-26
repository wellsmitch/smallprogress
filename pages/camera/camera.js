// 调摄像头


Page({
  data: {
    carWin_img_hidden: true, //展示照片的view是否隐藏
    carWin_img: '' //存放照片路径的
  },
  //页面加载设置初始值 可以不要
  onReady(res) {
    this.setData({
      carWin_img_hidden: true,
      carWin_img: ''
    });
  },
  //点击事件
  clickCarWin() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        console.log(filePath)
        //将刚才选的照片/拍的 放到下面view视图中
        that.setData({
          carWin_img: filePath, //把照片路径存到变量中，
          carWin_img_hidden: false //让展示照片的view显示
        });
        // 这个是使用微信接口保存文件到数据库
        // wx.uploadFile({
        //   url: "",
        //   filePath: filePath,
        //   name: 'file',
        //   success: function (res) {

        //   }
        // })
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    });
  }
})
