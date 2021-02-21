// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//These two method calls can also be done using object destructuring below

const {MongoClient,ObjectID}= require('mongodb')

const id = new ObjectID()
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString().length)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {

    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    //Insert one user
    // db.collection('users').insertOne({
    //     _id: id, //providing my own created objectID
    //     name: 'Shamim Hasan',
    //     age: 22
    // }, (error,result) => {
    //     if(error){
    //        return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })


    //Practice of many insert
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Problem solving',
    //         completed: true
    //     }, {
    //         description: 'Web development',
    //         completed: false
    //     },  {
    //         description: 'Quiz preparation',
    //         completed: true
    //     }
    // ], (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert!')
    //     }
    //     console.log(result.ops)
    // })
})