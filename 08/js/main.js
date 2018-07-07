'use strict';

// условие

//1
let a = parseFloat(prompt('input a number', ''));
let b = parseFloat(prompt('input a number', ''));
if (a > b){
	alert(a, 'a > b');
}else{
	alert(b, 'a < b');
}

//2
let c = parseFloat(prompt('input a number', ''));
let d = parseFloat(prompt('input a number', ''));
if (c > d){
	alert(c);
}else if(c < d){
	alert(d);
}else{
	alert(`${c} = ${d}`);
}

//3
let appart = parseFloat(prompt('appartament №', ''));
if(appart < 1 || appart > 90){
	alert('This appartment does not exist, chouse number from 1 to 90');
}else if (appart < 21){
	alert('Entrance №1');
}else if(appart < 49){
	alert('Entrance №2');
}else if(appart < 91){
	alert('Entrance №3');
}else{
	alert('chouse number from 1 to 90');
}

//4
let login = prompt('Name','');
let pass = prompt('Password','');
if (login == 'ivan' && pass == '334455'){
	alert('Welcome!');
}else if (login == 'alex' && pass == '777'){
	alert('Welcome!');
}else if (login == 'petr' && pass == 'b5678'){
	alert('Welcome!');
}else{ alert('Login error');
}

//5
let birth = parseFloat(prompt('Year of birth','16'));
let year = 2018;
if((year - birth) >= 16){
	alert(year - birth);
	alert('Welcome');
}else{
	alert('Access denied!');
}

//6
let experience = parseFloat(prompt('Your experience', ''));
if(experience >= 0 && experience < 4){
	alert('Increase 0%');
}else if (experience >= 4 && experience < 11){
	alert('Increase 10%');
}else if(experience >= 11 && experience < 21){
	alert('Increase 20%');
}else if(experience >= 21 && experience < 51){
	alert('Increase 25%');
}else{
	alert('Your experience may be from 0 to 50');
}


// циклы

//7
for(let e = 4; e <= 400; e++){
	console.log(e);
}

//8
for(let f = 4; f <= 13; f += 3){
	console.log(f);
}

//9
for(let g = 654; g > 0; g--){
	console.log(g);
}

//10
for(let h = 1983; h <= 2017; h++){
	console.log(h);
}

//11
for(let i = -4; i <= 100; i++){
	if(i % 2 !== 0){
	continue;
	}
	console.log(i);
}

//12
for(let p = 7; p <= 7; p++){
	for(let r = 1; r <= 10; r++){
		console.log(`${p} * ${r} =` , p * r);
	}
}

//13
let ӆ = 1222;
for(let symbol = 1000; symbol <= 2000; symbol++){
	if(symbol <= ӆ){
		console.log(`&#`, symbol);
	}else{
		break;
	}
}

//14
for(let m = 1; m <= 100; m++){
	for(let n = 1; n <= 100; n++){
		console.log(`${m} + ${n} =` , m + n);
	}
}

//15
for(let k = 1; k <= 50; k++){
	for(let l = 1; l <= 50; l++){
		console.log(`${k} * ${l} =` , k * l);
	}
}