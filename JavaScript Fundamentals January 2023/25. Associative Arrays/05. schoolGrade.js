function schoolGrade(array) {
    let schoolRegister = {
    }

    for (let names of array) {;
        let commands = names.split(" ")
        let name = commands.splice(0, 1).join(" ");
        let grades = commands.map(Number);
        if (!schoolRegister.hasOwnProperty(name)){
            schoolRegister[name] = grades;
        } else {
           let scores = schoolRegister[name]
            grades.map(element => {
                scores.push(element)
            })
        }

    }
    let finalResultObj = {};
    for (let students of Object.entries(schoolRegister)){
        debugger
       let studentName = students[0];
       let scores = students[1];
       let totalScore = scores.length;
       scores = scores.reduce((a,b) => a+b,0);
        let averageScore = (scores / totalScore).toFixed(2);
          finalResultObj[studentName] = averageScore
    }
    let sorted = Object.entries(finalResultObj).sort((name, name2) => name[0].localeCompare(name2[0]))
    
    sorted.forEach(el =>{
        console.log(`${el[0]}: ${el[1]}`)
    })    

}
schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])

// function schoolGrades(input) {
//     let studentsObj = {};
//     for (let line of input) {
//       let currLine = line.split(" ");
//       let name = currLine.shift();
//       let grades = currLine.map((x) => Number(x));
   
//       if (!studentsObj[name]) {
//         studentsObj[name] = [];
//       }
//       studentsObj[name] = studentsObj[name].concat(grades);
//     }
   
//     let sorted = Object.entries(studentsObj).sort((a, b) =>
//       a[0].localeCompare(b[0])
//     );
   
//     for (const [name, grade] of sorted) {
//       let sum = 0;
//       for (const line of grade) {
//         sum += line;
//       }
   
//       console.log(`${name}: ${(sum / grade.length).toFixed(2)}`);
//     }
//   }
//   schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

//   function schoolGrades(arr) {
//     let schoolGrades = {};
//     for (const line of arr) {
//         let [student, ...grades] = line.split(" ");
//         if (schoolGrades.hasOwnProperty(student)) {
//             schoolGrades[student] = schoolGrades[student].concat(grades);
//         } else {
//             schoolGrades[student] = grades
//         }
//     }
//     let sorted = Object.entries(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));
//     for (const [student, grades] of sorted) {
//         let sumG = grades.map(Number).reduce((sum, num) => sum + num, 0);
//         console.log(`${student}: ${(sumG / grades.length).toFixed(2)}`);
//     }
// }
// schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);