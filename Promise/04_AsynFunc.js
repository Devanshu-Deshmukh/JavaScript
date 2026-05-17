const promisefour= new Promise(function(resolve,reject){
    resolve({username:"Devanshu", password:"Dev"})
})

async function consumepromise() {
    try{
        const response=await promisefour
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}
consumepromise()