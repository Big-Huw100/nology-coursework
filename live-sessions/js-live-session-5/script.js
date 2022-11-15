// change html
const changeHTML = document.querySelector(".innerHTML");

changeHTML.addEventListener("click", () => {
    changeHTML.innerHTML = "Hello Self Paced";
});

// add a class
const addClass = document.querySelector(".addingClass");

addClass.addEventListener("click", () => {
    addClass.classList.add("red");
});

// toggle a class feat. better layout 
const toggle = document.querySelector(".toggle");

const toggleRed = () => {
    toggle.classList.toggle("red");
};

toggle.addEventListener("click", toggleRed);

// link the toggle to a button rather than click the text
const btn = document.querySelector(".button")

btn.addEventListener("click", toggleRed);

// click button to input typed text

const text = document.querySelector(".inputText");
const input = document.querySelector(".input");

const getInputText = () => {
    text.innerHTML = input.value
};

btn.addEventListener("click", getInputText);

// Challenge: make 2 input boxes one for a firstname and another for a
// lastname input, then one button to make them appear.

const fullName = document.querySelector(".fullName");

const firstNameInput = document.querySelector(".firstNameInput");
const lastNameInput = document.querySelector(".lastNameInput");

const button = document.querySelector(".fullNameBtn");

const addFullName = () => {
    fullName.innerHTML = `${firstNameInput.value} ${lastNameInput.value}`
};

button.addEventListener("click", addFullName);
