let conceptionMonth = prompt("Which month did you conceive?", "Example: March");
let deliveryMonth;

function getDeliveryMonth() {
    if (conceptionMonth.toLowerCase() === "january") {
        deliveryMonth = "October";
    } else if (conceptionMonth.toLowerCase() === "february") {
        deliveryMonth = "November";
    } else if (conceptionMonth.toLowerCase() === "march") {
        deliveryMonth = "December";
    } else if (conceptionMonth.toLowerCase() === "april") {
        deliveryMonth = "January";
    } else if (conceptionMonth.toLowerCase() === "may") {
        deliveryMonth = "February";
    } else if (conceptionMonth.toLowerCase() === "june") {
        deliveryMonth = "March";
    } else if (conceptionMonth.toLowerCase() === "july") {
        deliveryMonth = "April";
    } else if (conceptionMonth.toLowerCase() === "august") {
        deliveryMonth = "May";
    } else if (conceptionMonth.toLowerCase() === "september") {
        deliveryMonth = "June";
    } else if (conceptionMonth.toLowerCase() === "october") {
        deliveryMonth = "July";
    } else if (conceptionMonth.toLowerCase() === "november") {
        deliveryMonth = "August";
    } else if (conceptionMonth.toLowerCase() === "december") {
        deliveryMonth = "September";
    } else {
        alert("Invalid month.");
        deliveryMonth = "unknown";
    }
}

getDeliveryMonth();

console.log(`Your expected delivery month is ${deliveryMonth}.`);