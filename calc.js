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

let oneButton = document.getElementById("one");
let displayNum = document.getElementById("displayNum");

oneButton.addEventListener('click', function(){
    num1 = 1;
    displayNum.innerText = num1;
    console.log("hell, is this thing even on?")
    });

// op = '-';
// console.log((operators[op](10, 20)))