// !........Code-Driven Invocation
// !........Event-Driven Invocation
// !........Automatic (Self-Invoked) Invocation
// !........Method Invocation
// !........Constructor Invocation
// !........Indirect Invocation
// !........Function Declaration


// *Funtion Parameters are listed inside the parentheses () in the funtion declaration.
// *Funtion Arguments are the values received by the function when it is invoked.


function myFuntion(firstname ,age, dob= "2000-01-01") {
    console.log("Hello " + firstname + " i am " + age + " date of birth is " + dob);
}
myFuntion("ali", 30 , true); // function is called
// =======================================



function isClick() {
    console.log("Button Clicked");
}
document.getElementById("btn").addEventListener("click", isClick); // function is called when button is clicked
// =======================================


(function (message) {
    console.log("Hello World! I am self invoked function", message);
})('working'); // *function is called automatically without being invoked
// =======================================



let maths = function (a, b) {   
    return a + b;
}
console.log(maths(10, 20)); // function is called
// =======================================

let number = [3, 4, 5];
let square = number.map(function (num) {
    return num * num;
})
console.log(square); // function is called
// =======================================


const add = (x, y) =>  x + y; // *Arrow function
console.log(add(50, 20)); // function is called
// =======================================

// !nasted function
function as(firstName) {
    function hello() {
        alart("Hello " + firstName);
    }
    return hello; // *function is returned   
}
as("Ali"); // *function is assigned to variable
// =======================================