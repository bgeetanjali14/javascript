//object using constructors/singleton

// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = true
// // console.log(tinderUser);

// /// Nested Objects
// const regularUser = {
//     email: "sam@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Geetanjali",
//             lastname: "Bejjalwar"
//         }
//     }
// }


// // console.log(regularUser.fullname.userfullname.lastname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3:"a", 4:"b"}

// // const obj3 = Object.assign({}, obj1, obj2)     //object.assign merges two or more objects+++
// // console.log(obj3);


// //or use spread method
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);+


//Destucturing Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);




