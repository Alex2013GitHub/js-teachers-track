/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const findSmallesNumber = function (numbers) {
let smallNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallNumber) {
      smallNumber = number;
    }
  }
  return smallNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 2, 84, 15, 4])); // 4
