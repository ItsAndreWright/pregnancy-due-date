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
        case "may":
            conceptionMonthNumber = 5;
            break;
        case "june":
            conceptionMonthNumber = 6;
            break;
        case "july":
            conceptionMonthNumber = 7;
            break;
        case "august":
            conceptionMonthNumber = 8;
            break;
        case "september":
            conceptionMonthNumber = 9;
            break;
        case "october":
            conceptionMonthNumber = 10;
            break;
        case "november":
            conceptionMonthNumber = 11;
            break;
        case "december":
            conceptionMonthNumber = 12;
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
        case 11:
            deliveryMonth = "November";
            break;
        case 12:
            deliveryMonth = "December";
            break;
        case 13:
            deliveryMonth = "January";
            break;
        case 14:
            deliveryMonth = "February";
            break;
        case 15:
            deliveryMonth = "March";
            break;
        case 16:
            deliveryMonth = "April";
            break;
        case 17:
            deliveryMonth = "May";
            break;
        case 18:
            deliveryMonth = "June";
            break;
        case 19:
            deliveryMonth = "July";
            break;
        case 20:
            deliveryMonth = "August";
            break;
        case 21:
            deliveryMonth = "September";
            break;
        default:
            break;
    }
}

getConceptionMonthNumber();
getDeliveryMonth();

console.log(`Your expected delivery month is ${deliveryMonth}.`);