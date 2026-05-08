let mydate =new Date()
console.log(mydate); // Date () function gives the current date 2026-05-08T10:22:16.296Z
console.log(mydate.toString()); // output Fri May 08 2026 15:56:11
console.log(mydate.toDateString()); // output only  Fri May 08 2026
console.log(mydate.toLocaleString()); // 8/5/2026, 3:57:21 pm

// User centric date 

let mycreatedate= new Date(2026,7,31);
console.log(mycreatedate.toDateString()); //Mon Aug 31 2026

let create = new Date("2026-08-31")
console.log(create.toLocaleString()); // 31/8/2026, 5:30:00 am


let mytime=Date.now()
console.log(mytime);
console.log(create.getTime());
console.log(Math.floor(Date.now()/1000));

let ruin=new Date()
console.log(ruin.getMonth()); // always 1 less tha the current month
console.log(ruin.getDay()); // day is friday











