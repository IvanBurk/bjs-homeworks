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
     
      let value1 = {
        algebra : getAverageMark(data.algebra),
        geometry : getAverageMark(data.geometry),
        russian : getAverageMark(data.russian),
        physics : getAverageMark(data.physics),
        music : getAverageMark(data.music),
        english : getAverageMark(data.english),
        poetry : getAverageMark(data.poetry),
        chemistry : getAverageMark(data.chemistry),
        french : getAverageMark(data.french)
      }
      let average = getAverageMark(Object.values(value1));
  
      value1['average'] = average;
      for (let i in value1) {
        let value2 = value1[i];
        console.log (`${i} : ${value2}`)
      }
    } else {
      return ">10";  
    }
  };
   
function getAverageMark(marks) {  
    let sum = 0;
    for (let i = 0; i <= marks[i]; i++)
    sum += marks[i];
    let average = sum/marks.length;
    if (marks.length === 0) {
      return 0;
       } else {
    return average;
       }
   };

 