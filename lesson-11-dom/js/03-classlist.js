const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

// const currentPageUrl = '/contact';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

const currentPageUrl = '/contact'
const linkEl = document.querySelector(`.site-nav__link[href= "${currentPageUrl}" ]`)
console.log(linkEl);

linkEl.classList.add('site-nav__link--current');

//   const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool', 'dwjjf');
// navEl.classList.remove('site-nav');


// magicBtn.addEventListener('click', ()=>{
//   navEl.classList.toggle('djshjf')
// })

// navEl.classList.replace('super-cool', 'dwjjf');

// console.log(navEl.classList.contains('site-nav'));
