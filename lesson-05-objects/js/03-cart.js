/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
console.table(cart.getItems());





// -------
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions){
//       if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
    
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const {potions} = this;
// for (let i=0; i < potions.length; i += 1){
//   const {name} = potions[i];
// if (potionName === name) {
//   potions.splice(i, 1);
      
//     }

// }
    
// return `Potion ${potionName} is not in inventory!`;
    
// },
//   updatePotionName(oldName, newName) {
//      for (const potion of this.potions){
//        if (oldName === potion.name ){
//          potion.name = newName;
//        }
//      }

    
//       return `Potion ${oldName} is not in inventory!`;
//   }

    
//   // Change code above this line
// }