// Variables are a way of storing data that we will use later

// Storing data here
// Const can't be changed
const myName = "Huw";
const age1 = 25;
const age2 = 30;
const greeting = "Bonjour"
// Let can be changed. If you see var, it means let but it's old skool
let age = 30;
// Changing let here
age = 31;
// You can set things to a Boolean i.e. is something true or false
// = means making something something
const isBritish = false;

// Using the data here
console.log(age);

// === means checking if something is actually equal to something
if (isBritish === true) {
    console.log("Is British")
} else {
    console.log("Not British")
};

// && means and. So, this is saying "If age 1 is equal to 25 and age 2 is equal to 30"
// the or symbol is ||
// If you want to go through multiple if statements you can use else if
if (age1 === 25 && age2 === 30) {
    console.log("At least one is ture.")
} else if (age1 > age2) {
    console.log("At least one is false.")
} else if (age1 < age2) {

} else {

};

//Challenge
if(greeting === "Bonjour") {
    console.log("Hello");
} else {
    console.log("Error")
};