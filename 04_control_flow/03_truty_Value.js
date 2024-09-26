// data base se koi query ki
// user ka email btao
// const userEmail = "yash@gmail.com";
const userEmail = [];
// Email ke bases par print kro

if (userEmail) {
    console.log("Got User Email");
    
} else {
    console.log("don't have user Email");
    
}
 /*
 falsy value 
 false , 0 ek false value hoti or -0 bhi false value mana jata hai,   bigInt me 0n ki value bhi false hoti hai,  "" ko bhi false hoti hai,
 null, or undefind ki value bhi false hoti hai, Nan (Note a number) ki bhi value false hoti hai
 */
/*
Truthy value
string ke andr jo bhi value hogi wo true value hogi "0", "false" " " string agar space bhi hota hai to bhi wah true value hoti hai,
[] array or {} object bhi true value hota hai function(){} function agr declear bhi hota hai to wah bhi true value hoti hai
*/

// how to check empty array

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

// how to check empty Object

const emptyObject = {};
if (Object.keys(emptyObject).length===0) {
    console.log("Object is Empty");
    
}