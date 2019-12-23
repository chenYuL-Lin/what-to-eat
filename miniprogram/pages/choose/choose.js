var app = getApp()
Page({

  data: {
    add:'',
    sort:'',
    price:'',
    query: '',
    ne:[],
  },

  onLoad: function (options) {
    if (app.globalData.bbl) {
      this.setData({
        add: app.globalData.getfloor,
        sort: app.globalData.getdishes,
        price: app.globalData.getprice,
        query: app.globalData.queryResult
      })

    }
  },

  onQuery: function () {
    var that=this;
    var _ne=this.data.ne;
    wx.cloud.init({ 
      traceUser: false 
    })        
    wx.cloud.callFunction({
      name: 'dishes', 
      data:{
        add: app.globalData.getfloor,
        sort: app.globalData.getdishes,
        price: app.globalData.getprice
      },
      complete: res => { 
        console.log("***dishes");

        this.setData({ 
          query: JSON.stringify(res.result.data, ['others'],'\n'),
          ne: JSON.stringify(res.result.data, ['others','num'], '\n'),
          })
        var _query = this.data.query
        _ne=this.data.ne 
        console.log('[数据库] [查询记录] 成功: ',res.result.data)
        console.log(_ne)

        } 
      });

   
  },
})