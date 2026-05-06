let age=22
let userName="Devanshu"
let isLoggedin=true
let state=null
let password=undefined
let number=900022020n

console.log(age,isLoggedin,state,password,number);


console.log(typeof 22); // number
console.log(typeof "Devanshu"); //string
console.log(typeof  true); //boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof 900022020n); // bigint
 

/* Data types 7 primitive + 1 object
string,
number,
boolean,
undefined,
null,
symbol,
bigint,
object
*/


/*
There are 2 types of Data Type Premitive and Non Premitive 

primitive
7 types :String ,Number ,Boolean,null,Undefined,Symbol, bigint 

Reference (Non Premititve)
Array, objects,functions
*/


const id=Symbol('103')
const anotherID=Symbol('103')
console.log(id===anotherID); //false 
console.log(typeof id);
console.log(id==anotherID);//false


// Array ,object,function

const names=["Devansh","Devanshu","Dev"]
let myObj={
    name:"Devanshu",
    age:22
    
}
console.log(names); // forms an Array
// console.log(name); // ReferenceError: name is not defined




const myFunction=function(){
    const name="Devanshu"
    console.log("Hello world");
    
}
console.log(typeof myFunction);//function 




// Assigning the new Values to predefine data type

let myName="Devanshu";
let anotherName=myName
anotherName="Dishu"

console.log(myName); //the output didnt changed of previous assigned variable  
console.log(anotherName);


// But in Object it will changed in both

let myobj={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let myobj2=myobj
myobj2.email="Dev@gmail.com"
console.log(myobj.email);// same output for Both because boyh the variable are pointing to same object from stack to heap
console.log(myobj2.email);

// Use of Baptics

const name="Max Verstappen"
const campionship=4
console.log(`Hello Simply Lovely from ${name} and  I have won ${campionship} campionship`);

// String In-built Function
// To find the character at a position
const f1name=new String('Lewis')
console.log(f1name[1]);
console.log(f1name.__proto__);
console.log(f1name.length);
console.log(f1name.toUpperCase());
console.log(f1name.charAt(2));//w
console.log(f1name.indexOf('s'));// 4


const newString=f1name.substring(1,5);
console.log(newString);//ewis

const anotherString=f1name.slice(1,3)
console.log(anotherString);//doesnot take last index only ew

const nextString="   Devanshu    "
console.log(nextString);

console.log(nextString.trim()); // remove the blank space










