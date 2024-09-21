/*

=> JavaScript ek "dynamically typed" language hai, yani ki isme variable ki data type runtime (execution time) par decide hoti hai, aur 
    aap ek variable mein alag-alag data types ke values store kar sakte hain. JavaScript mein aap ek variable ko pehle number, phir string, 
    aur phir boolean ke roop mein istemal kar sakte hain, aur interpreter runtime par type checks karta hai.

    (Javascript is dynamically typed language, which means the type of variable is determined by the value they hold at runtime and can be 
    changed throughout the program as we assign different values to variable)

 => two type of datatype premitive and reference (Non premitive)

 it is 7 categories type of datatype; These are call-by-value
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


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.


* Non-Premitive OR Referance OR Object datatype (These are call-by-reference)

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.
*/