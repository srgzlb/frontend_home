'use strict';
let a=parseFloat(prompt(' Введите стаж работы : '));
let perc;
if(a<0){
    alert(' Неверное значение стажа работы!!!');
}
if(a>=0 && a<3){
    perc=0;
   alert(' Надбавка равна = '+ perc +'%');
}
else if( a>=3 && a<10){
    perc=10;
    alert(' Надбавка равна = '+ perc +'%');
}
else if( a>=10 && a<20 ){
    perc=20;
    alert(' Надбавка равна = '+ perc +'%');
}
else if (a>20){

    perc=25;
    alert(' Надбавка равна = '+ perc +'%');
}