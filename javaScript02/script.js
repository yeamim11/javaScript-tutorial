console.log("Hello World");

document.getElementById("head").innerHTML = "javascript is fun!";



// ================= arithmemtic opperator =============== 

let a = 10;
let b = 20;
let c = a + b; // addition
console.log(c)

// let userInput = prompt("Enter a number: ");
// let number1= parseInt(userInput); // convert string to number

// if (number1 % 2 === 0) {
//     console.log(`${number1} is even.`);
// }else {
//     console.log(`${number1} is odd.`);
// }


// ================ comparison opperator ===============
const s =5; 
const d = 15;
console.log(s == d); // true (loose equality)
console.log(s === d); // false (strict equality)
console.log(s !== d); // false (loose inequality)
console.log(s > d); // false (greater than)
console.log(s < d); // true (less than) 
console.log(s >= d); // false (greater than or equal to)
console.log(s <= d); // true (less than or equal to)


// ================ logical opperator ===============
true && true; // true (AND)
false && true; // false (AND)
true && false; // false (AND)
true || false; // true (OR)
false || false; // false (OR) 
false || true; // true (OR) 

let x = 5;
let y = 10;
console.log(!(x > y)); // false (NOT)
console.log(!(x < y)); // true (NOT)
console.log(!(x == y)); // true (NOT)
console.log(!(x != y)); // false (NOT)


// ================ assignment opperator ===============
 let z = 15; // assignment
 let v = 10; // assignment

z = z + v; // addition assignment
z += v; // addition assignment

z= z - v; // subtraction assignment
z -= v; // subtraction assignment

z = z * v; // multiplication assignment
z *= v; // multiplication assignment

z = z / v; // division assignment
z /= v; // division assignment

    console.log(z); // output the value of z


// ================ ternary opperator ===============
let p = 2023;
let u = 2000;
let result = (p > u) ? "p is greater than u" : "u is greater than p";
console.log(result); // output the result of the ternary operator

let result1 = (p < u) ? "p is less than u" : "u is less than p";
console.log(result1); // output the result of the ternary operator