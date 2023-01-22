'use strict';

// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

let num = 1;
let degree = 1;
let powNew = 1;

function pow(num, degree) {
    powNew = num ** degree;
    console.log(num + ' в ступені ' + degree + ' буде ' + powNew);
}

pow (2, 3);


