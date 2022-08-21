/*
 * Наследование
 *  - extends
 *  - super()
 */

// class Hero {
//     constructor ( { name = 'hero', xp = 0} = {}) {
//         this.name = name;
//         this.xp =  xp;
//     }

//     gainXp (amount){
//         console.log( `${this.name} получает ${amount}опыта`);
//         this.xp += amount;
//     }
// }

// const mango = new Hero ({name: 'mango', xp: 1000 });

// console.log(mango);

// class Warrior extends Hero {
//     constructor ({weapon, ...restProps} = {}) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack(){
//         console.log(`${this.name} атакует используя ${this.weapon}`)
//     }
// }

// class Berserk extends Warrior {
//     constructor ({ warcry, ...restProps } = {}){
//         super(restProps);

//         this.warcry = warcry;
//     }
//     babyRage(){
//         console.log(this.warcry);
//     }
// }

// const ajax = new Berserk({
//     name: 'ajax',
//     xp: 500,
//     weapon: 'axe',
//     warcry: 'waaaaah'
// });

// console.log(ajax);
// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

// class Mage extends Hero {
//     constructor ({ spells, ...restProps} = {}){
//         super(restProps);

//         this.spells = spells;
//     }
//     cast() {
//         console.log(`${this.name} что-то там кастует`);
//     }
// }

// const mango = new Warrior ({name: 'mango', xp: 1000, weapon: 'альбарда'});
// console.log(mango);

// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол']});
// console.log(poly)

// console.log('Warrior.prototype', Warrior.prototype);
// console.log('Hero.prototype', Hero.prototype);

// mango.gainXp(1000)
// mango.gainXp(1000);

// console.log(mango.__proto__===Warrior.prototype);
// console.log('Warrior.prototype', Warrior.prototype);
// console.log(Warrior.prototype.__proto__=== Hero.prototype);

