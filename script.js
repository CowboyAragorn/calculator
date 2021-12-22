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

let numbersDisplayArray = []

//Adds numbers to an array, converts array to a string for display//
function addToDisplay(x) {

    screenNumbers.innerText = " "
    numbersDisplayArray.push(x);
    screenNumbers.innerText = numbersDisplayArray.join('');

}



//Event listeners for each button. Probably a more elegant way to do this,
//but was a simple copy paste//

numberZero.addEventListener("click", () => {
    addToDisplay(0)
});

numberOne.addEventListener("click", () => {
    addToDisplay(1)
});

numberTwo.addEventListener("click", () => {
    addToDisplay(2)
});

numberThree.addEventListener("click", () => {
    addToDisplay(3)
});

numberFour.addEventListener("click", () => {
    addToDisplay(4)
});

numberFive.addEventListener("click", () => {
    addToDisplay(5)
});

numberSix.addEventListener("click", () => {
    addToDisplay(6)
});

numberSeven.addEventListener("click", () => {
    addToDisplay(7)
});

numberEight.addEventListener("click", () => {
    addToDisplay(8)
});


numberNine.addEventListener("click", () => {
    addToDisplay(9)
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
        console.log('something is broken!')
        return
    }

}



//Current bug that happens when you press an operator twice
equalButton.addEventListener('click', () =>{
    storeNumbers();
    operatorAssignment();
    combine();
    currentCalculation.innerText = ' '
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
})


clearButton.addEventListener('click', clear);

//clears. Probably need to make it default to zero.
function clear(){
    currentOperation = ' ';
    numbersDisplayArray = [];
    calculationArray = [];
    screenNumbers.innerText = ' ';
    currentCalculation.innerText = ' '
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
}



//adds numbers to the calculation array based on what was typed into 
//the calc
function storeNumbers() {
    let str = numbersDisplayArray.join('')
//defaults to 0 if nothing typed. Defaults to 1 if selecting mult or div//
    if (str === '' && (currentOperation === 'multiplication' || currentOperation ==='division')){
        str = '1'
    }
    else if (str === '') {
        str = '0'
    }
    addToCalc = parseInt(str); //will need to come back when adding decimals//
    calculationArray.push(addToCalc)
    console.log('calculationArray = ' + calculationArray)
    //Resets number display so that a new number can be typed in and parsed
    numbersDisplayArray = [];
    screenNumbers.innerText = addToCalc;
}


function combine(){
    //This if statement assigns the second number for the equal sign so that
    //you can continue to press equals to add last number typed
    divideBy0Checker = false;
    if(calculationArray[1] == undefined){
        calculationArray[1] = storageNumberForEquals;
    }
    storageNumberForEquals = calculationArray[1];
    if(currentOperation === 'division' && calculationArray[1] === 0){
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
}




//This is here to reset values while chaining operators. They values were not storing correctly without this function.//
function afterCombineForOperators(){
    if(currentOperation === 'division' && calculationArray === []){
        return
    }
    else{
    numbersDisplayArray = []
    calculationArray = [display] //Calc array was being completely reset, this solves by equaling last total//
    screenNumbers.innerText = display
    additionButton.classList.remove('operatorBorder');
    subtractionButton.classList.remove('operatorBorder');
    multiplicationButton.classList.remove('operatorBorder');
    divisionButton.classList.remove('operatorBorder');
    }
}



