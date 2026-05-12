const user={
    username:"Devanshu",
    money:1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()
user.username="Sammmm"
console.log(user.username);


function chai(){
    console.log(this);
    
}
chai()
