'use strict';
//first task
const a=parseFloat(prompt('Enter value for a : '));
const b=parseFloat(prompt('Enter value for b : '));
let x=0;
if (a>b){
    x=a+b/2*4;
}
else if (a<b){
    x=a-b +2/b*4;
}
else {
    x=400;
}
console.log(x);
//task 2(1)
const f=parseFloat(prompt('Enter value for first coordinate : '));
const s=parseFloat(prompt('Enter value for second coordinate : '));
if((s<f+4) &&(s<(-f)+4) && s>0){
    alert('Dot is in area');
}
else alert('Dot is not in area');
//task 2(2)
const x1=parseFloat(prompt('Enter value for first coordinate : '));
const y1=parseFloat(prompt('Enter value for second coordinate : '));
/*if((y1<=1 || y1>=-1) && (y1>=x1)&& (x1 <=1 && x1>=-1)){
    alert('Dot is in area');
}*/
if (((y1>=x1)&&(y1>=(-x1))&&(y1<=1))||((y1<=x1)&&(y1<=(-x1))&&(y1>=-1))){
    alert('Dot is in area');

}
else alert('Dot is not in area');
//task 2(3)
const x2=parseFloat(prompt('Enter value for first coordinate : '));
const y2=parseFloat(prompt('Enter value for second coordinate : '));
let r=1;
if ((Math.pow(x2,2)+Math.pow(y2,2)<=1) || ((y2>=x2-2) && (y2<=0)&&(x2<=0))){
    alert('Dot is in area');
}
else alert('Dot is not in area');
//task 3
let num=parseInt(prompt('Enter number of day'));
switch(num){
    case 1:
        alert('Monday :(');
        break;
    case 2:
        alert('Tuesday ');
        break;
    case 3:
        alert('Wednesday ');
        break;
    case 4:
        alert('Thursday ');
        break;
    case 5:
        alert('Friday :)');
        break;
    case 6:
        alert('Saturday');
        break;
    case 7:
        alert('Sunday :(');
        break;
    default:alert('You entered wrong number of day');
}

