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
// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }
// const number = 50;
// if (number < 49) {
//     console.log('Error!');
// } else if (number > 100) {
//     console.log('too much');
// } else {
//     console.log( 'ok!!!');
// }
// const number2 = 50;
// (number2 == 50) ? console.log('ok!!!2') : console.log('ERROr');

// const number3 = '51';
// switch (number3) {
//     case '49': 
//         console.log('неверно!');
//         break;
//     case '100':
//         console.log('неверно!');
//         break;
//     case '50':
//         console.log('правильно!');
//         break;
//     default: 
//     console.log('next time');
// }
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

// console.log(calc(10, 15));
// console.log(calc(0, 15));
// console.log(calc(10, 5));
// function calc (a, b) {
//     return (a + b);
// }
// const usdCurr = 28;
// const discount = 0.8;

// function convert(amount, curr) {
//     return  curr * amount;
// }
// function promotion(result ) {
//     console.log(result * discount );
// }
// const res = convert(500, usdCurr)
// promotion(res);

// function test () {
//     for (let i = 0; i < 5; i ++) {
//         console.log(i);
//         if (i === 2) return
//     }
//     console.log('done');
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// CallBack
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();
// function learnJS(lang, callBack) {
//     console.log(`я учу: ${lang}`);
//     callBack();
// }
// function done() {
//     console.log('я прошел этот урок!');
// }
// learnJS('JS', done);

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

// objects
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2,3 ]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('hello');
//     }
// };
// const john = Object.create(soldier);

// // const john = {
// //     health: 120
// // };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);
// // console.log(john.sayHello);
// john.sayHello();

// // To String
// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(1)));
// // 2)
// console.log(typeof(null + ''));
// // 3) 
// let num = 5;
// console.log('https://ya.com/catalog' + num);

// // To Number
// // // 1)
// // console.log(typeof(Number('4')));
// // // 2)
// // console.log(typeof(+'4'));
// // // 3)
// // console.log(typeof(parseInt('4px', 10)));
// // // 
// // let anw = +prompt('Hello', '');

// // To Boolean
// // 0, " ", null, undefined, NaN;
// //1)
// let switcher = null;
// if(switcher) {
//     console.log('Working...');
// }
// switcher = 1;
// if(switcher) {
//     console.log('Working...');
// }
// // 2)
// console.log(typeof(Boolean('4')));
// // 3) !!
// console.log(typeof((!!'444')));

// 
// let number = 5; debugger
// function logNumber() {
//     console.log(number); debugger
// }
// number = 6;
// logNumber(); debugger
// number = 8;
// logNumber(); debugger
// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// 2. 42 Полусение элементов

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[0]);
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts =document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// })

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


// hearts[0].replaceWith(circles[0]);

// div.innerHTML = "<h1>hello world!</h1>";
// // div.textContent = "HI!"

// div.insertAdjacentHTML("beforeend", '<h2>h2</h2>')

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "ЛОГАН",
            "ЛИГА СПРАВЕДЛИВОСТИ",
            "ЛА-ЛА ЛЭНД",
            "ОДЕРЖИМОСТЬ",
            "СКОТТ ПИЛИГРИМ ПРОТИВ..."
        ]
    }
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        if(favorite) {
            console.log('добавляем новый фильм!!');
        }
       
        event.target.reset();

    });
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList (films, parent) {
        sortArr(films);
        parent.innerHTML = "";    
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
});

