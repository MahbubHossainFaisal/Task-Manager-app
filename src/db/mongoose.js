const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name : {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Faisal',
//     age: 23
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!",error)
// })

const Tasks = mongoose.model('Tasks', {
    description:{
        type: String
    },
    completed: {
        type: Boolean
    }
})

const me = new Tasks({
    description: 'Problem Solving',
    completed: false
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log("Error!",error)
})