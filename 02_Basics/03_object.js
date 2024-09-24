/*
There are two ways to declare an object.
(i). literal 
    const jsUser = {}


(2). construct

construct se agar aap bnate hai to singleton ek object hi bnta hai 
Object.create => construct method
*/

 const mysymbol = Symbol("key1")
 

const jsUser = {
    name : "yashawant",
    "full name" : "yashawant meena",
    [mysymbol] : "key1",
    age : 20,
    address : "udaipur",
    email : "yash@gmail.com",
    isLoggedIn : false,
    lastLogginDay : ["sunday", "monday"]
}

console.log(jsUser.name);
console.log(jsUser["age"]);
// console.log(jsUser.full name);
console.log(jsUser["full name"]);
console.log(jsUser[mysymbol]);

jsUser.email = "meena@gmail.com"  // value change

// Object.freeze(jsUser)   // no value will change

jsUser.email = "ram@google.com"
jsUser.address = "parsad"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User ${this.name}`);
    
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




