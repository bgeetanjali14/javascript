//Array

const myArr = [2,3,4,5,6,7,8]

const myHeros = ["Spiderman", "Batman", "Catwoman"]
// console.log(myHeros[2]);

//ARRAY METHODSSSS

// 1.PUSH
myArr.push(68)
myArr.push(89)
// console.log(myArr);

// 2.POP
myArr.pop(89)
// console.log(myArr);

// 3.UNSHIFT
myArr.unshift(78)
// console.log(myArr);

// 4.SHIFT
myArr.shift()


// 5.indexof
// console.log(myArr.indexOf(90));
// console.log(myArr.includes(66));



const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// 6.SLICE
console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //doesnt include 3rd one
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) 
console.log(myn2);
console.log("C ",myArr);





