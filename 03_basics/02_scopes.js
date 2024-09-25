// let a = 10 ;
// const b= 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


//  {}  this is scopes (yah kisi function ya if else ke sath aata hai hai to ese scopes bola jata hai)

 var c = 300;  // var is not useable
 let a = 100;  // globle scope
if(true){    // block scope 
    let a = 10 ;      
const b= 20;
var c = 30;
console.log("INNER :", a);

}
console.log(a);
// console.log(b);
// console.log(c);



/* +++++++++++++++++++++++++++++++++++ Neasted Scope  ++++++++++++++++++++++++++++++++ */

function one (){
    const username = "yashawant";

    function two(){
        const website = "yash.com";

        console.log(username);
        console.log(website);
    }
     // console.log(website); Error
    two()
}
one()

if (true) {
    const username = "yashu";

    if (username==="yashu") {
        const website = "yashu.com";

        console.log(username + website)
        
    }
    // console.log(website);  Error
    
}

// console.log(username);   Error


/* +++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++ */


console.log(addOne(5));   // execute


function addOne(num){
    return num + 1;
}

addTwo(5)                      //  not execute
const addTwo = function(num) {
    return num + 2;
}

