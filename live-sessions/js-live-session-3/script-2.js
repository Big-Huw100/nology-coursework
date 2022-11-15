// 1. Create an array of students

const students = ["Imran", "Sasha", "James", "Helen", "Amie", "Tamzin", "Josie"];

// EXT How can we remove the last student? - Make the function up here
const insertStudents = () => {
    for (let i =0; i < students.length; ++i) {
        // 2.1 Put each student into the <ul> list inside of our html
        listElem.innerHTML += `<li>${students[i]}</li>`;
    };
};

// 2. Loop over each student
const listElem = document.querySelector("#student-list");
insertStudents();

// How could you do this using a .map()?

// EXT How can we remove the last student?

const button = document.querySelector("#remove-btn");
button.addEventListener("click", () => {
    students.pop();
    insertStudents()
});

// EXT How can we add more students?