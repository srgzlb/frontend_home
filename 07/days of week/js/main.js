'use strict';

let first = 'Monday';
let second = 'Tuesday';
let third = 'Wednesday';
let fourth = 'Thursday';
let fifth = 'Friday';
let sixth = 'Saturday';
let seventh = 'Sunday';
let result = prompt('Number of day', 1);

switch (result){
    case '1':
        alert(first);
        break;
    case '2':
        alert(second);
        break;
    case '3':
        alert(third);
        break;
    case '4':
        alert(fourth);
        break;
    case '5':
        alert(fifth);
        break;
    case '6':
        alert(sixth);
        break;
    case '7':
        alert(seventh);
        break;
    default:alert("Такого дня недели не существует!");
}