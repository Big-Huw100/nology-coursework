const fruitObjectArray = [
    { fruit: "apple" },
    { fruit: "banana" },
    { fruit: "orange" }
];

// log banana to the console
console.log(fruitObjectArray[1].fruit);

// log orange to the console
console.log(fruitObjectArray[2].fruit);

// Iterate over our array -> make and array of values

const fruitValueArray = fruitObjectArray.map(fruitObject => {
    const fruitValue = fruitObject.fruit;
    return fruitValue;
});

console.log(fruitValueArray);

const searchTerm = "a";

const matchingFruitArray = fruitObjectArray.filter((fruitObject => {
    const fruitMatch = fruitObject.fruit.includes(searchTerm);
    return fruitMatch;
}));

console.log(matchingFruitArray)


// Create a function that takes an array of fruit
// map over the array and generate some <li>FRUITNAME</li>7
// take that array and turn it into a string
// Return a string

const generateFruitHTML = (fruitArray) => {
    const html = fruitArray.map(fruitObject => {
        return `<li>${fruitObject.fruit}</li>`
    });

    return html.join("");
};

console.log(generateFruitHTML(fruitObjectArray));

