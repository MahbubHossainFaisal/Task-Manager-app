// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//These two method calls can also be done using object destructuring below

const {MongoClient,ObjectID}= require('mongodb')

const id = new ObjectID()


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {

    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    //to find anything with object property 
   //  db.collection('users').findOne( { name: 'Faisal'}, (error,result) => {
   //      if(error){
   //         return console.log('Unable to fetch!')
   //      }
   //      console.log(result);
   //  })

    //Update method ,This time with promises,not with callback function

   //  db.collection('users').updateOne( {_id: new ObjectID("602eb2e1d23aa234080492a7")} , {
   //     $inc :{
   //       age: -1
   //     },
   //     $set : {
   //       name:'Shakil'
   //     }
   //  }).then((result) =>{
   //     console.log(result);
   //  }).catch((error) =>{
   //     console.log(error)
   //  })

    db.collection('tasks').updateMany({
       completed: false //find all the properties of completed which are false
    },{
      $set: {
          completed: true //update them with true
      }
    }).then((result) =>{
       console.log(result.modifiedCount)
    }).catch((error) =>{
       console.log(error)
    })
})