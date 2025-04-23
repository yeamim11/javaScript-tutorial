console.log("Hello, World!");

document.getElementById("hade").innerHTML="javaScript is working!";

const sum = 200 + 300;
console.log(sum);
// statement....................
if (sum > 700) {
    console.log("sum is greater than 700");
}else{
    console.log("sum is less than 700");
}

// function 01.......................
function hello(name) {
    console.log(`hello ${name}` ); 
}
hello("abubolor ");

// variable...................
let firstName = "abubolor Siddik";
let number = 111111111;

firstName = "abubolor Siddik Yeamim"; // this will work because let variable can be reassigned
number = 200; // this will not work because const variable cannot be reassigned
console.log(number + 123456789); // this will work because number is a let variable and can be reassigned
console.log(firstName);

