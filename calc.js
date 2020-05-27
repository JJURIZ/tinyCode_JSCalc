'use strict';

let num1 = null,
    num2 = null,
    result = null,
    state = 0;


const operators = {
    'plus': function (a, b) { return parseFloat(num1) + parseFloat(num2) },
    'minus': function (a, b) { return parseFloat(num1) - parseFloat(num2) },
    'multiply': function (a, b) { return parseFloat(num1) * parseFloat(num2) },
    'divide': function (a, b) { return parseFloat(num1) / parseFloat(num2) },
};

let nextOperation;

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

let calculate = function calculate(op) {
    // Condition 1 - New operation. First numeric value saved, operation saved, state changed to 1. 
    if (num1 == null) {
        num1 = displayNum.innerText;
        nextOperation = op;
        state = 1;
        // Condition 2 - Second number selected and previous operation to be executed. 
    } else if (num1 != null && result == null) {
        num2 = displayNum.innerText;
        displayNum.innerText = nextOperation();
        state = 2;
        result = displayNum.innerText;
        // Condition 3 - Result from previous operation stored and new number entered by user. 
    } else if (num1 != null && result != null && state != 2) {
        num1 = result;
        num2 = displayNum.innerText;
        displayNum.innerText = nextOperation();
        state = 2;
        result = displayNum.innerText;
        // Condition 4 - User has not selected a new number and clicks operation button. -NEED TO WRITE
    } else if (state == 2) {
        nextOperation = op;
        return;
    };
}

addButton.addEventListener('click', function () {
    calculate(operators.plus);
});

subButton.addEventListener('click', function () {
    calculate(operators.minus);
});

multiButton.addEventListener('click', function () {
    calculate(operators.multiply);
});

divideButton.addEventListener('click', function () {
    calculate(operators.divide);
});

let buttonNumber = function buttonNumber() {

}

let numButton = (buttonNumber) => {
    if (state == 1 || state == 2) {
        displayNum.innerText = ' ';
        state = 0;
    } else (state == 0)
    displayNum.innerText += buttonNumber.innerText;
};


oneButton.addEventListener('click', function () {
    let buttonNumber = oneButton;
    numButton(buttonNumber);
});

twoButton.addEventListener('click', function () {
    let buttonNumber = twoButton;
    numButton(buttonNumber);
});

threeButton.addEventListener('click', function () {
    let buttonNumber = threeButton;
    numButton(buttonNumber);
});

fourButton.addEventListener('click', function () {
    let buttonNumber = fourButton;
    numButton(buttonNumber);
});

fiveButton.addEventListener('click', function () {
    let buttonNumber = fiveButton;
    numButton(buttonNumber);
});

sixButton.addEventListener('click', function () {
    let buttonNumber = sixButton;
    numButton(buttonNumber);
});

sevenButton.addEventListener('click', function () {
    let buttonNumber = sevenButton;
    numButton(buttonNumber);
});

eightButton.addEventListener('click', function () {
    let buttonNumber = eightButton;
    numButton(buttonNumber);
});

nineButton.addEventListener('click', function () {
    let buttonNumber = nineButton;
    numButton(buttonNumber);
});

zeroButton.addEventListener('click', function () {
    let buttonNumber = zeroButton;
    numButton(buttonNumber);
});

dotButton.addEventListener('click', function () {
    let buttonNumber = dotButton;
    numButton(buttonNumber);
});

