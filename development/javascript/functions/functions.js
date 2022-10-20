//**Challenge 1**

// 1. Write a function to find the perimeter of a rectangle

const calculatePerimeter = (width, height) => {
    return width + width + height + height;
}

console.log (calculatePerimeter (6,8));

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.

const calculateCircleArea = (radius) => {
    const area = Math.PI * (radius * radius);
    return area;
}

console.log (calculateCircleArea (10))

// 3. Write a function to fin the circumfrance of a circle

const calculateCircleCircumfrance = (radius) => {
    const circumfrance = (radius * 2) * Math.PI;
    return circumfrance;
}

console.log (calculateCircleCircumfrance (19))


//**Challenge 2**

// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Output your statement to the console like so "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values fo the argument

const getDescription = (name, partner, amountOfChildren, location, jobTitle) => {
    const message = `My name is ${name} and I'm a ${jobTitle} living in ${location}, and married to ${partner} with ${amountOfChildren} kids.`
    console.log(message)
}

getDescription("Andy", "Jane", 2, "London", "Software Coach")
getDescription("Sam", "Lisa", 3, "Cardiff", "Personal Trainer")
getDescription("Clair", "James", 6, "York", "Dog Walker")

// Write a function named calculateSupply that:
// takes 2 arguments: age, amound per day.
// calculate the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the console like so: "You will need X to last you until the ripe old age of Y"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point value for amount per day, and round the result to a round number.


const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 85;
    const amountPerLifetime = (amountPerDay * 365) * (maxAge - currentAge);
    const message = `You will need ${Math.round(amountPerLifetime)} Snicker bars to last you until the ripe old age of ${maxAge}.`;
    console.log(message);
}

calculateSupply(31, 3);
calculateSupply(9, 4.2);
calculateSupply(50, 1);


// **Temperature Converter**
// Make a Celsius to Fahrenheit converter

const calculateTemperature = (celsius) => {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    const message = `${celsius}°C is ${fahrenheit}°F`
    console.log(message);
}

calculateTemperature(15);
calculateTemperature(25);
calculateTemperature(40);

// **Puppy Age Calculator**
// How old is your dog in human years

const calculateDogAge = (dogAge) => {
    const humanAge = dogAge * 7;
    const message = `Your ${dogAge} year old dog is ${humanAge} in human years!`;
    console.log(message);
}

calculateDogAge(10);
calculateDogAge(3);
calculateDogAge(6);

