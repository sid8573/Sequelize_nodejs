const {db,student} = require('./model')


const task = async ()=>{
  try{
      await db.sync({alter:true})  //all furhter methods wait for this method while this is not done
       

      //retrive data from database by query we can find this in sequelise->v6->Querying
      const students = await student.findAll({
        
        order: [
          ['age','DESC']
        ]
      })
       
      //show data in console

      students.forEach(s => console.log(` 
      name: ${s.dataValues.name} \t age: ${s.dataValues.age}`))


  
  }
  catch(e)
  {
     console.error(e)
  }
}

task();