/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (a + b + c) => {
//     return a + b + c;
// };

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));


// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// // const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// // const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);




// ------------

// const fnA = function(parameter){
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction  = function (){
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB()

// console.log(fnB);

const makeDish = function ( sheffName, dish){
    console.log(`${sheffName} готовить ${dish}`);
};

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const makeDish = function (dish){
        console.log(`${name} готовит ${dish}`)
    };
    return makeDish
};

const mango = makeSheff('Mango');

// mango('пирожок');
// mango('пирожок');

// const poly = makeSheff('Poly');
// poly('чай');
// poly('омлет');

// console.dir(mango);

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const number1 = 3.235445;
// const number2 = 4.452445;

// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));

// const rounder =function (number, places){
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.56655, 2));
// console.log(rounder(3.56655, 2));
// console.log(rounder(3.56655, 3));
// console.log(rounder(3.56655, 2));
// console.log(rounder(3.56655, 3));

// const rounder = function(places){
//     return function (number){
//         return Number(number.toFixed(places))
//     }

// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.56655, 2));
// console.log(rounder3(3.56655, 2));
// console.log(rounder2(3.56655, 3));
// console.log(rounder3(3.56655, 2));
// console.log(rounder2(3.56655, 3));

// const salaryManagerFactory = function ( employeeName, baseSalary){
//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     };

//     return {
//         raise (amount){
//             changeBy(amount);
//         },
//         lower(amount) {
//             changeBy(amount);
//         },
//         current () {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };


// const salaryManager = salaryManagerFactory('mango', 5000);
// console.log(salaryManager.current());

