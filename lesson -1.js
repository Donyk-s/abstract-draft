
// Робота з if else та перевірка на парність числа
// const userNumber = prompt("Enter user number")
// if (userNumber % 2 === 0) {
//     console.log("Парне число")
// } else {
//     console.log("Не парне число")
// }
// const userNumber = prompt("Enter user number")
// if (userNumber === 10) {
//     console.log("ok")
// } else if(userNumber === 100){
//     console.log("Не парне число")
// } else {
//     console.log("GooD")
// }
// // swich (userNumber)
// switch (userNumber) {
//     case 10:
//         console.log("ok")
//         break;
//     case 100:
//         console.log("Не парне число")
//         break;

//     default:
//         console.log("GooD")
//         break;
// }\
// Порівняння if та swich по своїй сіту одне й те саме застосовуємо те що нам зручніше
// const userNumber = prompt("Enter user number")
// if (userNumber < 10) {
//     console.log("ok")
// } else if(userNumber > 100 && userNumber < 1000){
//     console.log("Good")
// } else {
//     console.log("Bad")
// }
// // swich (userNumber)
// switch (true) {
//     case userNumber < 10:
//         console.log("ok")
//         break;
//     case userNumber > 100 && userNumber < 1000:
//         console.log("Не парне число")
//         break;

//     default:
//         console.log("GooD")
//         break;
// }
// Вивести в консоль всі числа які кратні 2 від 0 до 10
// for (let i = 1; i <= 10; i += 1 ){
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i)
// }
// for (let i = 1; i <= 10; i += 1) {
// switch (i) {
//     case 5:
//         break;
//     default:
//         break;
//     }
//     console.log(i)
// }
// Задача 1
// Напиши скрипт для відображення годин який та хвилин в консолі браузера у вигляді строки
//  у форматі '"14 год. 26 хв."'. Якщо значення перемінної 'minutes' дорівнює '0', то
// вивести строку '"14 год."' без хвилин.

//``` javascript````
//  14;
// const minutes = 26;
// let timeString;
// if (minutes === 0) {
//     timeString = `${hours}`
// } else {
//    timeString = `${ hours } год:${ minutes } хв`;
// }
// Конвертор хвилин в години
// const minutes = 454; //1hour:14min
// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours}:${minutesValue}`);
// console.log(`${ hours }год:${ minutesValue } хв`)
// Задаяа 2
// Напиши цикл for який виведе в консоль браузера за зростанням всі числа від `min` до `max`,
// тільки якщо кратні 5
const min = 20;
const max = 100;
// Metod 1 Цей метод більш універсальний та спрацьовує завжди
// for (let i = min; i <= max; i += 1) {
// if (i % 5 === 0) {
//     console.log(i)
// }
// }
// Metod 2 Цей метод заточений конкретно під цю умову і якщо початкове значення буде не 20 а 21 код не спрацює,
// але так запис коротший і конкретно під ці значення все добре.
// for (let i = min; i <= max; i += 5) {
//     console.log(i)
//  }
// Цикл While-спочатку перевіряє умову а потім виконується
let i = min;
// while (i <= max) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
//     i += 1;
// };
// Цикл doWhile - спочатку робить а потім перевіряє умову. Як мінімум 1 раз виконаеться цикл при запусканні коду.

// do {
// if (i % 5 === 0) {
//         console.log(i)
//     }
//     i += 1;
//     console.log(i)
// } while (i <= max);
//  в разі правельного введення значення в поле prompt цикл приптнить свою роботу і модальне вікно прибереться.
const password = "admin";
let userPassword 
do {
    userPassword = prompt("Enter password")
    console.log(userPassword)
} while (userPassword !== password);