/*
const tinderUser = new Object();   singleton Object

const tinderUser = {}   non singleton Object

*/

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.loggedIn = false

console.log(tinderUser);

//   object inside object


const regularUser = {
    email : "meena@google.com",
    fullName : {
        age : 23,
        userFullName : {
            firstName : "yash",
            lastName : "meena"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);


//       merge  object 

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3 : "C", 4 : "D"}

const obj3 = {obj1,obj2}

console.log(obj3); // not right way
const obj4 = Object.assign({},obj1,obj2)    //  right way

const obj5 = {...obj1, ...obj2}   // It is used the most spread  oprater
console.log(obj4)
console.log(obj5);




//     When the value comes from the database, it will be an array of objects

const users = [
    {
        id : 1,
        email : "y@gmail.com"
    },
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 1,
        email : "m@gmail.com"
    }
]

console.log(users[1].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser).length);
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedIn'));                 //  Do you own this property
console.log(tinderUser.hasOwnProperty('loggedout'));  


 /* +++++++++++++++++++++++++++++++  Object de-Structure  ++++++++++++++++++++++++++++++++++++++++++ */

 const course = {
    courseName : "javascript",
    price : "1999",
    courseInstructor : "yashawant"
 }

 console.log(course.courseInstructor);

 const {courseInstructor} = course;   //  most usebl

 console.log(courseInstructor);

 const {courseInstructor : instructor} = course;   //  most usebl

 console.log(instructor);


 
 









