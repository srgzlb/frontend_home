let log = prompt(" Введите Логин");
let pass = prompt('Введите Пароль');
if (log == 'ivan' && pass == 334455) {
    alert("Доступ разрешен");
}
else if (log == 'alex' && pass == 777) {
    alert("Доступ разрешен");
}
else if (log == 'petr' && pass == 'd5678') {
    alert("Доступ разрешен");
}
else alert('Доступ запрещен');
