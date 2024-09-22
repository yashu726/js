let mydate = new Date();
 console.log(mydate);
 console.log(mydate.toString());
 console.log(mydate.toDateString());
 console.log(mydate.toISOString());
 console.log(mydate.toJSON());
 console.log(mydate.toLocaleDateString());
 console.log(mydate.toLocaleTimeString());
 console.log(mydate.toLocaleString());
 console.log(typeof mydate);



 let myCreatedDate = new Date(2023, 0, 24);

 console.log(myCreatedDate);
 console.log(myCreatedDate.toDateString());

 let myCreatedDateAndTime = new Date(2023, 0, 24, 5, 6);

 console.log(myCreatedDateAndTime.toLocaleString())

//  const specificDate =  new Date("2023-01-24");

//  console.log(specificDate.toLocaleString())
const specificDate =  new Date("01-14-2023");

console.log(specificDate.toLocaleString())

const myTimeStamp = Date.now();
console.log(myTimeStamp);


// second me convert 

console.log(Math.floor(Date.now()/1000));

 
 
 const newDate = new Date();

console.log( newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'UTC',
 }));

