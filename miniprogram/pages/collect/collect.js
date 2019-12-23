Page({
  data: {
    num:'',
    sort:'',
    name:'',
    add:'',
    price:'',
    others:''
  },
  input6: function (e) {
    var value = e.detail.value
    this.setData({
      num: value
    })
  },

  input1: function (e) {
    var value = e.detail.value
    this.setData({
      sort: value
    })
  },
  input2: function (e) {
    var value = e.detail.value
    this.setData({
      name: value
    })
  },
  input3: function (e) {
    var value = e.detail.value
    this.setData({
      add: value
    })
  },
  input4: function (e) {
    var value = e.detail.value
    this.setData({
      price: value
    })
  },
  input5: function (e) {
    var value = e.detail.value
    this.setData({
      others: value
    })
  },
  upload: function () {
    var input6 = this.data.num;
    var input1 = this.data.sort;
    var input2 = this.data.name;
    var input3 = this.data.add;
    var input4 = this.data.price;
    var input5 = this.data.others;

    var db = wx.cloud.database()
    db.collection("menu").add({
      data: {
        num: this.data.num,
        sort: this.data.sort,
        name: this.data.name,
        add:this.data.add,
        price:this.data.price,
        others:this.data.others,
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  reset:function(){
    this.setData({
      num:'',
      sort: '',
      name: '',
      add: '',
      price: '',
      others: ''
  })
  },

})