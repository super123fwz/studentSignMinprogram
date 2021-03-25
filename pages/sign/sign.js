// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sign_text: "教师未开启签到",
    time_data: 4,
  },

  downTime(time) {
    var time_data = this.data.time_data

    if (time_data > 0) {
      this.setData({
        time_data: time_data - 1
      })
      setTimeout(this.downTime, 1000)
    } else {
      this.setData({
        time_data: "签到已结束"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.downTime(this.data.time_data)
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