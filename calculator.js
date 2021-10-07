
//Esatblish constants for specific elements & buttons
const screenResults = document.querySelector(".screen-results");
const screenEquation = document.querySelector(".screen-equation");
const buttonClearScreen = document.querySelector("#clear-screen");
const buttonDelete = document.querySelector("#delete");
const button0 = document.querySelector("#zero");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const buttonDecimal = document.querySelector("#decimal");
const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const buttonMinus = document.querySelector("#minus");
const buttonPlus = document.querySelector("#plus");
const buttonEquals = document.querySelector("#equals");

//establish constants for button groupings
const primaryButtons = document.querySelector(".primary-button");
const numberButtons = document.querySelector(".number");
const operatorButtons = document.querySelector(".operator");


screenResults.textContent = "0";
screenEquation.textContent = "";


let total = 0;
let valueB = 0;
let operator = "";
let nextInputIsValueB = false;

//Event listener for keypad
document.addEventListener('keydown', logKey);

function logKey(e) {
    keyInput = e.key;
  if ((keyInput <=9 && keyInput >=0)){
    inputValue(keyInput);
  }
  else if (keyInput == ".") {
      inputDecimal();
  }
  else if (keyInput == "/") {
    inputOperator("/");
  }
  else if (keyInput == "*" || keyInput == "x") {
    inputOperator("x");
  }
  else if (keyInput == "-") {
    inputOperator("-");
  }
  else if (keyInput == "+" || keyInput == "Enter") {
    inputOperator("+");
  }
  else if (keyInput == "=") {
    calculateNewTotal();
  }
  else if (keyInput == "Backspace" || keyInput == "Delete") {
    undoLastAction();
  }
  else return;
}

//Event listeners for numbers
button0.addEventListener('click', function(){
    inputValue(0)})
button1.addEventListener('click', function(){
    inputValue(1)})
button2.addEventListener('click', function(){
    inputValue(2)})
button3.addEventListener('click', function(){
    inputValue(3)})
button4.addEventListener('click', function(){
    inputValue(4)})
button5.addEventListener('click', function(){
    inputValue(5)})
button6.addEventListener('click', function(){
    inputValue(6)})
button7.addEventListener('click', function(){
    inputValue(7)})
button8.addEventListener('click', function(){
    inputValue(8)})
button9.addEventListener('click', function(){
    inputValue(9)})
buttonDecimal.addEventListener('click', function(){
        inputDecimal()})

//Event listeners for operators
buttonDivide.addEventListener('click', function(){
    inputOperator("/")})
buttonMultiply.addEventListener('click', function(){
    inputOperator("x")})
buttonMinus.addEventListener('click', function(){
    inputOperator("-")})
buttonPlus.addEventListener('click', function(){
    inputOperator("+")})

//Event listener for equals
buttonEquals.addEventListener('click', calculateNewTotal);

//Event listeners for clear & delete buttons
buttonClearScreen.addEventListener('click', clearScreen);
buttonDelete.addEventListener('click', undoLastAction);

function clearScreen () {
    total = 0;
    valueB = 0;
    operator = "";
    nextInputIsValueB = false;
    screenResults.textContent = total;
    screenEquation.textContent = "";
}


function inputDecimal(){
    total = total.toLocaleString('fullwide', {useGrouping:false});
    valueB = valueB.toLocaleString('fullwide', {useGrouping:false});
    if (nextInputIsValueB === true)  {
        if (valueB.includes(".")) {
            return;
        }
        else {
            inputValue(".");
        }
    }
    else {
        if (total.includes(".")) {
            return;
        }
        else {
            inputValue(".");
        }
    }
}

function inputValue(x){
    if (nextInputIsValueB === false) { 
        if (total===0) {
            total = x;
        }
        else {
        total += ""+x;
        }
        screenResults.textContent = displayValue(total);
    }
    else {
        if (valueB===0) {
            valueB = x;
        }
        else {
        valueB += ""+x;
        }
        screenResults.textContent = displayValue(valueB);  
    }
};

function inputOperator (y) {
    if (valueB !== 0) {
        calculateNewTotal();
    }
    else {
    nextInputIsValueB = true; 
    }
    operator = y;
    screenEquation.textContent = displayValue(total) + " " + y;   
};

function calculateNewTotal() {
    if (operator === "/" && (parseFloat(valueB) ===0)){
        screenResults.textContent = "Error";
        screenEquation.textContent = "You can't divide by zero - not even here.";
    } else if (valueB !==0) {
        screenEquation.textContent = displayValue(total) + " " + operator + " " + displayValue(valueB) + " =";
        if (operator === "/"){
            calculateDivide();
        }
        else if (operator === "x") {
            calculateMultiply();
        }
        else if (operator === "-") {
            calculateMinus();
        }
        else if (operator === "+") {
            calculatePlus();
        }
        else {
            screenResults.textContent = "Oops..."
        }
        screenResults.textContent = displayValue(total);
        nextInputIsValueB = true;
        valueB = 0;
} else if (valueB === 0) {
    operator = "";
    screenResults.textContent = displayValue(total);
    screenEquation.textContent = displayValue(total);
}
else return false;
}


//calculate functions

function calculateDivide(){
    total = (parseFloat(total) / parseFloat(valueB));
}

function calculateMultiply(){
    total = (parseFloat(total) * parseFloat(valueB));
}

function calculateMinus(){
    total = (parseFloat(total) - parseFloat(valueB));
}

function calculatePlus(){
    total = (parseFloat(total) + parseFloat(valueB));
}

//return a max of 15 value with commas
function displayValue (value){
    valueString = (value).toLocaleString('fullwide', {useGrouping:false});
    valueTruncated= valueString.slice(0, 12)
    valuePostDecimal = "";
    if (valueString.includes(".")){
        splitString = valueString.split(".");
        valueTruncated = splitString[0];
        valuePostDecimal = "." + splitString[1];
    }
        valueTruncatedLength = valueTruncated.length;
        if (valueTruncatedLength<=3 ) {
            valuetoDisplay = valueTruncated + valuePostDecimal;
        }
        else if (valueTruncatedLength <=6) {
            valuetoDisplay = valueTruncated.slice(0, valueTruncatedLength-3) + "," + valueTruncated.slice(valueTruncatedLength-3, valueTruncatedLength) + valuePostDecimal;
        }
        else if(valueTruncatedLength<=9) {
            valuetoDisplay = valueTruncated.slice(0, valueTruncatedLength-6) + "," + valueTruncated.slice(valueTruncatedLength-6, valueTruncatedLength-3) + "," + valueTruncated.slice(valueTruncatedLength-3, valueTruncatedLength) + valuePostDecimal;
        }
        else {
        valuetoDisplay = valueTruncated.slice(0, valueTruncatedLength-9) + "," + valueTruncated.slice(-9, valueTruncatedLength-6) + "," + valueTruncated.slice(valueTruncatedLength-6, valueTruncatedLength-3) + "," + valueTruncated.slice(valueTruncatedLength-3, valueTruncatedLength) + valuePostDecimal;   
        }
        return valuetoDisplay.slice(0, 15);
    }
    //valueWithCommas = valueString.slice();
    //return valueToDisplay;

//backspace button
function undoLastAction () {
    if (nextInputIsValueB === false) {
        undoLastActionTotal();
    }
    else {undoLastActionValueB();}
    }


function undoLastActionValueB(){
    let value = "";
    value = valueB;
    valueString = displayValue(value);
    valueLength = valueString.length;
    valueShortened = valueString.slice(0,valueLength-1).replace(",","");
    valueShortened = valueShortened.slice(0,valueLength-1).replace(",","");
    valueShortened = valueShortened.slice(0,valueLength-1).replace(",","");
    valueB = valueShortened;
    screenResults.textContent = displayValue(valueShortened);
    if (valueB == "" || valueB === 0) {  
        valueB = 0;
        screenResults.textContent = valueB;
    }}

function undoLastActionTotal (){
    let value = "";
    value = total;
    valueString = displayValue(value);
    valueLength = valueString.length;
    valueShortened = valueString.slice(0,valueLength-1).replace(",","");
    valueShortened = valueShortened.slice(0,valueLength-1).replace(",","");
    valueShortened = valueShortened.slice(0,valueLength-1).replace(",","");
    total = valueShortened;
    screenResults.textContent = displayValue(valueShortened);
    if (total == "" || total === 0) {  
        total = 0;
        screenResults.textContent = total;
    }}
    //NEED IF STATEMENT FOR IF EDITING VALUEb

//Need to resolve:
//add keyboard supports
//add commas
