const Sequelize = require('sequelize')
const datatype = Sequelize.DataTypes

const db = new Sequelize('mytestdb','myuser1','mypass1',{
  host: 'localhost',
  dialect : 'mysql'
})

//createing model {two types of creating model one with extending Model second with definr methood}
const student = db.define('student',{
  name: {
    type:datatype.STRING(40),
      allowNull:false},
  age: datatype.INTEGER(2)

})

module.exports = {
  db,student
}

// we can force:true(drop table and create new ,previous data are no longer in database) and alter:true(update) the sync 

// db.sync({alter:true})
// .then(()=>{console.log("create table student successfully")})
// .catch(console.error)


