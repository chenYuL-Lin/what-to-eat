// 云函数入口文件

const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()// 云函数入口函数//查询"附近拼单"
exports.main = async (event, context) => {
  try {
    //order    
    const _ = db.command
    return await db.collection('menu').where({
      num: _.eq(event.num),

    })
      .get({
        success: function (res) {
          return res
        }
      });
  } catch (e) {
    console.error(e);
  }
}
