const accountId = 1234;
let accountEmail = "yash@google.com";
var accountPass = "123";
accountCity ="udaipur";
let accountState;
// accountId = 1; // not allowed     
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail = "ykyk@.com";
accountPass = "212121";
accountCity = "parsad";

console.table([accountId,accountEmail,accountPass,accountCity,accountState])
