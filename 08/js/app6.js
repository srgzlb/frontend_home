let stage = prompt('Введите сколько у вас стажа лет');
if (stage > 0 && stage <= 3) alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 0%');
else if (stage > 3 && stage <= 10) alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 10%');
else if (stage > 10 && stage <= 20) alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 20%');
else alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 25%');