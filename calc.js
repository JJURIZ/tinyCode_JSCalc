'use strict';

let num1 = 10,
    num2 = 2.8,
    op = undefined;

const operators = {
    '+': function (a, b) { return num1 + num2 },
    '-': function (a, b) { return num1 - num2 },
    '*': function (a, b) { return num1 * num2 },
    '/': function (a, b) { return num1 / num2 },
};

let oneButton = document.getElementById("one"),
    twoButton = document.getElementById("two"),
    threeButton = document.getElementById("three"),
    fourButton = document.getElementById("four"),
    fiveButton = document.getElementById("five"),
    sixButton = document.getElementById("six"),
    severnButton = document.getElementById("seven"),
    eightButton = document.getElementById("eight"),
    nineButton = document.getElementById("nine"),
    zeroButton = document.getElementById("zero"),
    addButton = document.getElementById("add"),
    subtractButton = document.getElementById("sub"),
    multiplyButton = document.getElementById("multi"),
    divideButton = document.getElementById("divide"),
    equalsButton = document.getElementById("equals"),

    displayNum = document.getElementById("displayNum");
// Set number buttons to display and retain all digits up to max allowed. 
oneButton.addEventListener('click', function () {
    displayNum.innerText += oneButton.innerText;
});

twoButton.addEventListener('click', function () {
    displayNum.innerText += twoButton.innerText;
});

threeButton.addEventListener('click', function () {
    displayNum.innerText += threeButton.innerText;
});




// op = '-';
// console.log((operators[op](10, 20)))