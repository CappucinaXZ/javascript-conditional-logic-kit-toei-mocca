function calculateStudentGrade(score) {
  // Start coding here
  if(score>=90 && score<=100){
    return "grade is A"
  }else if(score>=80 && score<90){
    return "grade is B"
  }else if(score>=70 && score<80){
    return "grade is C"
  }else if(score>=60 && score<70){
    return "grade is D"
  }else if(score<60){
    return "grade is F"
  }else{
    return "grade is F"
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
