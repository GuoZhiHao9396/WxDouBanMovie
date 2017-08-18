//导入js调用路径
var network = require("../../utils/httpUtils.js")

var URL1 = 'https://api.douban.com/v2/movie/in_theaters';
var URL2 = 'https://api.douban.com/v2/movie/coming_soon';

var params = {};
Page({
  data: {
    showLoading: true,
    showBottomLoading: true,
    city: '南昌',
    subjects: [],
    navigationSelect: true
  },
  onLoad: function (options) {
    params.start = 0;
    params.count = 20;
    params.city = '南昌';
    this.requestHttp(URL1,params);
  },
  navigationChanges01: function () {
    params.start = 0;
    params.count = 20;
    this.setData({
      showLoading: true,
      navigationSelect: true
    })
    this.requestHttp(URL1,params);
    
  },
  navigationChanges02: function () {
    params.start = 0;
    params.count = 20;
    this.setData({
      showLoading: true,
      navigationSelect: false
    })
    this.requestHttp(URL2, params);
  },
  /**
   * 下拉刷新事件
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新")
    params.start = 0;
    this.requestHttp(params);
  },
  /**
   * 底部加载事件
   */
  onReachBottom: function () {
    console.log("底部加载")
    this.setData({
      showBottomLoading: true
    })
    params.start = (params.start + 1) * params.count;
    this.requestHttp(params);
  },
  /**
   * 请求网络数据
   */
  requestHttp: function (url,params) {
    var page = this;
    network.request(url, params, function (res) {
      //res就是我们请求接口返回的数据
      if (params.start > 0) {
        page.setData({
          showLoading: false,
          showBottomLoading: false,
          subjects: page.data.subjects.concat(res.subjects)
        })
      } else {
        page.setData({
          showLoading: false,
          showBottomLoading: false,
          subjects: res.subjects
        })
      }
    }, function () {
      page.setData({
        showLoading: false,
        showBottomLoading: false
      })
      // 停止下拉刷新
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '加载数据失败',
      })
    })
  }
})