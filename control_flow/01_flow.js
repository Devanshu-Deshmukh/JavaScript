if(2==="2"){
    console.log("Executed");
}

//<,> ,==,>=,<=,!=,===


const temprature=41
if(temprature<50){
    console.log("Less than 50");
    
}
console.log("Temprature is greater than 50");

const temprature1=41
if(temprature1<50){
    console.log("Less than 50");
    
}else{
    console.log("Temprature is greater than 50");
}

//////////////////////////////

const score=200
if(score >100){
    const power='speed'; /// if we put var it will run out of if also
    console.log(`User power is : ${power}`);
}

const balance=1000
if(balance>500) console.log("test"), console.log("test2");

const userloogedin=true
const debitcard=true
if(userloogedin && debitcard) console.log("Allow User ");

const loogedfromemail=true
const loogedfromgoogle=true
if(loogedfromemail || loogedfromgoogle) console.log("Entered the user");

//////////////////Switch case

const month=3;
switch(month)
{
    case 1:
        console.log("January");
        break
    case 2:
        console.log("Febuaray");
        break
    case 3:
        console.log("March");
        break       

}


/// Truthy and falsy value

// falsy value
// false, 0,-0,BigInt,"",null,undefined, NaN

//truthy value
// "0","false"," ",[],{}, function(){}


const userEmail=""

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don not have user mail");// run due to falsy value
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??) : null defined 
let val1;
// val1 =5 ?? 10;
val1 =undefined ?? 15;
console.log(val1);

// terniraray operator

const teaprice=100
teaprice >= 80 ? console.log("less than 80") : console.log("More than 80");

let myarr=["flash "," batman ", "superman"]
for(let i=0;i<myarr.length;i++){
    const element=myarr[i];
    console.log(element);
    
}

let score23 =11
do{
    console.log(`Score is ${score23}`);
    score23++;
} 
while(score23 <=10)

// for off

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const namess="Devanshu"
for(const greet of namess){
    console.log(`Each character is  ${greet}`);
    
}


// Map is a object that hold key value pair and remember the original insertion order

const map=new Map()
map.set('IN' , "India")
map.set('fr' ,"France")
// console.log(map); // Map(2) { 'IN' => 'India', 'fr' => 'France' }

for (const [key,value] of map) {
    console.log(key, "-" , value);
    
}

// forin

const myobgj={
    js:"javascript",
    cpp:"c++",
    class:"java"
}

for(const key in myobgj){
    console.log(key);
    console.log(`${key} the shortcut is ${myobgj[key]}`);
    
}

const coding=["js" ,"ruby" , "java", "python"]
coding.forEach( function(val){ //forEach calls the callbackfn function one time for each element in the array.
    console.log(val);
})

coding.forEach ( (item) =>
{
    console.log(item);
    
}
)


