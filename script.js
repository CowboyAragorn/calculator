let currentCalculation = document.querySelector("#currentCalculation")
let screenNumbers = document.querySelector("#screenNumbers");
let numberZero = document.querySelector("#zero");
let numberOne = document.querySelector("#one");
let numberTwo = document.querySelector("#two");
let numberThree = document.querySelector("#three");
let numberFour = document.querySelector("#four");
let numberFive = document.querySelector("#five");
let numberSix = document.querySelector("#six");
let numberSeven = document.querySelector("#seven");
let numberEight = document.querySelector("#eight");
let numberNine = document.querySelector("#nine");
let decimalButton = document.querySelector("#decimal");


let numbersDisplayArray = []
let lengthCheckerBoolean = false;

//Adds numbers to an array, converts array to a string for display//
function addToDisplay(x) {

    screenNumbers.innerText = " "
    numbersDisplayArray.push(x);
    screenNumbers.innerText = numbersDisplayArray.join('');

}





//Converts numberDisplay to string so that you are only allowed to type in 9 numbers. Prevents overflow//
function checkLength() {
    let str
    let strConvert
    let strLength = 0;
  
    if (numbersDisplayArray[0] != undefined) {
        lengthCheckerBoolean = false;
        str = numbersDisplayArray
        strConvert = str.join('');
        strLength = strConvert.length;
        if (strLength >= 9) {
            lengthCheckerBoolean = true;
        }

    }
    else{
        return
    }
}



//Event listeners for each button. Probably a more elegant way to do this,
//but was a simple copy paste//
//Checks length before adding to display//

numberZero.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(0)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberOne.addEventListener("click", () => {
    checkLength();
    if(lengthCheckerBoolean === false){
    addToDisplay(1)
    }
    else{
        return lengthCheckerBoolean = false;
    }
});

numberTwo.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(2)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberThree.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(3)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberFour.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(4)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberFive.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(5)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberSix.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(6)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberSeven.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(7)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

numberEight.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(8)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});


numberNine.addEventListener("click", () => {
    checkLength();
    if (lengthCheckerBoolean === false) {
        addToDisplay(9)
    }
    else {
        return lengthCheckerBoolean = false;
    }
});

let decimalActive = true;

decimalButton.addEventListener("click", () => {
    if(decimalActive === true){
        decimalActive = false;
        checkLength();
        if (lengthCheckerBoolean === false) {
            addToDisplay('.')
        }
        else {
            return lengthCheckerBoolean = false;
        }
}
});







let primaryNumber;
let secondaryNumber
let currentOperation;
let currentOperationStr;
let reducer;
let display;
let calculationArray = [];
let storageNumberForEquals;
let addToCalc;
let divideBy0Checker = false;
let additionButton = document.querySelector("#addition");
let subtractionButton = document.querySelector('#subtraction');
let multiplicationButton = document.querySelector('#multiplication');
let divisionButton = document.querySelector('#division');
let equalButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');
let backspaceButton = document.querySelector('#backspace')


 




//Capture a number and make sure that the sign is addition
additionButton.addEventListener("click",() =>{
//Allows for use of chaining operators//
    if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
        storeNumbers();
        operatorAssignment();
        combine();

        if (divideBy0Checker === true) {
            return; //Fixes dividing by zero while chaining operators//
        }
        afterCombineForOperators();
    }
    currentOperation = 'addition';
    currentOperationStr = '+'

    //no clue why this doesnt want to be else if// 
    if (calculationArray[0] == undefined) {
    storeNumbers()
    }

    //Tells user which operator they are using//
    currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
    additionButton.classList.add('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
})


subtractionButton.addEventListener("click", () => {
    if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
        storeNumbers();
        operatorAssignment();
        combine();
        if (divideBy0Checker === true) {
            return;
        }
        afterCombineForOperators();
    }
    currentOperation = 'subtraction';
    currentOperationStr = '-'
    
    subtractionButton.classList.add('operatorBorder');
    if (calculationArray[0] == undefined) {
        storeNumbers()
    }

//Tells user which operator they are using//
    currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.add('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
})


multiplicationButton.addEventListener("click", () => {
    if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
        storeNumbers();
        operatorAssignment();
        combine();
        if (divideBy0Checker === true) {
            return;
        }
        afterCombineForOperators();
    }

    currentOperation = 'multiplication';
    currentOperationStr = 'x'

    if (calculationArray[0] == undefined) {
        storeNumbers()
    }
  
    //Tells user which operator they are using//
    currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.add('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
})

divisionButton.addEventListener("click", () => {
    if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
        storeNumbers();
        operatorAssignment();
        combine();
        if(divideBy0Checker === true){
            return;
        }
        afterCombineForOperators();
    }
    currentOperation = 'division';
    currentOperationStr = '/'

    if (calculationArray[0] == undefined) {
        storeNumbers()
    }

    currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.add('operatorBorder');
})




//adds numbers to the calculation array based on what was typed into 
//the calc
function storeNumbers() {
    let str = numbersDisplayArray.join('')
    //defaults to 0 if nothing typed. Defaults to 1 if selecting mult or div//
    if (str === '' && (currentOperation === 'multiplication' || currentOperation === 'division')) {
        str = '1'
    }
    else if (str === '') {
        str = '0'
    }
    addToCalc = parseFloat(str); //ParseFloat beats parseInt for adding decimals//
    calculationArray.push(addToCalc)
    console.log('calculationArray = ' + calculationArray)
    //Resets number display so that a new number can be typed in and parsed
    numbersDisplayArray = [];
    screenNumbers.innerText = addToCalc;
    decimalActive = true;
}


//changes operator variable, allows you to switch around//
function operatorAssignment(){
    if (currentOperation === 'addition') {
        reducer = (x, y) => x + y;
        //reducer = calculationArray[0] + calculationArray[1];
       
    }
    else if (currentOperation === 'subtraction') {
        reducer = (x, y) => x - y;
        //reducer = calculationArray[0] - calculationArray[1];
        
    }
    else if (currentOperation === 'multiplication') {
        reducer = (x, y) => x * y;
        //reducer = calculationArray[0] - calculationArray[1];
    
    }
    else if (currentOperation === 'division') {
        reducer = (x, y) => x / y;
        //reducer = calculationArray[0] - calculationArray[1];
     
    }
    else {
        reducer = (x, y) => x + y; //This is for if you hit 0. Reducer defaults to adding to display same #)
        console.log('something is broken!')
        return
    }

}

function combine() {
    //This if statement assigns the second number for the equal sign so that
    //you can continue to press equals to add last number typed
    divideBy0Checker = false;
    if (calculationArray[1] == undefined) {
        calculationArray[1] = storageNumberForEquals;
    }
    storageNumberForEquals = calculationArray[1];
    if (currentOperation === 'division' && calculationArray[1] === 0) {
        clear()
        divideBy0Checker = true;
        return screenNumbers.innerText = 'We Gotta Wiseguy';
    }

    display = calculationArray.reduce(reducer);
    console.log('display = ' + display)
    //number display has to equal the calculation so that it is captured by next
    //storing
    numbersDisplayArray = [display];
    //calculation array has to be reset so that adding only evaluates two numbers

    calculationArray = [];
    console.log('calculationArray after combine = ' + calculationArray)
    screenNumbers.innerText = display;
    decimalActive = true;
}


//This is here to reset values while chaining operators. They values were not storing correctly without this function.//
function afterCombineForOperators() {
    if (currentOperation === 'division' && calculationArray === []) {
        return
    }
    else {
        numbersDisplayArray = []
        calculationArray = [display] //Calc array was being completely reset, this solves by equaling last total//
        screenNumbers.innerText = display
        additionButton.classList.remove('operatorBorder');
        subtractionButton.classList.remove('operatorBorder');
        multiplicationButton.classList.remove('operatorBorder');
        divisionButton.classList.remove('operatorBorder');
    }
}



//Equal store, assigns, and commbines so that you can continue to press equals to get answer//
equalButton.addEventListener('click', () =>{
    storeNumbers();
    operatorAssignment();
    combine();
    //storageNumberForEquals;
    currentCalculation.innerText = ' '
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
})


clearButton.addEventListener('click', clear);


function clear(){
    decimalActive = true;
    currentOperation = ' ';
    storageNumberForEquals = 0;
    numbersDisplayArray = [];
    calculationArray = [];
    screenNumbers.innerText = ' ';
    currentCalculation.innerText = ' '
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
}


let decimalBackspace //Turns the decimal back on if you backspace it.

backspaceButton.addEventListener('click', backspace);

function backspace(){
    decimalBackspace = [];
    //numbersDisplayArray.splice(-1,1);
    decimalBackspace = numbersDisplayArray.splice(-1, 1);
    screenNumbers.innerText = numbersDisplayArray.join('');
    
    if (decimalBackspace == '.') {
        decimalActive = true;
    }
}




//Keyboard support, copy pasted. Again, probably a more elegant way to do this//
document.addEventListener('keypress', (event) => {
    if (event.code == 'Numpad0' || event.code == 'Digit0') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(0)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad1' || event.code == 'Digit1') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(1)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad2' || event.code == 'Digit2') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(2)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad3' || event.code == 'Digit3') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(3)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad4' || event.code == 'Digit4') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(4)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad5' || event.code == 'Digit5') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(5)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad6' || event.code == 'Digit6') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(6)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad7' || event.code == 'Digit7') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(7)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad8' || event.code == 'Digit8') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(8)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'Numpad9' || event.code == 'Digit9') {
        if (lengthCheckerBoolean === false) {
            addToDisplay(9)
        }
        else {
            return lengthCheckerBoolean = false;
        }
    }
    else if (event.code == 'period' || event.code == 'NumpadDecimal') {
        if (decimalActive === true) {
            decimalActive = false;
            checkLength();
            if (lengthCheckerBoolean === false) {
                addToDisplay('.')
            }
            else {
                return lengthCheckerBoolean = false;
            }
        }
    }




    else if (event.code == 'NumpadAdd') {
        if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
            storeNumbers();
            operatorAssignment();
            combine();

            if (divideBy0Checker === true) {
                return; //Fixes dividing by zero while chaining operators//
            }
            afterCombineForOperators();
        }
        currentOperation = 'addition';
        currentOperationStr = '+'

        //no clue why this doesnt want to be else if// 
        if (calculationArray[0] == undefined) {
            storeNumbers()
        }

        //Tells user which operator they are using//
        currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
        additionButton.classList.add('operatorBorder');
        subtractionButton.classList.remove('operatorBorder');
        multiplicationButton.classList.remove('operatorBorder');
        divisionButton.classList.remove('operatorBorder');
    }
    else if (event.code == 'NumpadSubtract') {
        if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
            storeNumbers();
            operatorAssignment();
            combine();
            if (divideBy0Checker === true) {
                return;
            }
            afterCombineForOperators();
        }
        currentOperation = 'subtraction';
        currentOperationStr = '-'

        subtractionButton.classList.add('operatorBorder');
        if (calculationArray[0] == undefined) {
            storeNumbers()
        }

        //Tells user which operator they are using//
        currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
        additionButton.classList.remove('operatorBorder');
        subtractionButton.classList.add('operatorBorder');
        multiplicationButton.classList.remove('operatorBorder');
        divisionButton.classList.remove('operatorBorder');
    }
    else if (event.code == 'NumpadMultiply') {
        if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
            storeNumbers();
            operatorAssignment();
            combine();
            if (divideBy0Checker === true) {
                return;
            }
            afterCombineForOperators();
        }

        currentOperation = 'multiplication';
        currentOperationStr = 'x'

        if (calculationArray[0] == undefined) {
            storeNumbers()
        }

        //Tells user which operator they are using//
        currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
        additionButton.classList.remove('operatorBorder');
        subtractionButton.classList.remove('operatorBorder');
        multiplicationButton.classList.add('operatorBorder');
        divisionButton.classList.remove('operatorBorder');
    }
    else if (event.code == 'NumpadDivide') {
        if (calculationArray[0] != undefined && calculationArray[1] == undefined) {
            storeNumbers();
            operatorAssignment();
            combine();
            if (divideBy0Checker === true) {
                return;
            }
            afterCombineForOperators();
        }
        currentOperation = 'division';
        currentOperationStr = '/'

        if (calculationArray[0] == undefined) {
            storeNumbers()
        }

        currentCalculation.innerText = (calculationArray[0] + ' ' + currentOperationStr)
        additionButton.classList.remove('operatorBorder');
        subtractionButton.classList.remove('operatorBorder');
        multiplicationButton.classList.remove('operatorBorder');
        divisionButton.classList.add('operatorBorder');
    }
}, false);


document.addEventListener('keydown', (event) => {
     if (event.code == 'Backspace') {
        backspace();
    }
    else if (event.code == 'Enter' || event.code == 'NumpadEnter' ) {
         storeNumbers();
         operatorAssignment();
         combine();
         currentCalculation.innerText = ' '
         additionButton.classList.remove('operatorBorder');
         subtractionButton.classList.remove('operatorBorder');
         multiplicationButton.classList.remove('operatorBorder');
         divisionButton.classList.remove('operatorBorder');
    }

}, false);


