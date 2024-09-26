// if 
        //  Comparison condition

  // Comparison Operator
  /* 
  < less than (kisi value se choti hai ya nhi), > greater than (kisi value se badi hai ya nhi), <= (kisi value se badi ya brabar hai ya nhi)
   example (2<=2) result true, >=, single = value assign karne ke liye use kiya jata hai, (==) means value brabr hai ya nhi ,
    != (not equl) kya two two ke brabr nhi hai (2 != 3) kya two nhi hai equl three ke, === datatype or value equl hai ya nhi nhi dono chije check krta hai  
 
 */

    if (2 != 3) {
        // console.log("true");
        
    } 
    const temprature = 41 // today temprature
     // check temprature

    if (temprature < 50) {
        // console.log("less than 50");
        
    }
    // console.log("Temprature is Greater than 50");

    // agar stricly ckeck krna hao
    if (temprature === 50) {
        // console.log("less than 50");
        
    }
    // console.log("Temprature is Greater than 50");

    // if (temprature === 40) {
    //     console.log("less than 50");
        
    // }
    // else{
    //     console.log("Temprature is Greater than 50");
    // }
   
    // scope related

    //  const score = 200;
    // if (score > 100) {
    //     let power = "fly";
    //     console.log(`user power : ${power}`);  // this is correct
                
    // }
    // console.log(`user power : ${power}`);  // this is wrong show error

    // sorthand notetion

     const balance = 1000;
    // if (balance > 500) console.log("test");
   
    // multiple condition check 
    // if (balance < 500) {
    //     console.log("less than 500");
        
    // }else if(balance < 750){
    //     console.log("less than 750");
    // }else if(balance < 900){
    //     console.log("less than 900");
    // }else{ 
    //         console.log("less than 1200");
    // }

// Real life use 

// const loggedIn = true;
// const debitCard = "";

// if (loggedIn && debitCard) {
//     console.log("allow to buy course");
    
// }

// result false

const loggedIn = true;
const debitCard = true;
// && all codition are true result is true and one condition is wrong and result is false
if (loggedIn && debitCard) {
    // console.log("allow to buy course"); // result true allow to buy course
    
}

const loggedInGoogle = false; // not login
const loggedInFromEmail = true; // login
if (loggedInGoogle || loggedInFromEmail) {   // true is any one condition
    console.log("User Logged in");
        
}


// nullish coalescing operator (??)  null ua undefind

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator 
// condition ? true :  false

const iceTeaPrice = 100;
//kya price 80 se kam hai ya equl
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");






