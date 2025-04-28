// !...............javaScript Data type

// *...........1. String
let a = "John Doe"; // String literal
a = 'yeamim'
console.log(typeof a ); // Output: string

let b = ` my name is ${a}`; // Template literal
console.log(b); // Output: my name is John Doe


// *............2. Number
let c = 42; // Integer
console.log(typeof c); // Output: number

let d = 50
let e = c + d + b; // Addition
console.log(e); // Output: 92my name is John Doe
console.log(typeof e); // Output: string

let e2 = b + c+ d; // Concatenation
console.log(e2); // *....Output: my name is yeamim4250
console.log(typeof e2); // Output: string


let f = 3 + 4 + 5 + b
console.log(f); //*.....12my name is John Doe

let g = 3n; // BigInt
let h = 4n; // BigInt
let i = BigInt(5); // BigInt
let j = BigInt(d); // BigInt from string
console.log(g * h * i); // Output: 60n
console.log(g * h * j); 


// *...........3. Boolean
let k = true; // Boolean literal
let l = false; // Boolean literal
console.log(typeof k); // Output: boolean
console.log(typeof l); // Output: boolean

let info;
console.log(info); // Output: undefined
console.log(typeof info); // Output: undefined

let info2 = null; // Null value
console.log(info2); // Output: null
console.log(typeof info2); // Output: object (this is a known bug in JavaScript)


// *...........4. array
let fruits = ["apple", "banana", "cherry" , "mango" , "Orange" ]; // Array literal
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log( typeof fruits); 
console.log(fruits[3]); // Output: mango
console.log(fruits.length); // Output: 5
console.log(fruits[fruits.length - 1]); // Output: Orange
