/*
-For in loops are great for iterating over values in an object.
Properties in objects are what's called enumerable

-For in loops iterate over an object's enumberable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {
    // console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

for (cat in catArray) {
    console.log(cat)
    console.log(catArray[cat]);
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let myName = "jAlEn";
let capName;

for (let i in myName){
    if(i == 0){
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}

console.log(capName)