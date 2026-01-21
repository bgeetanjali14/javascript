function saymyName(){
    console.log("G");
    console.log("E");
    console.log("E");
    console.log("T");
}

// saymyName()

//function to add numbers

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

// addTwoNumbers(3, 4)

// addTwoNumbers(3, "4")

// addTwoNumbers(3, "a")

//  function addTwoNumbers(Number1, Number2){
//     let result = Number1 + Number2
//     return result
//  }

// const result = addTwoNumbers(3, 5)
// console.log("Result:" ,result);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("GEETANJALI"))
 console.log(loginUserMessage())


 //rest operator - ... (same as spread operator just use case differs)

 function calculateCartPrice(...num1){
    return num1 
 }
 console.log(calculateCartPrice(200,300,500,657,890));


 const user = {
    username: "hitesh",
    price: 199
 }
 
 function handleObject (anyobject){
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`);
    

 }

 handleObject(user)


 const myNewArray = [200, 300, 450, 670, 789,890]

 function returnSecondValue(getArray){
    return getArray[3]
 }
 console.log(returnSecondValue(myNewArray));
 