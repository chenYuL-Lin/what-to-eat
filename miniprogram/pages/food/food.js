var app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/aaa.jpg',
      '../../image/bbb.jpg',
      '../../image/ccc.jpg'
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    add: '',
    sort: '',
    price: '',
    query2: '',
    numll:''
  },

  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },




  dalaoJoin:function(){
  var x = Math.floor(Math.random() * 250)
  var that=this
    app.globalData.getnum=x
    console.log(app.globalData.getnum)
    
    wx.cloud.init({
      traceUser: false
    })
    wx.cloud.callFunction({
      name: 'foodeeee',
      data: {
        num: app.globalData.getnum,
        query2:this.data.query2
      },
      complete: res => {
        console.log("***foodeeee");
        that.setData({
          query2: JSON.stringify(res.result.data, ['others'], '\n'),
        })
        var _query = this.data.query2
        console.log('[数据库] [查询记录] 成功: ', res)
        console.log(JSON.stringify(res.result.data, ['others'], '\n'))

      }
    });


  }

})
