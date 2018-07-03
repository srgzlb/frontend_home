'use strict';
//№1
let a = parseFloat(prompt('Введите значение переменной а', ''));
let b = parseFloat(prompt('Введите значение переменной b', ''));
let x = 400;
if (a > b){
    x = a+b/2*4;
    console.log(x);
}
else if (a < b) {
    x = a-b+2/b*4;
    console.log(x);
}
else console.log(x);

//№2(1)
const x1=parseFloat(prompt('Введите координату x : '));
const y1=parseFloat(prompt('Введите координату y : '));
if((y1 < x1+4) &&(y1<(-x1)+4) && y1>0){
    alert('Точка попадает в заданную область');
}
else alert('Точка не попадает в заданную область');

//№2(2)
const x2=parseFloat(prompt('Введите координату x : '));
const y2=parseFloat(prompt('Введите координату y : '));
if (((y2>=x2)&&(y2>=(-x2))&&(y2<=1))||((y2<=x2)&&(y2<=(-x2))&&(y2>=-1))){
    alert('Точка попадает в заданную область');

}
else alert('Точка не попадает в заданную область');
//№2(3)
const x3=parseFloat(prompt('Введите координату x : '));
const y3=parseFloat(prompt('Введите координату y : '));

if ((Math.pow(x3,2)+Math.pow(y3,2)<=1) || ((y3>=x3-2) && (y3<=0)&&(x3<=0))){
    alert('Точка попадает в заданную область');
}
else alert('Точка не попадает в заданную область');

//№3
let week = prompt('Введите номер дня недели');
switch (parseInt(week)) {
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wednesday');
        break;
    case 4:
        alert('Thursday');
        break;
    case 5:
        alert('Friday');
        break;
    case 6:
        alert('Saturday');
        break;
    case 7:
        alert('Sunday');
        break;
    default: alert('Такого дня недели не существует!');
}




