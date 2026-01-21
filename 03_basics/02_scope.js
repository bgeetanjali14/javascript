// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



//Nested Scope

// function one(){
//     const username = "geetanjali"

//     function two(){
//         const website = "youtube"
//         console.log(username);

//     }

//     // console.log(website);


//     two()
// }

// one()

//child function parent k variable ko access kr paate h


if(true){
    const username = "geetanjali"
    if( username === "geetanjali"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++++++++++ interestinggg ++++++++++++++++++++++++++++++//

function addOne(num){
    return num +1
}

addOne(7)


const addTwo = function(num){
    return num +2
}
addTwo(5)