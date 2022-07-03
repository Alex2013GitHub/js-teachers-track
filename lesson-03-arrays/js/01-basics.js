/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// console.log(friends[2]);

// friends[1] = 'djjfkd';
// friends[3] = 1233;

// const lastIndex = friends.length - 1;
// console.log(lastIndex);
// console.table(friends);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a===b);
// console.log([1, 2, 3] === [1, 2, 3]);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i ++) {
//   friends[i] += "-1";
// }

// console.table(friends);

for (let friend of friends) {

  console.log(friend)
}
console.table(friends);


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// console.table(friends);
