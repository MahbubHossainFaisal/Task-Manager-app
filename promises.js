const doPromise = new Promise((resolve,reject) => {
   // resolve([3,4,5,6,7,8]) // if there is no error,resolve will be passed
   reject('Sorry something went wrong!') //when there is error,reject will be passed
   resolve([4,3,2,1]) //as reject is called , resolve won't be called.

})

doPromise.then((result) =>{
    console.log('Success!' , result)
}).catch((error) =>{
    console.log('Error!', error)
})

//Promises are more reliable and errorfree than callback functions
//They are also well defined.
//when we pass through callback function we pass value through same parameter and get it with if else condition
//But in promise there is seperate functions for error and result.