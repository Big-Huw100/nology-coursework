// const fruitObjectArray = [
//     { fruit: "apple" },
//     { fruit: "banana" },
//     { fruit: "orange" }
// ];

// // log banana to the console
// console.log(fruitObjectArray[1].fruit);

// // log orange to the console
// console.log(fruitObjectArray[2].fruit);

// // Iterate over our array -> make and array of values

// const fruitValueArray = fruitObjectArray.map(fruitObject => {
//     const fruitValue = fruitObject.fruit;
//     return fruitValue;
// });

// console.log(fruitValueArray);

// const searchTerm = "a";

// const matchingFruitArray = fruitObjectArray.filter((fruitObject => {
//     const fruitMatch = fruitObject.fruit.includes(searchTerm);
//     return fruitMatch;
// }));

// console.log(matchingFruitArray)


// // Create a function that takes an array of fruit
// // map over the array and generate some <li>FRUITNAME</li>7
// // take that array and turn it into a string
// // Return a string

// const generateFruitHTML = (fruitArray) => {
//     const html = fruitArray.map(fruitObject => {
//         return `<li>${fruitObject.fruit}</li>`
//     });

//     return html.join("");
// };

// console.log(generateFruitHTML(fruitObjectArray));

const fruitObjectArray = [
    { fruit: "apple", rating: 8, price: 150 },
    { fruit: "banana", rating: 5, price: 100 },
    { fruit: "orange", rating: 6, price: 120 }
];

console.log(fruitObjectArray[2].price);

const generateFruitHTML = (fruitArray) => {
    const html = fruitArray.map(fruitObject => {
        // format price to currency
        const price = (fruitObject.price / 100).toFixed(2);
        // capitalise first letter or fruit names
        const capitalised = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1)

        const cardHTML = `
        <div>
            <h3>${capitalised}}</h3>
            <p>This fruit is ${fruitObject.rating} / 10 </p>
            <p>Buy now for £${price}</p>
        </div>
        `
        return cardHTML;
    });

    return html.join("");
};

const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
    return b.rating - a.rating;
});

console.log(sortedByHighestRating);

console.log(generateFruitHTML(sortedByHighestRating));