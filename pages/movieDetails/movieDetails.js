//导入js调用路径
var network = require("../../utils/httpUtils.js")
var URL ='https://api.douban.com/v2/movie/subject/';

Page({

  data: {
    showLoading: true,
    hideText: true,
    hideClass: 'up',
    movieDetail:{},
    imageArrow:'../../images/ic_arrow_bottom2.png'
  },
  onLoad: function (options) {
   this.requestHttp(options);
  },
  /**
   * 折叠展开缩小看简介
   */
  toggleText:function(){
      var hideText = this.data.hideText;
      var imageArrow=hideText==false?'../../images/ic_arrow_bottom2.png':'../../images/ic_arrow_top2.png';
      var hideClass = this.data.hideClass == 'up' ? 'down' : 'up';
    this.setData({
      hideText: !hideText,
       imageArrow:imageArrow,
      hideClass: hideClass
    })
  },
  /**
   * 请求网络数据
   */
  requestHttp: function (params) {
    var page = this;
    network.request(URL + params.id, '', function (res) {
      //res就是我们请求接口返回的数据
      page.setData({
        showLoading:false,
        movieDetail:res
      })
    }, function () {
      wx.showToast({
        title: '加载数据失败',
      })
    })
  }
})