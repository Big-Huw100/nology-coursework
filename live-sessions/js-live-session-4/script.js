// .forEach is a replacement for a for loop when dealing with arrays

const namesArr = ["Ash", "Helen", "Imran", "Wes", "Mel"]

namesArr.forEach((name) => {
    console.log(name)
});

const numbers = [500, 50, 63, 2.5]

numbers.forEach((number) => {
    console.log(number)
});

// .map goes over the whole array, applies soemthing to the array, then returns it. You must use return for this!
const mapNumbers = numbers.map((number) => {
    return number + 100
});

console.log(mapNumbers);

// filter same as map but filters stuff out of the array if it doesn't meet a condition

const filterNumbers = numbers.filter((number) => {
    return number != 50
});

console.log(filterNumbers);

const newNamesArr = namesArr.filter((name) => {
    return name.includes("a")
});

console.log(newNamesArr);

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0
});

console.log(evenNumbers);

// Challenges

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];
const colours = ["red", "yellow", "pink", "green", "orange", "purple", "blue"]

// .forEach

// 1. log each age to the console

ages.forEach((age) => {
    console.log(age)
});

// 2. log "I am (age) years old" for each index

ages.forEach((age) => {
    console.log(`I am ${age} years old`);
});

// 3. double each age and return a string with that age

ages.forEach((age) => {
    console.log(`${age} x 2 is ${age * 2}`);
});

// .map

// 1. Double each age and return to the console

const doubleArray = ages.map((age) => {
    return age * 2;
});

console.log(doubleArray);

// 2. Put the square root of each number in a new array

const squareRoot = ages.map((age) => {
    return Math.sqrt(age);
});

console.log(squareRoot);

// .filter

// create an arry of ages that are all over 18

const over18 = ages.filter((age) => {
    return age > 18;
});

console.log(over18);

// filter out all the colours that have less than 5 letters

const lessThan5 = colours.filter((colour) => {
    return colour.length < 5;
});

console.log(lessThan5)

// create an array with all the even numbers

const evenAges = ages.filter((age) => {
    return age % 2 === 0;
});

console.log(evenAges);

// create an array with all the odd numbers

const oddAges = ages.filter((age) => {
    return age % 2 != 0;
});

console.log(oddAges);
