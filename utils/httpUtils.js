// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function requestLoading(url, params, message, success, fail) {
  console.log("请求参数",params)
  if (message != "") {
    wx.showLoading({
      title: message,
    })
  }
  wx.request({
    url: url,
    data: params,
    header: {
      //'Content-Type': 'application/json'
      'content-type': 'json'
    },
    // method: 'post',
    success: function (res) {
      console.log(res.data)
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }

    },
    fail: function (res) {
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}

//不显示对话框的请求
function request(url, params, success, fail) {
  this.requestLoading(url, params, "", success, fail)
}

module.exports = {
  request: request,
  requestLoading: requestLoading
}