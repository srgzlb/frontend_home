(()=>{

'use strict';

//1, 3

function makeCounter() {
	function counter() {
		return counter.currentCount++;
	};
	counter.currentCount = 1;
	return counter;
}
let counter = makeCounter();

function getParagraph(bgColor){
	let heading = document.querySelectorAll('p');
	for(let i = 0; i < heading.length; i++){
		heading[i].style = "background:" + bgColor;
		heading[i].innerHTML =  counter() +'. ' + heading[i].innerHTML;
	}
};
const red = '#ff0000';
let paragraph = getParagraph(red);

//2

function getImage(shadow){
	let image = document.querySelectorAll('img');
	for(let i = 0; i < image.length; i++){
		image[i].style = "box-shadow:" + shadow;
	}
};
const blackShadow = '1px 1px 5px 2px rgba(0, 0, 0, .3)';
let shadow = getImage(blackShadow);

//4

$('.form').on('click', 'input', function () {
	let result = $('#counter').html();
	$('#counter').html(+result + 1);
});

//5

function getPow(num, pow){
	let number = Math.pow(num, pow)
	alert(number);
};
getPow(4, 2);

//6

function getLine(line){
	let heading = document.querySelectorAll('p');
	for(let i = 0; i < heading.length; i++){
		heading[i].style = "text-decoration:" + line;
	}
};
const line = 'underline';
getLine(line);

//7 - 8

function getAge(){
	let age;
	while (true) {
		age = parseFloat(prompt('Enter age', ''));
		if (isNaN(age)) {
			alert('Enter your age!');
		}else {
			break;
		}
	}
	if (age >= 16){
		alert('Welcome');
	}else{
		alert('You\'re too young');
	}
};
getAge();

//9

function getLength(arr){
	if(arr.length > 0){
		let arrLength = arr.length;
		alert(arrLength);
	}else{
		alert('error');
	}
};
getLength([4]);

//10

function getNumber(){
	let num = prompt('Number', '')
	if(num < 7){
		return alert('Number < 7');
	}else if(num >= 7 && num <= 8){
		return num;
	}else if(num > 10){
		return num *= num;
	}
};
getNumber();

//11

function getRandom(){
	let random = parseInt(Math.random() * 10);
	console.log(random);
	let input = document.querySelector('.random-form input');
	let i = 0;
	input.addEventListener('keyup', (event) => {
		let key = event.key;
		if(i < 3){
			check();
			i++;
		}else {
			console.log('stop');
			// break;
		}
		function check(){
			if(key == random){
				return console.log('congratulations');
			}else if (key > random){
				return console.log('less');
			}else{
				return console.log('more');
			};
		};
	});
};
getRandom();

//12

function CostCalories(){
	const small = {
		price: 17,
		calories: 250
	};
	const big = {
		price: 25,
		calories: 340
	};
	const cheese = {
		price: 4,
		calories: 25
	};
	const salad = {
		price: 5,
		calories: 5
	};
	const becon = {
		price: 10,
		calories: 50
	};
	const sause = {
		price: 5,
		calories: 0
	};
	const mayo = {
		price: 4,
		calories: 10
	};
	function getCostCalories(burger, fillings, sauses){
		let burgers = {
			price: 0,
			calories: 0
		};
		burgers.price += burger.price;
		burgers.calories += burger.calories;
		fillings.forEach(function (el) {
			burgers.price += el.price;
			burgers.calories += el.calories;
		});
		if (sauses !== undefined){
			sauses.forEach(function (el) {
				burgers.price += el.price;
				burgers.calories += el.calories;
			});
		}
		return burgers;
	};
	let result = getCostCalories(big, [cheese, becon], [mayo]);
	alert('price: ' + result.price + ' ₴' + ', ' + 'calories: ' + result.calories + ' kcal');
};
CostCalories();

})();