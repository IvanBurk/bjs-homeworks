function getSolutions( a, b, c ) {
    let D = b**2 - 4*a*c;
    if (D < 0) {
        return {
            D : D, roots: []
        }
    } else if (D === 0) {
        let x1 = - b / (2*a);
        return { D : D, roots: [x1] };
    } else {
        let x1 = ((-b + Math.sqrt(D))/(2*a));
        let x2 = ((-b - Math.sqrt(D))/(2*a));
        return { D : D, roots: [ x1 , x2 ] };
    };
    
};

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ =${result.roots[0]} , X₂ = ${result.roots[1]}`)
    }
    
};

  function getAverageScore(data) {
    if (Object.keys(data).length <= 10) {
      let value = {};
     let sum = 0;
     for (let prop in data) {
       value[prop] = getAverageMark(data[prop])
       sum += getAverageMark(data[prop])
     };
     if (Object.keys(value).length = 0) {
       return value.average = 0;
     } else {
       value.average = sum/Object.keys(value).length;
     }
     console.log(value)
    } else {
      return ">10";
    }
  };
   
function getAverageMark(marks) {  
    let sum = 0;
    for (let i = 0; i < marks.length; i++) { 
    sum += marks[i];
    }
    let average = sum/marks.length;
    return sum/marks.length || 0;
   };