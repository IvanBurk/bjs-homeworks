function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
    let d = b**2 - 4*a*c;
    let x = [];
    if (d < 0) {
      x;
    } else if (d === 0) {
        x[0] = (-b)/2*a;
    }
 else {
    x[0] = ((-b) + Math.sqrt(b*b - 4*a*c))/2*a;
    x[1] = ((-b) - Math.sqrt(b*b - 4*a*c))/2*a;
}
return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
   let quantity = marks.length;
    if (quantity === 0) {
        return quantity;
    } else if (quantity > 5) {
        
        let sum = 0;
        for (let i = 0; i < 5; i++)
        sum += marks[i];
        let middle = sum/5;
        return middle;
    } else {
        let sum = 0;
        for (let i = 0; i < marks.length; i++)
        sum += marks[i];
        let middle = sum/marks.length;
        return middle;
    }
    
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;            
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
    // return result;
}