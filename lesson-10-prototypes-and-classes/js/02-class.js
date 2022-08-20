/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// class Car {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }

//     get price() {
//         return this._price;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }
// }

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);



// ---------

// const Car = function ({brand, model, price} = {}) {
//     // console.log(this);

//     // const {brand, model, price} = config;

//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello : ) ')
// }

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// console.log(Car.prototype);

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({brand: 'BMW',
// model: 'X6',
// price: 50000,});
// console.log(myCar2);

// myCar2.sayHi()

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 60000,
// });
// console.log(myCar3);

// const User = function ({email, passwod} = {}) {
//     this.email = email;
//     this.passwod = passwod;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User ({ email: 'mango@mail.com', passwod: 111111 });

// mango.changeEmail('my-new-mail@mail.com')
// console.log(mango);

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);

class Car1 {
    static description = 'Класс описывающий втомобиль'


    constructor ({brand, model, price} = {}) {
        console.log('Выполняется конструктор');

        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    changaPrice(newPrice) {
        this.price = newPrice;
    }

    updateModel(newModel) {
        this.model = newModel;
    }
}

console.dir(Car1);
console.log(Car1.description)

const carInstance = new Car1({
    brand: 'Audi',
    model: 'A6',
    price: 60000,
});

console.log(Object.getPrototypeOf(carInstance)===Car1.prototype);

console.log(carInstance);