'use strict';
let x = prompt('введите номер квартиры');
if (x <= 0 || x > 90) alert('нет такой квартиры');
else if (x > 0 && x < 20) alert('1 подьезд');
else if (x >= 20 && x <= 48) alert('2 подьезд');
else alert('3 подьезд');
