Page({
  data: {
    
  },

  create:function(){var menu = {
    dish1: '',
    dish2: '',
    dish3: '',
    dish4: '',
    dish5: ''
  }
  wx.setStorageSync('menu', menu)
  },
  detail:function(){
    wx.getStorage({
    key: 'key',
    success(res) {
      console.log(res.data)
    }
  })
  }
})