const user={
    username:"Devanshu",
    logincount:8,
    signedin:true,

    getUserdetails:function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserdetails());

// Consructor

// const promiseone=new Promise()
// const date= new Date()

//  this 

function User(username,logincount,isloogedin){
    this.username=username,
    this.logincount=logincount,
    this.isloogedin=isloogedin

    return this
}

const oneuser=User("Devanshu",12,true)
console.log(oneuser);

