// Named Function

// Make the function.
function myFunction(name, favMusic) {
    console.log(`Hello ${name}, your favourite music is ${favMusic}`)
};

// Run (or evoke or call) the function.
// The order of the arguments need to be in the same order as the parameters in the function above.
myFunction("Helen", "Rock");
myFunction("Wesley", "Country");
myFunction("Dovi", "Drum & Bass");

// Declare a function in a variable, this will prevent bugs because of hoisting.
const mySecondFunction = function() {
    console.log("Hello Nology")
};

mySecondFunction();

// Arrow Function
// Arrow Functions are the new and better way of doing the above.

// "=>" means function.
const fullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`)
};

fullName("Huw", "Williams");

// How to apply the same function to different things.
// This is how I would work out how many days are in X years.
const calculateDaysInYears = (amountOfYears) => {
    return amountOfYears * 365
};

// Here is where I say "How many days are in X years".
console.log(calculateDaysInYears(1));
console.log(calculateDaysInYears(10));

// Challenges

// Write a function to find the perimeter of a rectangle.

const calculatePerimeterRectangle = (width, height) => {
    return (height + width) * 2
};

console.log(calculatePerimeterRectangle(40, 25));

// Write a function to find the area of a circle. When given a radius, print the area to the console.

const areaOfACircle = (radius) => {
    // ** 2 is how to square a number
    // parseInt cuts off the decimal point and numbers there after
    // parseInt also turns number strings into numbers
    // Math.round rounds numbers
    return parseInt(Math.PI * (radius ** 2))
};

console.log(areaOfACircle(20));

// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X living in Y, and marries to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// Made an if statement to make the function return the plural of kid if the number of children was more than 1.
const getDescription = (numberOfChildren, partnerName, location, job) => {
    if (numberOfChildren > 1) {
        return `I am currently a ${job} living in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
} else {
    return `I am currently a ${job} living in ${location}, and married to ${partnerName} with ${numberOfChildren} kid.`;
}
};

console.log(getDescription(5, "Lucy", "Cardiff", "Plumber"));
console.log(getDescription(3, "Brian", "Bristol", "Taxi Driver"));
console.log(getDescription(1, "Susan", "Glasgow", "Teacher"));

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the screen like so: "You will need X to last you until the ripe old age of Y"
// call that function three times, passing in different values each time.
// Bonus: accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 85;
    const maxAmount = (maxAge - currentAge) * 365 * Math.round(amountPerDay);
    return `You will need ${maxAmount} Snickers to last you until the ripe old age of ${maxAge}`
};

console.log(calculateSupply(9, 3));
console.log(calculateSupply(31, 1));
console.log(calculateSupply(50, 5.5));

// Create a celcius to farenheit converter

const calculateFarenheitFromCelcius = (celcius) => {
    const farenheit = (celcius * 9/5) + 32;
    return `${celcius}°C is ${farenheit}°F`;
};

console.log(calculateFarenheitFromCelcius(1));
console.log(calculateFarenheitFromCelcius(20));
console.log(calculateFarenheitFromCelcius(12));
