
//2 задание
// let ul = document.querySelectorAll('ul li');
// function m(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (i <= 3) {
// 			array[i].classList.add('first');
// 		}
// 		return ul;
// 	}
// }
// console.log(m(ul))

//хотела при помощи функции первому и третьему элементу задать класс но почему то задалось только первому

//и по нормальному))))

// let li = document.querySelectorAll('ul li');
// li[0].classList.add('first','bkg');
// li[1].classList.add('second','bkg');
// li[2].classList.add('third','bkg');
// li[3].classList.add('fourth','bkg');
// li[4].classList.add('fifth','bkg');
// li[5].classList.add('sixth','bkg');
// li[6].classList.add('seventh','bkg');

// // li[0].innerHTML = 'red';  попробовала, как вариант но больше понравился след. вариант:
// let l1 = document.querySelector('.first').innerHTML = 'red';
// let l2 = document.querySelector('.second').innerHTML = 'orange';
// let l3 = document.querySelector('.third').innerHTML = 'yellow';
// let l4 = document.querySelector('.fourth').innerHTML = 'green';
// let l5 = document.querySelector('.fifth').innerHTML = 'forget color)';
// let l6 = document.querySelector('.sixth').innerHTML = 'blue';
// let l7 = document.querySelector('.seventh').innerHTML = 'purple';

// let arrayElementsLI = document.querySelectorAll('li.bkg');
// console.log(arrayElementsLI);
// arrayElementsLI.forEach(el => { el.style.backgroundColor = 'pink' });

let arr1 = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
let arr2 = ['red', 'orange', 'yellow', 'green', 'forget color', 'blue', 'purple'];
let arrEl = [];
let ul = document.querySelectorAll('ul li');
for (let i = 0; i < 7; i++) {
    arrEl[i] = (document.querySelectorAll(arr1[i]).innerHTML = arr2[i]);
}


//1 task

// let test=document.createElement('div');
// let testP = document.createElement('p');
// document.body.prepend(test);
// test.append(testP);
//пробовала создавать элементы через ДОМ потом решила их добавить в html  а то так очень долго)))

// let arr = document.querySelectorAll('div p');
// arr.forEach(el => { el.innerHTML = "paragraf" });
// let arrayOrange=document.querySelectorAll('p.bkg')
// for (let i = 0; i < arrayOrange.length; i++){
// 	arrayOrange[i].style.backgroundColor = 'orange';
// }


//task 3

// let product = document.querySelector('div.productContainer');
// let h1 = document.createElement('h1');
// let price = document.createElement('h3');
// product.append(h1);
// product.append(price);
// h1.innerHTML = 'Compucter';
// price.innerHTML = '25$';
// product.style.border = '1px solid black';
/// не могу центрировать элементы по центру)) хотела задать align-item or flex but I can't find information about this ....

// const userTest = {
// 	login: 'Vasya',
// 	password:'query',
// }

// let el;
// let contElem=document.querySelector('#container');
// for (let value in userTest) {
// 	el = document.createElement('p');
// 	el.innerHTML = value;
// 	contElem.append(el);
// }

// arrText.forEach((el,i,a) => {contElem.append(makeElement('p'))
	
// })








