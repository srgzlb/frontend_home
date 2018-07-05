'use strict';
/*Task_01 ====================================*/

/*let a = prompt("Введите число 'a':", '');
let b = prompt("Введите число 'b':", '');
let x;

a = parseFloat(a);
b = parseFloat(b);

if(a > b) {
	x = a + b/2*4;
} else if(a === b) {
	x = 400;
} else {
	x = a - b + 2/b*4;
}

alert('X = ' + x);*/






/*Task_02_вариант_1 ====================================*/
/*
let x = +prompt('Введите координату X точки A ( _ ; _ )', '');
let y = +prompt('Введите координату Y точки A ( '+ x +' ; _ )', '');

let line1 = -x-y+4;
let line2 = x-y+4;

if(line1 >= 0 && line2 >= 0 && y >= 0) {
  alert('Попадание');
} else {
  alert('Точка вне области');
}*/


/*Task_02_вариант_2 ====================================*/

/*let x = +prompt('Введите координату X точки A ( _ ; _ )', '');
let y = +prompt('Введите координату Y точки A ( '+ x +' ; _ )', '');

if(y >= -1 && y <= 1 && x >= -1 && x <= 1 && Math.abs(y) >= Math.abs(x) ) {
  alert('Попадание');
} else {
  alert('Точка вне области');
}*/


/*Task_02_вариант_3 ====================================*/

/*let x = +prompt('Введите координату X точки A ( _ ; _ )', '');
let y = +prompt('Введите координату Y точки A ( '+ x +' ; _ )', '');

let line1 = Math.pow(x, 2) + Math.pow(y, 2) - 1;
let line2 = -x - y - 2;

if(line1 <= 0 || line2 <= 0 && x <= 0 && y <= 0) {
  alert('Попадание');
} else {
  alert('Точка вне области');
}*/





/*Task_03 ====================================*/

/*let numberWeekDay = +prompt('Введите номер дня недели:', '');

switch(numberWeekDay) {
  case 1:
    alert('Понедельник :(');
    break;
  case 2:
    alert('Вторник');
    break;
  case 3:
    alert('Среда');
    break;
  case 4:
    alert('Четверг');
    break;
  case 5:
    alert('Пятница!!');
    break;
  case 6:
    alert('Суббота');
    break;
  case 7:
    alert('Воскресенье');
    break;
  default:
    alert("Такого дня недели не существует!");
}*/

