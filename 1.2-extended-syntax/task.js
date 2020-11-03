"use strict";
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    
    let d = b**2 - 4*a*c;
    let x = [];
     if (d === 0) {
        x[0] = (-b)/2*a;
    }
 else if (d > 0){
    x[0] = ((-b) + Math.sqrt(b*b - 4*a*c))/2*a;
    x[1] = ((-b) - Math.sqrt(b*b - 4*a*c))/2*a;
}
return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return marks.length;
    } else if ((marks.length > 5) || (marks.length <= 5)) {
        let sum = 0;
        for (let i = 0; i < marks.slice(0,5).length; i++) 
        sum += marks[i];
        return sum/marks.slice(0,5).length;
    } 
    
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;            
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    // return result;
}