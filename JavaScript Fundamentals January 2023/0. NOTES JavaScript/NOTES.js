

АРГУМЕНТИ
input // Аргументи от масива
Boolean // Булев израз, може да е само True или False 

ЦИКЛИ
// For
// While

// continue // - продължава към следващата итерация на цикъла
// break // - прекъсва цикъла цикъла
// flag = true // - за вложени цикли, ако искаме да спрем всички цикли - flag = true


"ОБРАБОТКА ЧИСЛА"
toFixed(2) // форматира числото до показния в скобите знак след запетаята (555.43234.toFixed(2)) = 555.43
parseInt // преобразува всяко число в цяло число ( подобно на Math.trunc )

"ОБРАБОТКА ТЕКСТ"
CTRL + SHIFT + P === ASCII
"\n"// печата на нов ред!!!
parseInt // преобразува всяко число в цяло число ( подобно на Math.trunc )
chartAt(1) // връща символа, който стои на 1ви индекс //  name.charAt(0)
chartAt(index / i) // връща символа, който стои на съответния индекс.  name[i]

let name = "Ivaylo"
let firstLetter = name.chartAt(0) // взима символа на нулев индекс от "name"
let secondLetter = name[1] // взима символа на 1ви индекс от "name"

let number = 5
let numberToString = number.toString() // преобразува всичко в стринг

let text = "SoftUni"
text.length // връща колко знака има в дадения стринг

МАТЕМАТИЧЕСКИ 
Math.abs( 4 - 5 ) // Винаги връща положителна стойност = 1
Math.ceil( 3.3 ) // Винаги закръгля на горе = 4
Math.floor( 3.3 ) // Винаги закръгля на долу = 3
Math.trunc ( 44.344 ) // Премахва всичко след точката
Math.pow (r, 2) // Степенуване = r на квадрат 
Math.sqrt(5) // Корен квадратен от 5
Number.MIN_SAFE_INTEGER // Минимално число в JavaScript
Number.MAX_SAFE_INTEGER // Максимално число в JavaScript

"%" // модулно деление, получаваме остатък
// За да получим число завършващо на 5 трябва да:
num % 10 === 5 
// За получаване на четно число трябва да:
num % 2 === 0

ОПЕРАТОРИ
// && - логическо "И"
// || - логическо "ИЛИ"
// ! - отрицание, различие, "false" негация // if(!food) - дали е различно от food
// != - различно по стойност
// !== - различно по стойност и тип
// == - еднакво по стойност
// === - еднакво по стойност и тип

// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y


function triplesOfLatinLetters(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                /*  let char1 = String.fromCharCode(97 + i)
                 let char2 = String.fromCharCode(97 + j)
                 let char3 = String.fromCharCode(97 + k) */
                let char4 = String.fromCharCode('a'.charCodeAt(0) + i)
                let char5 = String.fromCharCode('a'.charCodeAt(0) + j)
                let char6 = String.fromCharCode('a'.charCodeAt(0) + k)
                console.log(`${char4}${char5}${char6}`)
            }
        }
    }

}