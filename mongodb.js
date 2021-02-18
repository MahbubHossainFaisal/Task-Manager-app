const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {

    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    //Insert one user
    // db.collection('users').insertOne({
    //     name: 'Faisal',
    //     age: 23
    // }, (error,result) => {
    //     if(error){
    //        return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })

    //Insert many users to the collection
    // db.collection('users').insertMany([
    //     {
    //         name: 'Shanta',
    //         age: 28
    //     }, {
    //         name: 'Sakib',
    //         age: 23
    //     }
    // ], (error,result) => {
    //     if(error){
    //        return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })

    //Practice of many insert
    db.collection('tasks').insertMany([
        {
            description: 'Problem solving',
            completed: true
        }, {
            description: 'Web development',
            completed: false
        },  {
            description: 'Quiz preparation',
            completed: true
        }
    ], (error,result) => {
        if(error){
            return console.log('Unable to insert!')
        }
        console.log(result.ops)
    })
})