function luckyNumbersTest(input) {
    let N = Number(input);
    let stringResult = '';
  
    // Щастливо число е 4-цифрено число
    for (let a = 1; a <= 9; a++) {
      for (let b = 1; b <= 9; b++) {
        for (let c = 1; c <= 9; c++) {
          for (let d = 1; d <= 9; d++) {
            // if ((d <= 9) && ((a + b) === (c + d)) && (d > 0) && (a + b === N)) {
  
            // на което сбора от първите две цифри е равен на сбора от последните две. 
            // Числото N трябва да се дели без остатък от сбора на първите две цифри
            // на "щастливото" число.
            if (((a + b) === (c + d)) && (N % (a + b) === 0)) {
              // console.log(`${a}${b}${c}${d}`);
              stringResult += `${a}${b}${c}${d}` + ' ';
            }
          }
        }
      }
    }
    
    // На конзолата трябва да се отпечатат всички "щастливи" и различни 
    // 4-цифрени числа, разделени с интервал
    console.log(stringResult)
  }
luckyNumbersTest([24])