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
    db.collection('users').findOne( { name: 'Faisal'}, (error,result) => {
        if(error){
           return console.log('Unable to fetch!')
        }
        console.log(result);
    })

    //to find anything with object id 
    db.collection('users').findOne( { _id: new ObjectID("602eb69d84599d2738a310de")}, (error,result) => {
        if(error){
           return console.log('Unable to fetch!')
        }
        console.log(result);
    })

    //to find multiple documents
     db.collection('users').find( { name: 'Faisal'}).toArray((error,result) => {
          if(error){
           return console.log('Unable to fetch!')
        }
        console.log(result);
     })
     //to find the number of multiple documents 
     db.collection('users').find( { name: 'Faisal'}).count((error,result) => {
          if(error){
           return console.log('Unable to fetch!')
        }
        console.log(result);
     })

     //another example of finding multiple documents
     db.collection('tasks').find({ completed: false}).toArray((error,result) =>{

        if(error){
           return console.log('Unable to fetch!')
        }
        console.log(result);
     })
})