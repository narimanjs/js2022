// const obj = {
//     name: 'Nar',
//     age: 23,
//     isMarried: false

// };
// // console.log(obj.name);
// console.log(obj['age']);


// let arr = ['plum.png', 'orange.jpeg', 6,  'apple.bmp', {}, []];
// console.log(arr[1]);

// if (1 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if(num < 49) {
//     console.log('error!');
// } else if (num>100) {
//     console.log('too much!');
// } else{
//     console.log('ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');

// const num = "50";
// switch (num) {
//     case "49": 
//         console.log('Error');
//         break;
//     case "100":
//         console.log('Error');
//         break;
//     case "51":
//         console.log('true!');
//         break;
//     default:
//         console.log('Next time!');
//         break;
    
// }
// Логический оператор 'И' &&
// возвращает true если все true
// до первой лжи и ложь
// const hamburger = 5;
// const fries = 12;

// if(hamburger && fries) {
//     console.log('I ate all');
// }

// console.log((hamburger && fries));
// const hamburger = 3;
// const fries = 5;
// const cola = 2
// console.log(hamburger === 3 && cola && fries );

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'str');

// if(hamburger === 3 && cola === 1  && fries ) {
//     console.log('Все сыты');
// } else{
//     console.log('Мы уходим!');
// }

// Логический оператор 'ИЛИ' || 
// до первой правды
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// // console.log(hamburger === 3 && cola && fries );
// if(hamburger === 3 && cola === 2|| fries === 3 && nuggets) {
//     console.log('Все сыты');
// } else{
//     console.log('Мы уходим!');
// }
// console.log(hamburger === 3 && cola === 2|| fries === 3 && nuggets); 

// let ivaReport, alexRepo, mariaRepo = 'done';
// console.log(ivaReport || alexRepo || mariaRepo);

// ЦИКЛЫ
// let num = 50;

// while(num < 55) {
//     console.log(num);
//     num ++;
// }

// do {
//     console.log(num);
//     num ++;
// }
// while (num < 55);
// let num = 50;

// for (let i = 1; i < 10; i++ ) {
//     if(i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let res = '';
// const length = 7;

// for(let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++) {
//         res += '$'
//     }

//     res += '\n'
// }
// console.log(res);

// first: for (let i = 0; i < 3; i++){
//         console.log(`first level: ${i}`);
//         for(let j = 0; j < 3; j++){
//             console.log(`second level: ${j}`);
//             for(let k = 0; k < 5; k++){
//                 if(k == 3) break first;
//                 console.log(`third level: ${k}`);
                
//             }
//         }
//     }

//  FUNCTIONS
// let num = 18;

// function showFirstMessage(text) {
//     console.log(text);
// //    let num = 10;
//    console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);
// function calc (a, b) {
//     return (a + b)
// }
// console.log(calc(4, 6));
// console.log(calc(5, 5));
// console.log(calc(7, 3));

// function ret(){
//     let num = 50;
//     return num
// }
// const anotherNum = ret();
// console.log(anotherNum);
// Function Expression
// const logger = function() {
//     console.log('Hello!');
// }
// logger();
// () => Стрелочная функция!!
// const calC = (a, b) => {
//     console.log('Стрелочная функция!');
//     return a + b};
// console.log(calC(13, 6));