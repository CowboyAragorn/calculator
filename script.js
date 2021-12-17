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
numberSeven.value = 7

let numbersDisplayArray = []

//Adds numbers to an array, converts array to a string for display//
function addToDisplay (x){

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

//Sets up clear button to erase the visible screen. Will need to come back
//to erase hidden operation arrays//
let clearButton = document.querySelector('#clear')

function clearAll(){
    numbersDisplayArray = []
    screenNumbers.innerText = numbersDisplayArray
}

clearButton.addEventListener('click', clearAll)


//s
let answer
let primaryNumber

function storingForOperator(){

  let str =  numbersDisplayArray.join('')
  primaryNumber = parseInt(str); //will need to come back when adding decimals//
  numbersDisplayArray = [];
  screenNumbers.innerText = numbersDisplayArray
  console.log('primary number = ' + primaryNumber)
  return primaryNumber
}


let additionStageOne = document.querySelector('#addition');
additionStageOne.addEventListener('click', storingForOperator, false);
additionStageOne.addEventListener('click', ()=>{
    additionStageOne.id = "addition2";
    additionStageOne.removeEventListener('click', storingForOperator, false);
    let additionStageTwo = document.querySelector('#addition2')
    additionStageTwo.addEventListener('click', sum)
})


//additionStageOne.removeEventListener('click', storingForOperator, false);
//additionStageOne.addEventListener('click', sum, false);


/*
additionStageOne.id = "addition2"
let additionStageTwo = document.querySelector('#addition2')
additionStageTwo.addEventListener('click', sum)

*/

additionStageOne.removeEventListener





function sum(){
    console.log(numbersDisplayArray)
    let str =  numbersDisplayArray.join('')
    let secondaryNumber = parseInt(str); 
    console.log("primary number = " + primaryNumber + ' secondary number = ' + secondaryNumber)

    if(isNaN(secondaryNumber) == true){
        answer = primaryNumber + primaryNumber;
        primaryNumber = answer;
        numbersDisplayArray = [];
        screenNumbers.innerText = answer;
        return answer;
    }
    else{
        answer = primaryNumber + secondaryNumber;
        primaryNumber = answer;
        numbersDisplayArray = [];
        screenNumbers.innerText = answer;
        return answer;
    }
    
}


