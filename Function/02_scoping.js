

if(true){
    let a=10
    const b=20
    var c=40
}

//console.log(a);
//console.log(b);
console.log(c);


let a=300
if(true){
    let a=10;
    let b=20
    console.log("INNER : " ,a); //  printed me 10
    
}
console.log(a); // printed 300

//****************************** */
// nested looping

function one(){
    const username="Devaanshu"

    function two(){
        const lastname="Deshmukh"
        console.log(username);
        return two()
    }

}
if(true){
    const username="Devanshu"
    if(username==='Devanshu'){
        const website=" Devanshuuuu"
        console.log(username+website);
        
    }
    console.log(username);// heare printed 
    
} 
//console.log(username);
// not printed 

//********************** */

function addone(num){
    return num+1
}
const result=addone(5)
console.log(result);

///////////////////Expression with function

const addtwo=function(num){
    return num+2
}
console.log(addtwo(6));


