// !......keyn : value

// *.........object inheritance
const a= Symbol("Key1"); // *Symbol is a primitive data type in JavaScript
const mobile = {
    name: "iPhone 14",
    brand: "Apple",
    price: 99999,
    color: "black",
    storage: "128GB",
    camera: "12MP",
    battery: "3279mAh",
    screenSize: "6.1 inches",
    releaseDate: "2022-09-16",
    [a]: "Symbol value.....", // *Using Symbol as a key
    "5G": true, // *Key with a number as a string
};
mobile.name = "iPhone 14 Pro Max"; // *Updating the value of a property
mobile["color"] = "blue"; // *Updating the value of a property using bracket notation
console.log(mobile.color); // *Output the entire object
console.log(mobile.name); // Output: iPhone 14
console.log(mobile["brand"]); // Output: Apple
console.log(mobile[`price`]); // Output: 99999
console.log(mobile["5G"]); // Output: true
console.log(mobile[a]); // Output: Symbol value


// *.......................object comstuctors