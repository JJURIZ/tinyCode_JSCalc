'use strict';

let num1 = null, 
    num2 = null;
   

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
    dotButton = document.getElementById("dot"),
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


// let addFun = () => {
//     if (num2 != null) {

//     } else
//         return console.log("You haven't got two numbers dude!");
// };

addButton.addEventListener('click', function () {
    if (num1 == null) {
        num1 = displayNum.innerText;
        displayNum.innerText = ' ';
    } else if (num1 != null) {
        num2 = displayNum.innerText;
        let result = (parseFloat(num1) + parseFloat(num2));
        displayNum.innerText = result;
        console.log(num1);
    }
});


// addButton.addEventListener('click', function () {
//    resultArr.push(displayNum.innerText, '+'); 
//    resultArr.join("");
//    displayNum.innerText = '';
//    });

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
     resultArr.push(displayNum.innerText);
     let singleArr = resultArr.join('');
     displayNum.innerText = singleArr;
     console.log(singleArr);
      });
 





