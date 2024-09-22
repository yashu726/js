/* diffrence between toFixed and toPrecision 
toFixed() =>
            Purpose: Formats a number using fixed-point notation.
            Parameters: Accepts one parameter, which specifies the number of digits after the decimal point.
            Return Value: Returns a string representation of the number, rounded to the specified number of decimal places.

toPrecision()=>
            Purpose: Formats a number to a specified precision, which is the total number of significant digits.
            Parameters: Accepts one parameter, which specifies the number of significant digits.
            Return Value: Returns a string representation of the number, rounded to the specified number of significant digits.

*/
const score = 400;

console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.89667956

console.log(otherNumber.toPrecision(15))

const hundreds = 1000000

console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++++++++++++++++++++          Maths           ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ \\

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.2));
console.log(Math.round(5.5));
console.log(Math.ceil(6.4));
console.log(Math.floor(6.9));
console.log(Math.min(4,5,2,8));
console.log(Math.max(4,5,2,8));

console.log(Math.random());     // 0.41600577193730404
console.log(Math.random() *10);  // One digit shift in left side =>  7.444708767645782
console.log( (Math.random() *10 + 1) ); /* kabhi na kabhi to zero ki value aati hi hai esliye plus one ka use kiya jata hai 
taki zero ki value nhi aaye
 (with out plus use digit) 0.41600577193730404   Using plus one won't return zero.  7.444708767645782*/
 console.log(Math.floor(Math.random() *10 + 1));

 const min = 10;
 const max =20;

 console.log(Math.floor(Math.random() * (max -min + 1 )) + min)



