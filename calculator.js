
//Esatblish constants for specific elements & buttons
const screenResults = document.querySelector(".screen-results");
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
