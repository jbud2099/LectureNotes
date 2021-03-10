let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!")
}

let myName = "Jalen";

if (myName == "Jalen") {
    console.log("Hello, my name is", myName)
} else{
    console.log(`Hello, is your name ${myName}?`)
}

//let challenge = 'zAchARy';

/*if ([challenge.charAt(0) === challenge.charAt(0).toUpperCase) {
    console.log(challenge);
} else {
    console.log("Hey, this isn't written correctly");
}
*/

/*if (challenge[0] === challenge.toUpperCase()){
    console.log(challenge[0]);
} else {
    console.log(challenge.substr(1).toLowerCase());
}
*/

/*
let results ="";

if (challenge[0] === challenge.toUpperCase()){
    results = challenge[0] + challenge.substr(1).toLowerCase();
} else {
    results = challenge [0].toUpperCase() + challenge.substr(1);
}
*/


let age = 24;

if (age <= 17) {
    console.log("Sorry, you are too young to do anything");
} else if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else {
    console.log("You can vote!");
}

if (age > 25) {
    console.log("You can rent a car!");
} else if (age < 25 && age >= 21) {
    console.log("You can drink!");
} else if (age < 21 && age >= 18) {
    console.log("You can vote")
} else {
    console.log("Sorry, you are too young to do anything")
}

