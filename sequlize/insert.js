const {db,student} = require('./model')


const task = async ()=>{
  try{
      await db.sync({alter:true})  //all furhter methods wait for this method while this is not done
       

      //insert data into database using model student 
      //random user
      await student.create({
        name: (['sadiq','osama','mayank','maneesh','sakib','prateek','suyash','ankit','deepak','katiyar'])[parseInt(Math.random() * 10)],
        age : 10 + parseInt(Math.random() * 10)
         
      })


      // we can use also .then().catch() with student.create(), but using of await is also good
  }
  catch(e)
  {
     console.error(e)
  }
}

task();