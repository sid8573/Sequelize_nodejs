const sequelize = require('sequelize')


const db = new sequelize('mytestdb','myuser1','mypass1',{
  host: 'localhost',
  dialect : 'mysql'
})

db.authenticate()
   .then(()=>{console.log("Connect successfully")})
   .catch((err)=>{console.error(err)}) 