//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function isPalindrome() {
 const str = this;
   let strL = str.toLowerCase().split(' ').join('');
   let rev = strL.split('').reverse().join('');
    if (rev === strL) {
      return true;
    } else {
      return false;
    }
  }
  
     




function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    for (let i = 0; i < marks[i]; i++)
      sum += marks[i];
      let average = sum/marks.length;
      let averageMark = Math.round(average);
        if (marks.length === 0) {
              return 0;
            } else {
              return averageMark;
       }
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}