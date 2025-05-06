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



const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

const objFinal = { ...target, ...source };
console.log(objFinal);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


// *.......................object comstuctors

function Mobile(name, brand, price, color, storage, camera, battery, screenSize, releaseDate) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.storage = storage;
    this.camera = camera;
    this.battery = battery;
    this.screenSize = screenSize;
    this.releaseDate = releaseDate;
}

const mobile1 = new Mobile("iPhone 14", "Apple", 99999, "black", "128GB", "12MP", "3279mAh", "6.1 inches", "2022-09-16");
const mobile2 = new Mobile("Galaxy S21", "Samsung", 79999, "white", "256GB", "64MP", "4000mAh", "6.2 inches", "2021-01-14");

console.log(mobile1); // Output: iPhone 14
console.log(mobile2); // Output: Galaxy S21