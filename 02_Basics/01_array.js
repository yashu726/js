// Array 

const myArry = [0,1,2,3,4,5];  // simillar array

const myArry1 = new Array(1,2,3, "shaktiman", true)   // mix array
console.log(myArry1);


//   Array Methods

myArry.push(6)  // value add in array
myArry.pop()   // remove  Last value 
myArry.unshift(8)  //  add value in the begginning
myArry.shift()    // remove in begginning value
console.log(myArry);
console.log(myArry.includes(19));  // Answer in true and false
console.log(myArry.indexOf(6));  // index number 


const newArry = myArry.join() // convert in string   result :-  1,2,3,4,5,6,11,7,9
console.log(newArry);
console.log(myArry);           //   result [1,  2, 3, 4, 5,6, 11, 7, 9] 


  //  slice and splice  method

  //  slice and splice method diffrence

   console.log("A", myArry);
   

   const myn1 = myArry.slice(1,3)

   console.log("B", myArry);
   console.log(myn1);

   const myn2 = myArry.splice(1,3)

   console.log("C", myArry);
   console.log(myn2);
   
   



