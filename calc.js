'use strict';

let num1 = 10,
    num2 = 2.8,
    op = undefined;

const operators = {
    '+': function(a, b) { return num1 + num2 },
    '-': function(a, b) { return num1 - num2 },
    '*': function(a, b) { return num1 * num2 },
    '/': function(a, b) { return num1 / num2 },
};


op = '-';
console.log((operators[op](10, 20)));