
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
        if (total===0) {
                    //2nd contdition does not work properly
                    // I think we need a valueA and a valueB
                    //if it's the first cycle, we use total and ValueB
                    //if it's the 2nd cycle, we get inputs for valueA
                        //doesn't make sense - we should just be inputting valueB
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
    valueB = 0;
}

//calculate functions

function calculateDivide(){
    total = (parseInt(total) / parseInt(valueB));
}

function calculateMultiply(){
    total = (parseInt(total) * parseInt(valueB));
}

function calculateMinus(){
    total = (parseInt(total) - parseInt(valueB));
}

function calculatePlus(){
    total = (parseInt(total) + parseInt(valueB));
}



//Need to resolve:
//You should round answers with long decimals so that they don’t overflow the screen.
//Pressing = before entering all of the numbers or an operator could cause problems!
//Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
//Backspace button
//EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
//add keyboard supports
//add commas
