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



let primaryNumber 
let secondaryNumber
let currentOperation
let reducer
let display;
let calculationArray = []
let storageNumberForEquals
let addToCalc
let additionButton = document.querySelector("#addition")
let equalButton = document.querySelector('#equals')
let clearButton = document.querySelector('#clear')





//Capture a number and make sure that the sign is addition
additionButton.addEventListener("click",() =>{
    storeNumbers()
    currentOperation = 'addition'
})

equalButton.addEventListener('click', () =>{
    storeNumbers();
    if(currentOperation === 'addition'){
        reducer = (x,y) => x + y;
        //reducer = calculationArray[0] + calculationArray[1];
        sum();
    }
    else{
        console.log('something is broken!')
        return 
    }
})


clearButton.addEventListener('click', clear);

//clears. Probably need to make it default to zero
function clear(){
    currentOperation = ' ';
    numbersDisplayArray = [];
    calculationArray = [];
    screenNumbers.innerText = ' ';
}



//adds numbers to the calculation array based on what was typed into 
//the calc
function storeNumbers() {
    let str = numbersDisplayArray.join('')
    addToCalc = parseInt(str); //will need to come back when adding decimals//
    calculationArray.push(addToCalc)
    console.log('calculationArray = ' + calculationArray)
    //Resets number display so that a new number can be typed in and parsed
    numbersDisplayArray = [];
    screenNumbers.innerText = addToCalc;
}


function sum(){
    //This if statement assigns the second number for the equal sign so that
    //you can continue to press equals to add last number typed
    if(calculationArray[1] == undefined){
        calculationArray[1] = storageNumberForEquals;
    }
    storageNumberForEquals = calculationArray[1]
    display = calculationArray.reduce(reducer);
    console.log('display = ' + display)
//number display has to equal the calculation so that it is captured by next
//storing
    numbersDisplayArray = [display];
//calculation array has to be reset so that adding only evaluates two numbers
    calculationArray = [];
    console.log('calculationArray after sum = ' + calculationArray)
    screenNumbers.innerText = display;
}







//Original code for addition with a bunch of event listeners and odd combinations//
/* 

//sum//
let answer
let primaryNumber
let secondaryNumber
let backupSecondaryNumber



function storingPrimaryNumber() {
    console.log('store ' + numbersDisplayArray)
    let str = numbersDisplayArray.join('')
    primaryNumber = parseInt(str); //will need to come back when adding decimals//
    numbersDisplayArray = [];
    screenNumbers.innerText = primaryNumber;
    console.log('primary number = ' + primaryNumber)
    additionStageOne.removeEventListener('click', storingPrimaryNumber, false);
    additionStageOne.addEventListener('click', sum)
    equalsStageOne.addEventListener('click', sum)
    return primaryNumber
}


//Sets up clear button to erase the visible screen. Will need to come back
//to erase hidden operation arrays//
let clearButton = document.querySelector('#clear')

function clearAll() {
    numbersDisplayArray = []
    screenNumbers.innerText = numbersDisplayArray
    primaryNumber = 0
    secondaryNumber = 0
    backupSecondaryNumber = 0
    answer = 0
    additionStageOne.removeEventListener('click', sum)
    equalsStageOne.removeEventListener('click', sum, false)
    additionButton();
    console.log(numbersDisplayArray);
}

clearButton.addEventListener('click', clearAll)




//adds a first event listener that stores the FIRST value typed into the calculator
//then it changes the ID of the addition sign so that I can type a new array and run the sum function
//removes the old event listener so that it stops storing primary value
let additionStageOne = document.querySelector('#addition');

function additionButton() {

    additionStageOne.addEventListener('click', storingPrimaryNumber, false);
    //after number is stored, removes storage and starts summing on next +
    //activates the equal sign with sum to continue adding
   
}
additionButton();


//takes in second input, parses string into integer, then adds on next press
function sum() {
    console.log(numbersDisplayArray)
    let str = numbersDisplayArray.join('')
    secondaryNumber = parseInt(str);
    console.log("primary number = " + primaryNumber + ' secondary number = ' + secondaryNumber)
    //This is here to add if no additional number is typed. Returns answer plus
    //last number inputted
    if (isNaN(secondaryNumber) == true) {
        console.log("answer + Primary Number " + answer + primaryNumber)
        answer = answer + backupSecondaryNumber;
        primaryNumber = answer;
        numbersDisplayArray = [];
        screenNumbers.innerText = answer;
        return answer;
    }
    //traditional x+y. 
    else {
        backupSecondaryNumber = secondaryNumber;//backup secondary used above to keep track if no additional secondary put in
        answer = primaryNumber + secondaryNumber;
        primaryNumber = answer;
        numbersDisplayArray = [];
        screenNumbers.innerText = answer;
        return answer;
    }
}


//equals//
let equalsStageOne = document.querySelector("#equals")



//resets the addition sign so that you can add in a new number for your secondary

equalsStageOne.addEventListener('click', () => {
    additionStageOne.removeEventListener('click', sum);

})


*/