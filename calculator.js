
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
        inputValue(".")})

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

function undoLastAction () {
    return true;
}


function inputValue(x){
    if (nextInputIsValueB === false) {
        //broken here    
        if (total===0) {
            total = x;
        }
        else {
        total += ""+x;
        }
        screenResults.textContent = total;
    }
    else {
        if (valueB===0) {
            valueB = x;
        }
        else {
        valueB += ""+x;
        }
        screenResults.textContent = valueB;  
    }
};

function inputOperator (y) {
    if (valueB !== 0) {
        calculateNewTotal();
        nextInputIsValueB = false;
    }
    else {
    nextInputIsValueB = true; 
    }
    operator = y;
    screenEquation.textContent = total + " " + y;   
};

function calculateNewTotal() {
    screenEquation.textContent = total + " " + operator + " " + valueB + " =";
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
    screenResults.textContent = total;
    nextInputIsValueB = true;
}

//calculate functions

function calculateDivide(){
    total = (total / valueB);
}

function calculateMultiply(){
    total = (total * valueB);
}

function calculateMinus(){
    total = (total - valueB);
}

function calculatePlus(){
    total = (total + valueB);
}





//create a variable (valueA or total) which stores the first numberButton pressed
//create a variable (valueB) which stores the second numberButton pressed
//create a variable (operator) which stores the operator pressed

//some sort of switch
    //if operator has been pressed: active
        //if number is pressed
            //if value B !== 0, return calculation
            //if value B === 0, += valueB
    //if number is pressed: inactive
        //if number is pressed, += number to valueA/valueB
