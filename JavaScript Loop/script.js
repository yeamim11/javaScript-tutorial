let car = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];

for (let i = 0; i < 5; i++) {
    console.log(car[i]);
}   
// !====================================

let car2 = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Ford', 'Chevrolet',];
car2.push('Nissan');// *update the array
car2.push('Hyundai');// *update the array

for (let i = 0; i < car2.length; i++) {
    console.log(car2[i]);
}   

// !====================== for in loop =========

let a = {
    name: 'John',
    age: 30,
    city: 'New York'    
}

for (let i in a){
    // let capLetter = i.charAt(0).toUpperCase() + i.slice(1);     // *capitalize the first letter of the key
    // console.log(capLetter + ': ' + a[i]);    // *capitalize the first letter of the key
    console.log(i + ': ' + a[i]);
}

// !====================== for Each loop =========
let car3 = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
car3.forEach(function(car, index){
    console.log(index + ': ' + car);
});

// !====================== for of loop =========
let car4 = ['Ford', 'Chevrolet', 'Nissan', 'Hyundai'];
for (let car of car4){
    console.log(car);
}

// !====================== while loop =========
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}