const one=() =>{
    let username="Devanshu"
    return username
}
console.log(one())

// ///////undefined comes when we the  , function does not explicitly return a value.

const two=(num1,num2)=>{
    return num1+num2;
}

console.log(two(23,12));

////// Implicit return 
const twosum=(num1,num2)=> num1+num2

console.log(twosum(12,14));


///////////////// Immediately Invoke Function expression

//IIFE Used in database

(function chai(){
    console.log("DB Connected");
    
})();// by adding () the function automatically gets called

// (); neede to close this also then only the twoDB will run


(function twoDB(){
    console.log("DB Connected two");
    
})();


/// By Arrow functon

( () =>{
    console.log("DB Connected three");
    
})();


( (name) =>{
    console.log(`DB Connection Stablish of ${name}`);
    
})('Devanshu')