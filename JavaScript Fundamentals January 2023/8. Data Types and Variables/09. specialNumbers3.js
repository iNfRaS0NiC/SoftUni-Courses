function specialNumbers3(number) {


    for (let i = 1; i <= number; i++) {
        let testString = i.toString()
        let sum = 0;
        for (let j = 0; j < testString.length; j++) {
            let fuckIt = testString[j]
            fuckIt = Number(fuckIt)
            sum += fuckIt

        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}
specialNumbers3(20)