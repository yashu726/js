//  SAME DATA IN USE 5 BAR
// console.log("Y");
// console.log("A");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("W");
// console.log("A");
// console.log("N");
// console.log("T");

function sayMayName(){
console.log("Y");
console.log("A");
console.log("S");
console.log("H");
console.log("A");
console.log("W");
console.log("A");
console.log("N");
console.log("T");
}
//   sayMayName   Reference
// sayMayName ()  Execute

// function addTwoNumber(num1,num2) {
//     console.log(num1+num2);
    
// }

// const result = addTwoNumber(3,4)

// console.log("result :", result);  // variable me value store nhi hoti 

// function addTwoNumber(num1,num2){
//     let result = num1+num2;
//     console.log("yash")
//     return result 
//     console.log("yash")     // return ke bad koi bhi function execute nhin hota hai
// }

function addTwoNumber(num1,num2){
    return  num1+num2;
   
}

// const result = addTwoNumber(4,5);
// console.log("result :", result)

//  function loginUserMassege(username){
//     return `${username}  just logged in`
//  }

//  loginUserMassege("yash")  // function execute hua par value kahi store nhi hui

//  console.log(loginUserMassege("yash"));

//    jab aap argument me kuch pas hi na kre tab kya result aayega

//  function loginUserMassege(username){
    
//     return `${username}  just logged in`
//  }


//  console.log(loginUserMassege());

 // result undefined

 //  check condition

 function loginUserMassege(username){
    // if(username === undefined){
    //     console.log("please enter the username");
    //     return;
    // }
    if(!username){
        console.log("please enter the username");  //  second way same result
        return;
    }
    return `${username}  just logged in`
 }


//  console.log(loginUserMassege());


//   shoping card calculate item and price

function calculateCartPrice(val1, val2, ...num){  // ...rest oprator not a spread oprator
    return num;
}
//  console.log(calculateCartPrice(11,22,33,44));


//  object ko function me kese use kre

const user = {
    username : "yashawant",
    price : 1222
}

function haldleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
    return `username is ${anyobject.username} and price is ${anyobject.price}`;
}

console.log(haldleObject(user));

// without object create directiy function execute assign value 
haldleObject({
    username : "meena",
    price : 1999
})



// Array ko function me kese use kre

const newArray = [100,200,300,400];

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,500]));


 



 




