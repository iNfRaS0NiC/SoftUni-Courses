function formatGrade(gradeNum) {
    let grade = ""
    if (gradeNum < 3) {
        grade = "Fail"
        gradeNum = 2;
    } else if (gradeNum < 3.5) {
        grade = "Poor"
    } else if (gradeNum < 4.5) {
        grade = "Good"
    } else if (gradeNum < 5.5) {
        grade = "Very good"
    } else if (gradeNum >= 5.5 && gradeNum <= 6) {
        grade = "Excellent"
    }

    let gradeValue = gradeNum < 3 ? "2" : gradeNum.toFixed(2)
    console.log(`${grade} (${(gradeValue)})`)

}
formatGrade(2.99)