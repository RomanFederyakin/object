'use strict';

function openNavbar() {
  var navbar = document.getElementById("navbar");

  if (navbar.classList) {
    navbar.classList.remove("collapsed");
  }
}

function closeNavbar() {
  var navbar = document.getElementById("navbar");

  if (navbar.classList) {
    navbar.classList.add("collapsed");
  }
} // JavaScript для добавления класса "show" к секции при прокрутке до нее


function handleScroll() {
  var sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    if (isElementInViewport(section)) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll); // Функция для проверки, находится ли элемент в видимой области окна

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var parentRect = element.parentNode.getBoundingClientRect(); // Получить размеры родительского элемента

  return rect.top >= parentRect.top && rect.left >= parentRect.left && rect.bottom <= parentRect.bottom && rect.right <= parentRect.right;
} // Функция которая считает все четные числа
// function sumOfEvenNumbers(n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2){
//         sum +=  i;
//     }
//     return sum;
// }
// const number = 32;
// const result= sumOfEvenNumbers(number);
// console.log(result);
// Функция которая пишет содержимое задом наперед
// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// const originalString = 'Mark Federiakin';
// const reversedString = reverseString(originalString);
// console.log(reversedString);
// *****Пробник от Петриченко
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();
// let num = 10;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// for (let i = 0; i < 8; i++) {
//     console.log(i);
// }
// switch (num) {
//     case '49':
//         console.log('неверно');
//         break;
//     case '100':
//         console.log('неверно');
//         break;
//     case '50':
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }
// окно с отрезанным колличеством букв
// alert(prompt('Сколько букв максимум:').slice(0, 140))
// // имя
// let name = prompt('Как ваше имя?', '')
//     // отрезали 1 букву имени
// let firstChar = name.slice(0, 1)
//     // поставили первую букву в верхний регистр
// let upperCaseFirstChar = firstChar.toUpperCase()
//     // срезали остальное
// let restOfName = name.slice(1, name.lenght)
//     // всё что срезали в нижний регистр
// restOfName = restOfName.toLowerCase()
//     // конкотинация первой буквы и остального
// let capitalisedName = upperCaseFirstChar + restOfName
//     // предупреждение 
// alert('Привет' + ' ' + capitalisedName)
// let dogAge = prompt('Сколько лет вашей собаке?', '')
// let humanAge = ((dogAge - 2) * 4) + 21
// alert('Вашей собаке ' + humanAge + ' ' + 'лет по человеческим меркам')
// function lifeInWeeks(age) {
//     let yearRemaning = 90 - age
//     let day = yearRemaning * 365
//     let weeks = yearRemaning * 52
//     let month = yearRemaning * 12
//     console.log("You have " + day + " days, " + weeks + " weeks, and " + month + " months left. ")
// }
// lifeInWeeks(51)
// function bmiCalculator(startinf) {
//     var bmi = bmiCalculator(65, 1.8)
// }
// function getMilk(money, costPerBottles) {
//     console.log('Buy ' + calcBottles(money, costPerBottles) + ' bottles milk')
//     return calcChange(money, costPerBottles)
// }
// function calcBottles(startinMoney, costPerBottles) {
//     let numberOfBottles = Math.floor(startinMoney / costPerBottles)
//     return numberOfBottles
// }
// function calcChange(startingAmount, costPerBottles) {
//     let change = startingAmount % costPerBottles
//     return change
// }
// console.log('Hello master, here is your ' + getMilk(5, 1.5) + ' change.')
// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }
// let num = 50;
// // // while (num <= 55) {
// // //     console.log(num);
// // //     num++;
// // // }
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }
// ///////////////////////////////////Про фильмы??????