//object literals

const JsUser = {
    name: "Ashish",
    age: 18,
    location: "Hyderabad",
    email: "ashishb@gmail.com",
    isLoggedin: false,
    isLoggedinDays: ["Monday", "Saturday"]
    [mySym] = "mykey1"
}

//Accesing objects
console.log(JsUser.age);
console.log(JsUser["location"])   //preferred

JsUser.country = "India"
JsUser.age = 19

console.log(JsUser);
