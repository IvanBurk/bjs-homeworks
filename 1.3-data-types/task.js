"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (percent === Number(percent)) {
          percent === new Number(percent);
    } else {
        return `Параметр Процентная ставка содержит неправильное значение ${percent}`; 
    };

    if (contribution === Number(contribution)) {
        contribution === new Number(contribution);
  } else {
      return `Параметр Начальный взнос содержит неправильное значение ${contribution}`; 
  };
  if (amount === Number(amount)) {
    amount === new Number(amount);
} else {
  return `Параметр Общая стоимость содержит неправильное значение ${amount}`; 
};
    let boDy = new Number(amount - contribution);
    let month = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let p = new Number(percent/100/12);
    let payment = new Number((boDy*(p + p/(((1 + p)**month) - 1)))*month);
    return Number(payment.toFixed(2));
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if ((name === "Аноним") || (name === "") || (name === null) || (name === undefined) || (name === " ")) {
        return `Привет мир, меня зовут Аноним`;
    } else {
        return `Привет мир, меня зовут ${name}`;
    };
    // return greeting;
}