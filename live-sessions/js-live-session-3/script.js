// Declare an array of strings

const dogs = ["Rusty", "Fido", "Freddy", "Zepher", "Milly"];

// Declare an array of numbers

const years = [1990, 1992, 2000, 1965, 2007];

// challenge: How do we access values?

console.log(dogs[2]);
// This is how to always get the last item in an array
const lastIndex = dogs.length-1;
console.log(dogs[lastIndex]);
console.log(years[1]);

// challenge: How do we change values?

dogs[1] = "Jasper";

years[3] = 1995;
console.log(years[3]);

// challenge: How do we find the index of a value?

console.log("Zepher is at index " + dogs.indexOf("Zepher"));

// challenge: how do we find if this array contains something?
console.log("Does our years have 1995: " + years.includes(1995));

// What about arrays of objects?

// An object is instead of doing this:
const name = "James";
const age = 22;

// Do this:
const james = {
    name: "James",
    age: 22
};

// How to get something from an object
console.log(james.name);

// This is an array of 3 objects
const students = [
    {
        name: "James",
        age: 22
    }, {
        name: "John",
        age: 32
    }, {
        name: "Jane",
        age: 38
    }
];

// How to access something from an array of objects
console.log(students[1].age);
console.log(students[2].name);

// What about arrays of arrays?

// ... then we'll go onto loops

// For Loop
// 1. Create a counter. This means start at index 0 in the array (i.e the start).
for (let i = 0;
    // 2. When should it keep going? This means keep going through the whole length of the array.
    i < years.length;
    // 3. What should it do in between loops? ++ means +1 so it will search the array from index 0 first, then add 1 to start at index 1.
    i++) {
        console.log(years[i]);
    };

// Challenge 1: Loop over the years, and log "The year is: X" to the console.
for (let i = 0; i < years.length; i++) {
    console.log(`The year is: ${years[i]}`);
};

// Challenge 2: If the year is greater than 2000, don't log it to the console
for (let i = 0; i < years.length; i++) {
    if (years[i] < 2000) {
        console.log(years[i]);
    }
};

// Challenge 3: Instead of logging the year, log "How many years since X"
for (let i = 0; i < years.length; i++) {
    const yearsSince = 2022 - years[i];
    console.log(`It has been ${yearsSince} years since ${years[i]}`)
};

// ... then lets build something
// See script-2.js for build