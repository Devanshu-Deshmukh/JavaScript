
const mynum2=[1,2,3,4,5,6,8,9]

const newnums=mynum2.map((num) => num *10)
.map((num)=>num + 1)
.filter((num) => num>=40)
console.log(newnums);
  