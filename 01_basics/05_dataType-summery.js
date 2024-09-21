/*

=> JavaScript ek "dynamically typed" language hai, yani ki isme variable ki data type runtime (execution time) par decide hoti hai, aur 
    aap ek variable mein alag-alag data types ke values store kar sakte hain. JavaScript mein aap ek variable ko pehle number, phir string, 
    aur phir boolean ke roop mein istemal kar sakte hain, aur interpreter runtime par type checks karta hai.

    (Javascript is dynamically typed language, which means the type of variable is determined by the value they hold at runtime and can be 
    changed throughout the program as we assign different values to variable)

 => two type of datatype premitive and reference (Non premitive)

 primitive data type has 7 type, These are call-by-value
* Premitive Datatypes

                 Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined

Primitive DataTypes:


1.Number:-  Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String:-  Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean:-  Represents a binary value, either true or false, often used for conditional logic.

4.Undefined:-  Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
               (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)

5.Null:-  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 
         (iska matlab hai empty or zero nahi hai)

6.Symbol (ES6):-   it is mostly used used to find uniqnece. 
                   (kisi bhi value ko unique banane ke liye use kiya jata hai)

7.BigInt (ES11):-  Represents large integers that cannot be represented by the Number type.
                   (jo badi values hoti hai oo hum BigInt mein use karte hai)


*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


/* Non-Premitive OR Referance OR Object datatype (These are call-by-reference)

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// **************************************************                 ***********************************************************\\

/*

Primitive data types are immutable and non-primitive data types are mutable. Primitive data type stored in
 stack memory and non primitive data types are stored in heap memory.

Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/