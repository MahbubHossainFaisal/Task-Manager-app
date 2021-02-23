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
    
    //delete multiple
    db.collection('tasks').deleteMany({
       completed: false // find where completed property value is false and delete it
    }).then((result) => {
       console.log(result.deletedCount)
    }).catch((error) =>{
       console.log(error)
    })

    //delete one
    db.collection('tasks').deleteOne({
       description: "Problem solving" //find where descript value is problem solving and delete it
    }).then((result) => {
       console.log(result.deletedCount)
    }).catch((error) =>{
       console.log(error)
    })
})