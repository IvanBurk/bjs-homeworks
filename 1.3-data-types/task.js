"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let boDy = amount - contribution;
    let month = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let p = percent/100;
    let payment = new Number(boDy*(p + p/(((1 + p)**month) - 1)));
    return payment.toFixed(2);
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let nameP = new String(name);
    if (nameP === "Аноним") {
        return `Привет, мир! Меня зовут Аноним`;
    } else {
        return `Привет, мир! Меня зовут ${nameP}`;
    }
    // return greeting;
}