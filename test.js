let num1 = 0;
let num2 = null;
let add = 'addNums';

num1 = 5;
num2 = 10;


let addFun = () => {
    if (num2 != null) {
        let sum = num1 += num2;
        return sum;
    } else
        return console.log("You haven't got two numbers dude!");
};

console.log(addFun());

'use strict';

let resultArr = [];
   

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
   resultArr.push(displayNum.innerText, '+'); 
   resultArr.join("");
   displayNum.innerText = '';
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
     resultArr.push(displayNum.innerText);
     let singleArr = resultArr.join('');
     displayNum.innerText = singleArr;
     console.log(singleArr);
      });
 



 // add only numbers and binary operators to array.
 // when =, clear screen and display results of array.
// Learned the difference between a standard calc and scientific today!

 //  let test = [100+2*3-1/100];
//  console.log(test);


