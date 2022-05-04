let conceptionMonth = prompt("Which month did you conceive?", "Example: March");
let conceptionMonthNumber;
let deliveryMonth;
let deliveryMonthNumber;

function getConceptionMonthNumber() {
    switch (conceptionMonth.toLocaleLowerCase()) {
        case "january":
            conceptionMonthNumber = 1;
            break;
        case "february":
            conceptionMonthNumber = 2;
            break;
        case "march":
            conceptionMonthNumber = 3;
            break;
        case "april":
            conceptionMonthNumber = 4;
            break;
        default:
            alert("Invalid month.");
            break;
    }
}

function getDeliveryMonth() {
    deliveryMonthNumber = conceptionMonthNumber + 9;
    switch (deliveryMonthNumber) {
        case 10:
            deliveryMonth = "October";
            break;
        default:
            break;
    }
}

getConceptionMonthNumber();
getDeliveryMonth();

console.log(`Your expected delivery month is ${deliveryMonth}.`);