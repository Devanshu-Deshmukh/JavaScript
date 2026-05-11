const user={
    name:"Devanshu",
    age:"23",
    location:"bhopal",
    email:"devanshu@gmail",
    isLoggedin: false,
    loginDays:["Monday","Tuesday"]
}
console.log(user.name);
console.log(user["email"]);


const mysm=Symbol("Key1")
console.log(mysm); // Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object

user.greeting=function(){
    console.log("Hello world");
    
}
console.log(user.greeting());
user.greetingtw0=function(){
    console.log(`hello world My name is ,  ${this.name}`);
    
}
console.log(user.greetingtw0); // [Function (anonymous)]
console.log(user.greetingtw0()); // hello world My name is ,  Devanshu

//**************************************************** */
// singleton object and non singleton object

const stackuser={}
stackuser.name="Dev"
stackuser.id="63"
stackuser.ccuntry="India"
console.log(stackuser); // { name: 'Dev', id: '63', ccuntry: 'India' }

//**************************************** */
// Object into object

const regularuser={
    email:"Dev@gmail",
    fullname:{
        userfullname:{
            firstname:"Devanshu",
            secondname:"Deshmukh"
        }
    }
}

console.log(regularuser.fullname.userfullname);// { firstname: 'Devanshu', secondname: 'Deshmukh' }

//*********************************************************** */
//Object Merging

const obj1={
    1:'A',
    2:'B'
}
const obj2={
    3:'C',
    4:'D'
}

const obj3={obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

const  obj4=Object.assign({}, obj1,obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj4); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

const onj5={...obj1,...obj2}
console.log(onj5); // spread operator also does the same works { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('isLoggedin')); // true 

//********************************************** */
// Object restructing

const course ={
    coursename:"JavaScript",

    price:"10000",
    courseInstructor:"Devanshu"
}

const {courseInstructor}=course
console.log(courseInstructor); // devanshu



{
    //JSON API
}











