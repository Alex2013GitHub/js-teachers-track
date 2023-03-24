/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf() 
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */

// const array= ['Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',]

function getExtremeElements(array) {
  // Change code below this line
  const arrayTotal = [];

  arrayTotal.puch(array[0]);
  arrayTotal.puch(array[array.length - 1])

  return arrayTotal

  // Change code above this line
}

console.log(getExtremeElements([3, 8, 12, -2, 15])); // -2
console.log(getExtremeElements([100, 54, 8, 12, 47])); // 8
console.log(getExtremeElements([7, 21, 2, 84, 15, 4])); // 4

