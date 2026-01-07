const accountId = 140404
let accountEmail = "bejjalwargeet@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState


// console.log(accountId);
//constants cannot be changed - block scope

// console.log(accountId);

// console.log(accountEmail);

accountEmail = "geet@gmail.com"
accountPassword = "171717"
accountCity = "Pune"

console.table([accountEmail, accountPassword, accountCity, accountState]);



// NOTES:
//const-cannot be reassigned and cnnot be declared,has a block scope{can be preferred}
//let-can be reassigned but cannot be declared again,has a block scope{widely preferred}
//var-can be reassigned but can be declared again,has a global scope{shouldnt be preferred}

//PLEASE DON NOT USE VAR bcoz of issue in block scope and functional scope!
