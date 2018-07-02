'use strict';

let x = prompt('какого ты года рождения?');
const year = 2018;
let age = year - x;
if (age > 16) alert("добро пожаловать");
if (age < 16) alert("вход воспрещен");