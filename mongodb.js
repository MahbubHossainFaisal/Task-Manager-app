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

})