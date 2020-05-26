'use strict';

let num1 = null, 
    num2 = null,
    result = null,
    state = 0;
   

const operators = {
    'plus': function (a, b) { return parseFloat(num1) + parseFloat(num2) },
    'minus': function (a, b) { return parseFloat(num1) - parseFloat(num2)  },
    'multiply': function (a, b) { return parseFloat(num1) * parseFloat(num2)  },
    'divide': function (a, b) { return parseFloat(num1) / parseFloat(num2) },
};

let myStatus;

console.log(myStatus);


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
    dotButton = document.getElementById("dot"),
    addButton = document.getElementById("add"),
    subButton = document.getElementById("sub"),
    multiButton = document.getElementById("multi"),
    divideButton = document.getElementById("divide"),
    equalsButton = document.getElementById("equals"),

    displayNum = document.getElementById("displayNum");

    addButton.addEventListener('click', function(){
        // Condition 1 - New operation. First numeric value saved, operation saved, state changed to 1. 
        if (num1 == null) {
            num1 = displayNum.innerText;
            myStatus = operators.plus;
            state = 1;
        // Condition 2 - Second number selected and previous operation to be executed. 
        } else if (num1 != null && result == null) {
            num2 = displayNum.innerText;
            displayNum.innerText = myStatus();
            state = 1;
            result = displayNum.innerText;
        // Condition 3 - Result from previous operation stored and new number entered by user. 
        } else if (num1 != null && result != null && state != 2) {
            num1 = result;
            num2 = displayNum.innerText;
            displayNum.innerText = myStatus();
            state = 2;
            result = displayNum.innerText;
        // Condition 4 - User has not selected a new number and clicks operation button. -NEED TO WRITE
        } else if (state == 2) {
            return;
        };
        });

   
    oneButton.addEventListener('click', function () {
        if (state ==  1 || state == 2) {
            displayNum.innerText = ' ';
            state = 0;
        } else (state == 0) 
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
        displayNum.innerText += parseFloat(eightButton.innerText);
    });
    
    nineButton.addEventListener('click', function () {
        displayNum.innerText += nineButton.innerText;
    });
    
    zeroButton.addEventListener('click', function () {
        displayNum.innerText += zeroButton.innerText;
    });
    
    dotButton.addEventListener('click', function () {
        displayNum.innerText += dotButton.innerText;
    });
    
