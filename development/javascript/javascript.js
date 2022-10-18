// If a name, is a coaches name, log "It's a coach"
const name = "Andy";
if (name == "Andy") {
    console.log("It's a coach")
}

//If a greeting, is bonjour, log "comment ca va"
const greeting = "bonjour";
if (greeting == "bonjour") {
    console.log("Comment ca va")
}

//If a score, reaches ten, log "you won the game"
const score = 10;
if (score == 10) {
    console.log("You won the game")
}

//If age, is greater than 65, "Time to retire"
let age = 50;
if (age >= 65)
 {
    console.log("Time to retire")
 } else {
    console.log("Keep working")
 }

//If has Covid, log "time to isolate", else "Keep social distancing"
const hasCovid = false;
const isShielding = true;
if (hasCovid || isShielding) {
    console.log("Time to isolate")
} else{
    console.log("Keep social distancing")
}

//If age greater than 18, and is British, "You can vote in the next election"
const isBritish = true;
age = 18
if (age > 17 && isBritish) {
    console.log("Have you registered to vote?")
}