;(($) => {
	'use strict';

//1

function ucfirst(){
	$('.task-1 p').css('text-transform', 'capitalize');
};
ucfirst();

//2

$('.task-2 span').html('varTextHello');

//3

let arr = [0, 1, 2.2, true, 'false', -5];

function inArray(text, array) {

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === text) {
			return console.log('true');
		};
	};

	return console.log('false');
};

inArray(8, [arr]);

//4

let array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i +=2){
	let array1 = array[i];
	array[i] = array[i+1];
	array[i+1] = array1;
};

//5

let user = {
	name: 'Vasya',
	surname: 'Petrov',
};

function changeName(){
	let name = 'Sergey';
	user.name = name;
	delete user.name;
};

changeName();

//6

let empty = function(obj) {
	return Object.keys(obj).length === 0;
};

const data = {};

console.log(empty(data));

const meta = {
	name: 'Ivan',
	surname: 'Ivanov',
};

console.log(empty(meta));

//7

const salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

function salary(obj) {
	let result = 0;

	for (let value in obj){
		if(Object.keys(obj).length !== 0){
			result += obj[value];
		};
	};

	return console.log(result);
};

salary(salaries);

//8

function bigSalary(obj) {
	let key;
	let result = 0;

	for (let value in obj){
		if(Object.keys(obj).length !== 0){
			if(result < obj[value]){
				result = obj[value];
				key = value;
			};
		};
	};

	return console.log(key || 'no employees');
};

bigSalary(salaries);

//9

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function multiplyNumeric(arg) {

	for(let value in arg){
		if(isNumeric(arg[value])) {
			arg[value] *= 2;
			value++;
		};
	};

	return console.log(arg);
};

multiplyNumeric(menu);


})(jQuery);