const name = "yashawant";
repoCount = 50;


console.log(name + " " + repoCount + " value"); // old method not recommended


console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('yashawant')

console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-8,4);

console.log(anotherString);

const newStringOne = "         yash     "

console.log(newStringOne);
console.log(newStringOne.trim());
 
const url = "https//yash.com/yash%20meena";

console.log(url.replace("%20","-"));
console.log(url.includes("meena"));
console.log(url.includes("kharadi"));

const newStringTwo = "yash-kumar-meena"

console.log(newStringTwo.split('-'));






