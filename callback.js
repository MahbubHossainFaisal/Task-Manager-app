// callback function example

const doCallback = (callback) =>{
    setTimeout(()=>{
        //callback('This is an error',undefined) // this function will pass the error to the callback function
        callback(undefined,[3,4,5,6,7,8]) // this function will pass the array to the callback function
    },2000)
}

doCallback ( (error,result) =>{
    if(error){
      return  console.log(error)
    }
    console.log(result)
})

//How to do theese with promises?
//go to promises.js