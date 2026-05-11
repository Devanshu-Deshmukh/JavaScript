// Arrays

const myArr=[0,1,2,3,4,5]
console.log(myArr);

// Arrays enables storing a collection of multiple items under a single variable name
// In JavaScript Array are not primitive but are instead  Array objects.
// In Array the first element starts from first indexed

// ----------------------************************----------------/
// Shallow Copy
// Shallow copy of an object is a copy whose properties share the same refrence (point to the same underlying values ) as the source object from which the copy was made;

// Deep Copy
// Deeep copy of an object is a copy whose properties do not share the same refrence (point to the same underlying values ) as the source object from which the copy was made;

// //////////////////////////////////////////////////////////


const myhero=["Iron man" , " Thor ", "Loki"]
const myhero2=new Array(1,2,3,4)
console.log(myhero2[1]); // 2 output

//  Method in Arrays

myArr.push(6)
console.log(myArr); //[  0, 1, 2, 3,  4, 5, 6 ]
myArr.push(7)
console.log(myArr); // Added 7 into it

myArr.pop()
console.log(myArr);//  deleted the element

myArr.unshift(9)
console.log(myArr); // [9, 0, 1, 2,3, 4, 5, 6] added the 9 at front

myArr.shift()
console.log(myArr); //  removet the first element

console.log(myArr.includes(3)); // it searches the element does it include in it and return true or false

console.log(myArr.indexOf(5)); // gives the index

const newArr= myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr);


// *************************************************************************

//slice,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3) // [ 1, 2 ]
console.log(myn1);// does not changes the array
console.log("B ", myArr);

const myn2=myArr.splice(1,3)
console.log("c ",myArr);// c  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ] // it changes the array also includes the last index value



//*********************************************

const heros=["thor", "Ironman", "spiderman"]
const dc_heros=["Batman", "Superman"]
heros.push(dc_heros)
console.log(heros); //[ 'thor', 'Ironman', 'spiderman', [ 'Batman', 'Superman' ] ]

const allheros=heros.concat(dc_heros)
console.log(allheros); //merges both the array

const new_all=[...heros,...dc_heros] // spread operator used to seperate 
console.log(new_all);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_real=another_array.flat(Infinity)
console.log(new_real); // 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5


console.log(Array.isArray("Devanshu"));//false
console.log(Array.from("devanshu")); //'d', 'e', 'v','a', 'n', 's','h', 'u'

let score1=200;
let score2=300;
let score3=400;
console.log(Array.of(score1,score2,score3)); // [ 200, 300, 400 ]






















