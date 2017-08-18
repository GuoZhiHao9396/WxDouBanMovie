// pages/my/my.js
Page({

  data: {
  
  },
  onLoad: function (options) {
  
  },
  tapPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '1010-5335'
    })
  }

 
})