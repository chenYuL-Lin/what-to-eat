// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()// 云函数入口函数//查询"附近拼单"
exports.main = async (event, context) => {  
  try {    
    //order    
    const _ = db.command  
    return await db.collection('menu').where({  
      add: _.eq(event.add),
      price: _.eq(event.price),
      sort: _.eq(event.sort)
     
    })
    .get({      
        success: function (res) {
          //console.log(res) 
          //console.log(data(0).others)
          //app.globalData.queryResult=res.result.data      
          return res      
          }    
        });  
      } catch (e) {    
        console.error(e);  
        }
}
      