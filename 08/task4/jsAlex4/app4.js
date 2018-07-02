'use strict';
let login=prompt('Enter yout login : ','');
let password=prompt('Enter your password','');
if((login==='ivan'&&password==='334455') ||( login==='alex'&& password==='777') || (login==='petr' && password==='b5678')){
    alert(' Добро пожаловать ');
}
else {
    alert('Ошибка входа');
}
