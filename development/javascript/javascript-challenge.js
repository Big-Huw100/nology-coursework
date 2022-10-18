function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert("Bonjour")
    } else if (greeting == "Goodbye") {
        alert("Au revoir")
    } else {
        alert("Word not recognised")
    }
}

function calculateSecondsToMinutes(event) {
    let seconds = event.target.value;
    let minutes = seconds / 60
    alert(minutes)
}

function calculateMinutesToSeconds(event) {
    let minutes = event.target.value;
    let seconds = minutes * 60
    alert(seconds)
}

function calculateMinutesToHours(event) {
    let minutes = event.target.value;
    let hours = minutes / 60
    alert(hours) 
}