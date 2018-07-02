'use strict';
const a=parseFloat(prompt('Please enter a : ',''));
const b=parseFloat(prompt('Please enter b : ',''));
if(a<b){
    alert('Maximum is : '+ b);
}
else if (a>b) {
    alert('Maximum is : '+ a);
}
else {
    alert ('Variables are equal!!!  a=b');
}