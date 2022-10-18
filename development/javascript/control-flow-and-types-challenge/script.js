const myNumber = 3;
if (myNumber >= 0) {
    console.log("It's a positive number")
} else {
    console.log("It's a negative number")
}


switch(new Date().getDay()) {
    case 0:
        console.log("It's already the weekend")
        break;
    case 1:
        console.log("4 days left...")
        break;
    case 2:
        console.log("3 days left...")
        break;
    case 3:
        console.log("2 days left...")
        break;
    case 4:
        console.log("1 days left...")
        break;
    case 5:
        console.log("0 days left...")
        break;
    case 6:
        console.log("4 days left...")
        break;
}


function handlePrice(event) {

    let vegetable = event.target.value;

    if (!vegetable) {
        return;
    }

    vegetable = vegetable.toLowerCase();

    let price;
    switch (vegetable) {
        case "potato":
        case "carrot":
            price = "£1.29 per kg"
            break;
        case "brocolli":
            price = "£1.50 per kg"
            break;
        case "cabbage":
            price = "£1.75 per kg"
            break;
    }

    alert("The " + vegetable + " costs " + price)
}