// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  
  // Prints
  // TOM - 20
  // ABDUL - 19

  for( let student in studentGrades){
    if(studentGrades[student] > 18){
      console.log(`${student.toUpperCase()} - ${studentGrades[student]}`)
    }
  }

  let students = Object.entries(studentGrades).filter( arr =>  arr[1]>18).forEach( arr => console.log(`${arr[0].toUpperCase()} - ${arr[1]}`))
  
