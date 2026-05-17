const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Devanshu" , password:"Dev@123"})
        }
        else{
            reject('Error :Something went wrong')
        }
    },1000)
})
promiseone
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Caught Handled Error:", error);
  });