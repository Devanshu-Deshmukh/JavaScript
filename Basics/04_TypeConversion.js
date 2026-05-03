let score =33
console.log(typeof score); // number
console.log(typeof (score)); //number

// let score="33" // can not reassigned it must take variable name different 
let marks="78abd"
console.log(typeof marks); // String 
console.log(typeof (marks)); // String

let number=Number(marks)
console.log(typeof number); // type casting of String variable to number
console.log(number);// output as NaN as Number() is very strict. It tries to convert the entire string into a number. If there is even one letter like "a", "b", or "d" anywhere in the string


let value=parseInt(marks)
console.log(typeof value); // gave me number
console.log(value); // parseInt() (It reads from left to right and stops at the first letter) by whic it will not return NaN will return a Number
// output : 78

let isLoggedin = Boolean(5)
let booleanisloggedin=Boolean(isLoggedin)
console.log(booleanisloggedin); // when Boolean(1) it will return true , Boolean(0) it will return false and Boolean("Devanshu") returns true  

// Boolean("") returns false 
// Boolean(" ") return true
// Boolean(5) return true at number 

let userName= 45
let changeUser= String(userName)
console.log(userName); // output as 45
console.log(typeof userName); // output number

let val=3
let negvalue=-val
console.log(negvalue); // convert the positive number to negative number

let str1="Devanshu"
let str2=" Deshmukh"

let str3=str1+str2;
console.log(str3); // will add both strings and give output

console.log("1"+3); // output is 13
console.log(3+"2"); // output is 32
console.log("4"+2+5);// output is 425
console.log(3+2+"6");// output is 56

let num1,num2,num3
num1=num2=num3=3+4
console.log(num3);// num1 gave output 7 
// num2 also given the same output 7
// num3 also the same 

let gameCounter=100
let consCounter=150
gameCounter++;
++consCounter
console.log(gameCounter); // it is the postIncrement of the variable 
console.log(consCounter);//it is preCounter of the variable

console.log("2">1);// given true 
console.log("02">1);//given true 
console.log(2 > "1");//true 
console.log(2> "3");//false
console.log("2" >"1");//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true , conversion convert null to a number treating it as 0

console.log(undefined==0);// false
console.log(undefined>0);// false
console.log(undefined<0);// false
console.log(undefined>=0);//false

console.log("2"==2);// true


















