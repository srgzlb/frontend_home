'use strict';
let a=parseInt(prompt('Enter the apartment number : '));
if (a >=1 && a<=20 ){
    alert("This apartment is located in 1 entrance");
}
else if(a>20 && a<=48){
alert("This apartment is located in 2 entrance");
}

else if(a>48 && a<=90){
    alert("This apartment is located in 3 entrance");
}
else {
    alert('Apartment number out of range!!!');
}