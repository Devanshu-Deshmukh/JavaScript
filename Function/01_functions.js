function sayname(){
    console.log('Devanshu');
    
}
sayname()

function addtwonumer(number1,number2){
    console.log(number1+number2);
    
}
addtwonumer(55,67)// 122
addtwonumer(55,"67")//5567


function adding(one,second){
    let result=one+second
    return result
    
}
const result= adding(12,34)
console.log("Result :",result);// 46


/******************************** */

function loginMessage(username){
    return `${username} just logged in`
}
console.log(loginMessage("Devanshu"));

/************************** */

function userlogin(username){
    if(username == undefined){
        console.log("please enter a name");
        return
    }
    else{
        return `${username} just logged in`
    }
}
console.log(userlogin()); // please enter a number
console.log(userlogin("Devanshu")); // Devanshu just logged in


// **********************
function calculate(...num1){
    return num1
}
console.log(calculate(200,300,400)); //  [ 200, 300, 400 ]

// Rest operator || spread operator


// Sending an object to function
const user={
    username:"Devanshu",
    price:199
}

function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);
    
}
handleobj(user)

/********************************* */
// sending an array to function
const newarray=[200,300,400]
function returnsecondarray(getArray){
    return getArray[1]
}
console.log(returnsecondarray(newarray));










