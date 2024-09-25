//  this means current context  refer krta hai  (current value ko use me leta hai)   context means value

//  browser ke andar jo object hai wo window object hai


const user = {
    username : "yash",
    price : 190,

    welcomeMassege : function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMassege();

// user.username = "sam";

// user.welcomeMassege()
// console.log(this);



// function one() {
//     let username = "yash" 
//     console.log(this.username);  // this object context ke liye hi work kr rha hai ese function ke liye work ni kr rha hai
    
// }

// one()

// const one = function() {
//     let username = "yash" 
//     console.log(this.username);  // this object context ke liye hi work kr rha hai ese function ke liye work ni kr rha hai
    
// }

// one()

const one = () => {                 // Arrow Function
    let username = "yash" 
    console.log(this.username);  
    
}

// one()

// basic arrow function

const addTwo = (num1,num2) =>{
    return num1 + num2;
}

// console.log(addTwo(2,3));

//  implicit return arrow function

// const addThree = (num1,num2) => num1 + num2;
// const addThree = (num1,num2) => (num1 + num2);
 const addThree = (num1,num2) => ({username : "yash"});   // object return


console.log(addThree(2,3));

// diffrence this key word regular function and arrow function

function regFun() {
    console.log(this); // this got some value
    
}

 regFun()

const regArrow = () => {
    console.log(this);   // this empty object {}
    
}

regArrow()


