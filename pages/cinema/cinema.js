// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'南昌',
    cinemas: [
      {
        name: "万达影城（达观店）", minmoney: "28.5", address: "青山湖区北京东路1819号达观国际广场4层（京东天虹楼上）", distance: "2.4km",
        state: [{ statename: "座", statenumber: true }, { statename: "退", statenumber: true }, { statename: "小吃", statenumber: false }, { statename: "折扣卡", statenumber: false}], vip: "开卡特惠，首单最高立减30元！"
      },
      {
        name: "潇湘国际影城（天虹酷加点）", minmoney: "25.9", address: "南昌县紫阳大道奥体天虹988号", distance: "2.9km",
        state: [{ statename: "座", statenumber: true }, { statename: "小吃", statenumber: false }], vip: ""
      },
      {
        name: "中影天幕国际影城（高新艺术中心店）", minmoney: "23", address: "青山湖区高新大道1978号（江西艺术中心内）", distance: "3.2km",
        state: [{ statename: "座", statenumber: true }, { statename: "退", statenumber: true }, { statename: "改签", statenumber: true }, { statename: "小吃", statenumber: false }, { statename: "折扣卡", statenumber: false }], vip: "开卡特惠，首单最高立减30元！"
      },
      {
        name: "恒大影城（南昌名都店）", minmoney: "27", address: "青山湖区高新区艾溪湖北路88号恒大名都商业中心三、四层", distance: "3.8km",
        state: [{ statename: "座", statenumber: true }, { statename: "改签", statenumber: true }, { statename: "小吃", statenumber: false }, { statename: "折扣卡", statenumber: false }], vip: "开卡特惠，首单最高立减30元！"
      },
      {
        name: "大地影院（五湖国际酒店）", minmoney: "23.9", address: "青山湖区青山湖大道199号五湖国际广场4楼", distance: "4.3km",
        state: [{ statename: "座", statenumber: true }, { statename: "退", statenumber: true }, { statename: "改签", statenumber: true }, { statename: "小吃", statenumber: false }, { statename: "折扣卡", statenumber: false }], vip: ""
      },
      {
        name: "星轶IMAX国际影城（吾悦广场旗舰店）", minmoney: "18.9", address: "青山湖区高兴开发区京东大道与东元路交汇处（新城吾悦广场4楼）", distance: "4.3km",
        state: [{ statename: "座", statenumber: true }, { statename: "IMAX厅", statenumber: true }, { statename: "改签", statenumber: true }, { statename: "小吃", statenumber: false }, { statename: "折扣卡", statenumber: false}], vip: "开卡特惠，首单最高立减30元！"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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