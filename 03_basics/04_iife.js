// Immediately Inoveked Function Expressions (IIFE) 

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }

// chai();

// () function defination () function execute
// When two IIFE are together then there is a semicolon in between
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

// Arrow function
(()=>{
    // With Name IIFE
    console.log(`DB CONNECTED TWO`);
})()

((name)=>{
    // With Prameter IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("yash")