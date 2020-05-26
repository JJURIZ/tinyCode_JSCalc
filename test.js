'use strict';

let num1 = null, 
    num2 = null,
    state = 0;
   

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
    if (state ==  1) {
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


testButton.addEventListener('click', function() {
    buttonState();
    displayNum.innerText += testButton.innerText;
});

buttonState = () => {
    let state = 1;
    if (state == 1) {
        state = 2;
    } else 
    state = 1
}


// take value in displayNum and set num1 or num2 to the the value



addButton.addEventListener('click', function () {
    if (num1 == null) {
        num1 = displayNum.innerText;
        displayNum.innerText = ' ';
    } else if (num1 != null) {
        num2 = displayNum.innerText;
        let result = (parseFloat(num1) + parseFloat(num2));
        displayNum.innerText = result;
        num1 = result;
        num2 = 0;
        state = 1;
    }
});

// subButton.addEventListener('click', function () {
//     if (num1 == null) {
//         num1 = displayNum.innerText;
//         displayNum.innerText = ' ';
//     } else if (num1 != null) {
//         num2 = displayNum.innerText;
//         let result = (parseFloat(num1) - parseFloat(num2));
//         displayNum.innerText = result;
//         num1 = result;
//         num2 = 0;
//         state = 1;
//     }
// });

    subButton.addEventListener('click', function() {
        num1 = displayNum.innerText;
        displayNum.innerText = ' ';
    })

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
    let result = (parseFloat(num1) - parseFloat(num2));
    displayNum.innerText = result;
      });

      // addButton now correctly adds num1 and num2 instead of concatanating the values. 
      // Added parantheses around this - parseFloat(num1) + parseFloat(num2) -.

      // New problem - When I click a number button it concatanates the new number to the sum currently in the div. 
      // I need the value to display until the next button click. However, the second button click cannot clear the new entry. 

      // 5/25/2020 6:05 - Comments above did not work as expected. Scaled back and just getting num1 - num2 = result. 
      // Got that to work at least.
 





