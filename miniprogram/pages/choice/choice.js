var app = getApp()

Page({
  data: {
    results:"请各选择一项...",
    getfloor: '',
    getprice: '',
    getdishes: '',
    result1: '',
    result2: '',
    result3: '',
    result4: '',
    result5: '',
     step: 1,

    counterId: '',

    openid: '',

    count: null,
    queryResult:''
  },

  
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value); 
    var getfloor=e.detail.value.student;
    var getprice = e.detail.value.concrete_price;
    var getdishes = e.detail.value.concrete_dishes;
    if(getfloor!=""&&getprice!=""&&getdishes!="")
    {
      app.globalData.getfloor = getfloor;
      app.globalData.getprice = getprice;
      app.globalData.getdishes = getdishes;
      app.globalData.bbl='1';

      this.setData({
        getfloor: getfloor,
        getprice: getprice,
        getdishes: getdishes
      })
      // db.command.eq('menu')
      // const _ = db.command
      // const db = wx.cloud.database()
      // // 查询当前用户所有的 counters
      // db.collection('menu').where({
      //   add: _.ed(getfloor),
      //   price: _.eq(getprice),
      //   sort: _.eq(getdishe)
      // }).get({
      //   success: function(res){console.log(res.data)},
      //   fail: console.error
        // success: res => {
        //   this.setData({
        //     queryResult: JSON.stringify(res.data.others)
            
        //   })
        //   console.log('[数据库] [查询记录] 成功: ', res)
        // },
        // fail: err => {
        //   wx.showToast({
        //     icon: 'none',
        //     title: '查询记录失败'
        //   })
        //   console.error('[数据库] [查询记录] 失败：', err)
        // }
      

       wx.navigateTo({

         url: '../choose/choose'

      })
    }
    else{
      this.setData({
        results: "请选择完整..."
      })
    }
    
  },



  formReset: function () {
    console.log('form发生了reset事件');
    this.setData({
      results: "请各选择一项..."
    })
  },


})
