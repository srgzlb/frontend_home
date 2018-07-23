;(() =>{
	'use strict';

//1

let a = [];
a.push('x', 'xx', 'xxx', 'xxxx', 'xxxxx');
console.log(a);

//2

let a1 = [];
a1.push(1, 22, 333, 4444, 55555);
console.log(a1);

//3

function arrayFill(x, y) {
	let mas = [];
	for (let row = 0; row < y; row++){
		mas.push(x);
	}
	return mas;
}
arrayFill('x', 5);
console.log(arrayFill('x', 5));

//4

let arr = [2, 4, 6, 7, 9, 33];
let res = 0;

for(let i = 0; i < arr.length; i++) {
	res += arr[i]
	if (res > 10 ) {
		console.log(i + 1);
		break
	}
}

//5

let b = [1, 2 , 3, 4, 5, 6];
let b1 = []
for (let i = b.length - 1; i >= 0; i--) {
	b1.push(b[i]);
}
console.log(b1);

//6

let c = [[1, 2, 3], [4, 5], [6, 5]];
let c1 = [];
for(let i = 0; i < c.length; i++){
	for(let f = 0; f < c[i].length; f++){
		c1.push(c[i][f]);
	}
}
let results = c1.reduce(function(sum, cur){
	return sum + cur;
});
console.log(results);

//7

let d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let d1 = [];
for(let i = 0; i < d.length; i++){
	for(let f = 0; f < d[i].length; f++){
		for(let e = 0; e < d[i][f].length; e++){
			d1.push(d[i][f][e]);
		}
	}
}
let results1 = d1.reduce(function(sum, cur){
	return sum + cur;
});
console.log(results1);

//8

let h = [-1, 10, 15, -2, -3, 1, 2, 3, -4, -5, 6, 8];

function isNumberInRange(num) {
	if (num > 0 && num < 10) {
		return true;
	} else {
		return false;
	}
}

//9

let h1 = [];
for (let i = h[0]; i <= h.length; i++) {
	if (isNumberInRange(h[i])) {
		h1.push(h[i]);
	}
}
console.log(h1);

//10

let g = [-1, -2, -3, 1, 2, 3, -4, -5, -6];

function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

//11

let g1 = [];
for (let i = g[0]; i <= g.length; i++) {
	if (isEven(g[i])) {
		g1.push(g[i]);
	}
}
console.log(g1);

//12

function getDivisors(num) {
	let k = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			k.push(i);
		}
	}
	return k;
}
console.log(getDivisors(15));

//13

let m = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < m.length; i +=2){
	let m1 = m[i];
	m[i] = m[i+1];
	m[i+1] = m1;
}
console.log(m);

//14
m.reverse();
console.log(m);

//15

let multiplicationTable, row, cell, i, j;
multiplicationTable = document.createElement('table');
multiplicationTable.style.textAlign = 'center';
multiplicationTable.style.fontFamily = 'sans-serif';
for (i = 1; i <= 10; i++) {
	row = document.createElement('tr');
	for (j = 1; j <= 10; j++) {
		cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
		cell.appendChild(document.createTextNode(i*j));
		cell.style.padding = '3px';
		cell.style.width = 100 / 10;
		row.appendChild(cell);
	}
	multiplicationTable.appendChild(row);
}
document.body.appendChild(multiplicationTable);

//16

function matrixArray(rows,columns){
	let arr = [];
	for(let i = 0; i < rows; i++){
		arr[i] = [];
		for(let j = 0; j < columns; j++){
			if (i === j){
				arr[i][j] = 1;
			}
			else if (i + j === 9){
				arr[i][j] = 2;
			}
			else if (i < 4 && i < 9 - j && j > i){
				arr[i][j] = 3;
			}
			else if (i > 5 && i > 9 - j && i > j){
				arr[i][j] = 5;
			}
			else if (j < 4 && j < 9 - i && i > j){
				arr[i][j] = 6;
			}
			else if (j > 5 && j > 9 - i && j > i){
				arr[i][j] = 4;
			}
		}
	}
	return arr;
}
let myMatrix = matrixArray(10,10);
console.log(myMatrix);

//17

function pascalTriangle () {
	let matrix = [];
	let i, j;
	let size=prompt('Введите размер', '');
	let styles = document.createElement('style');
	styles.innerText = 'body{\n\toverflow-x:auto;\n\tfont-family:sans-serif;\n\tfont-size:16px;\n\tmargin:0;\n}\nul{\n\tlist-style:none;\n\tpadding:0\n}\nli{\n\tdisplay:flex;\n\talign-items:center;\n\tjustify-content:center;\n\tmargin:0;\n}\nspan{\n\tdisplay:inline-block;\n\tpadding:0 10px;\n\ttext-align:center;\n}';
	document.head.appendChild(styles);
	document.write ('<ul><li>');
	for(i = 1; i <= size ; i++){
		matrix[i] = 0;
	}
	matrix[0] = 1;
	for(j = 1; j < size; j++){
		for(i = j; i >= 1 ; i--){
			let span = '<span>' + matrix[i-1] + '</span>';
			document.write(span);
			matrix[i] = matrix[i-1] + matrix[i];
		}
		document.write('<li>');
	}
	for(i = 0; i < size ; i++){
		let span = '<span>' + matrix[i] + '</span>';
		document.write (span);
	}
}
pascalTriangle();

})();
