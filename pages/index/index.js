

Page({
  data: {
    motto: 'Hello World',
    arr:[1,2,3,4,5],
    list:[],
    tem:12432,
    val:'',
    msg:'dddd',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  onReachBottom: function(){//上拉加载
    console.log(8888,wx.showLoading)
    wx.showLoading({
      title: '玩命加载中',
    })
    setTimeout(function(){
      // 隐藏加载框
      wx.hideLoading();
    },2000)
  },
  openAudio(){
    const innerAudioContext = wx.createInnerAudioContext('myAudio')
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  fu(){
    console.log('父元素')
  },
  aa(){
    console.log('zi元素')

  },
  bb(){
    console.log('zi元素1')

  },
  edit(){
    this.setData({'msg':456789})
  },

  getval(e){
    console.log(e.detail.value)
    this.setData({ val: e.detail.value})
  },
  add(){
    var list = this.data.list
    list.push(this.data.val)
    this.setData({list:list,val:''})
  },
  del(e){
    console.log(e.target.dataset.aaaa)
    var list = this.data.list
    list.splice(e.target.dataset.aaaa,1)
    this.setData({ list: list, val: '' })
  },


  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页1',
    })
  },
  gotoabout() {
    wx.navigateTo({
      url: '../about/about?id=123'
    })
  },

  getdata() {
    wx.request({
      url: 'https://blog.csdn.net/yp090416/phoenix/comment/list/74900870',
      data: {
        page: 1,
        size: 20,
        tree_type: 1
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
})
