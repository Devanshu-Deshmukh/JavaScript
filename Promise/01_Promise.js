// the promise object represents the eventual completion or failure of an asynchronus operation and its resulting value

// fetch("https://github.com/Devanshu-Deshmukh").then.catch().finally()


const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task is completed ");
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promise Consumed");
    
})
new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved");
    
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"chai" ,email:"chai@example"
        })
    },1000)
})
promisethree.then(function(username){
    console.log(username);
    
})