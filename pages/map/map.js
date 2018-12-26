Page({
  phone() {
    console.log(66666666)
    wx.makePhoneCall({
      phoneNumber: '123456', //仅为示例，并非真实的电话号码
      success: function () {
        console.log('成功拨打电话')
      }
    })
  },
  data: {
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      title:'123456',
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  bindpoitap(e){
    console.log(e)
  }
})