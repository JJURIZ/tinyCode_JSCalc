'use strict';

let num1 = 0,
    num2 = 0;
   

// const operators = {
//     '+': function (a, b) { return num1 + num2 },
//     '-': function (a, b) { return num1 - num2 },
//     '*': function (a, b) { return num1 * num2 },
//     '/': function (a, b) { return num1 / num2 },
// };

let oneButton = document.getElementById("one"),
    twoButton = document.getElementById("two"),
    threeButton = document.getElementById("three"),
    fourButton = document.getElementById("four"),
    fiveButton = document.getElementById("five"),
    sixButton = document.getElementById("six"),
    sevenButton = document.getElementById("seven"),
    eightButton = document.getElementById("eight"),
    nineButton = document.getElementById("nine"),
    zeroButton = document.getElementById("zero"),
    addButton = document.getElementById("add"),
    subButton = document.getElementById("sub"),
    multiButton = document.getElementById("multi"),
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

fourButton.addEventListener('click', function () {
    displayNum.innerText += fourButton.innerText;
});

fiveButton.addEventListener('click', function () {
    displayNum.innerText += fiveButton.innerText;
});

sixButton.addEventListener('click', function () {
    displayNum.innerText += sixButton.innerText;
});

sevenButton.addEventListener('click', function () {
    displayNum.innerText += sevenButton.innerText;
});

eightButton.addEventListener('click', function () {
    displayNum.innerText += eightButton.innerText;
});

nineButton.addEventListener('click', function () {
    displayNum.innerText += nineButton.innerText;
});

zeroButton.addEventListener('click', function () {
    displayNum.innerText += zeroButton.innerText;
});

addButton.addEventListener('click', function () {
   num1 = displayNum.innerText; 
   displayNum.innerText = '';
   return op;

});

subButton.addEventListener('click', function () {
    num1 = displayNum.innerText; 
    op = '-';
    displayNum.innerText = '';
    return op;
     });

 multiButton.addEventListener('click', function () {
    num1 = displayNum.innerText; 
    op = '*';
    displayNum.innerText = '';
    return op;
    });

 divideButton.addEventListener('click', function () {
    num1 = displayNum.innerText; 
    op = '/';
    displayNum.innerText = '';
    return op;
 });

 equalsButton.addEventListener('click', function () {
     num2 = displayNum.innerText;
     let opAdd = parseFloat(num1) + parseFloat(num2);
     displayNum.innerText = opAdd;
 });
 


