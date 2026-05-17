

const promisefour= new Promise(function(resolve,reject){
    resolve({username:"Devanshu", password:"Dev"})
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})