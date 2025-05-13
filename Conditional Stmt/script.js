let age = 69;

if (age > 9) {
    console.log("You are an adult.");
}

else if (age >= 13 && age < 18){
    console.log("You are a teenager.");
}

else if (age >= 0 && age < 13){
    console.log("You are a child."); 
}
// *..................
else if (age > 120){
    console.log("You are not born yet.");
}
else{
    console.log("You are a minor.");
}

// !====================================================================


let category = 'car';
let carType;
switch (category) {
    case 'car':
        carType = 'Bmw';
        break;
    case 'bike':
        carType = 'Sports';
        break;
    case 'truck':
        carType = 'Pickup';
        break;
    default:
        carType = 'Unknown';
}
console.log(carType);
