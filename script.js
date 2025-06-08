const display = document.getElementById("display");


const operators = {            // mathematical operator operation on two numbers a and b
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

function appendToDisplay(input) {        //add numbers or operators to the display.

    const secondLastChar = display.value.charAt(display.value.length - 1);

    console.error(typeof (lastChar));
    if ((secondLastChar === '+' || secondLastChar === '-' || secondLastChar === '*' || secondLastChar === '/' || secondLastChar === '.') && (input === '+' || input === '-' || input === '*' || input === '/' || input === '.')) {

        display.value = display.value.slice(0, -1);
        display.value += input;

    }
    else {
        display.value += input;
    }

}

function cleardisplay() {  // they can empty the input value
    display.value = "";
}

function calculate() {

    const input = display.value.trim();          // they gain value to  variable input
    let operator;
    let operands;                     // Two variables, operator and operands, are declared

    for (let op in operators) {     // they are check , operator are present in input
        if (input.includes(op)) {
            operator = op;
            operands = input.split(op); // they can split input to define operator and numbers
            break;
        }
    }

    if (operands && operands.length === 2) {   // they are check if they are two element ,they perform calculate
        const a = parseFloat(operands[0].trim());
        const b = parseFloat(operands[1].trim());  // These lines converting the two operands from strings to  numbers

        if (!isNaN(a) && !isNaN(b)) {            //This checks if both a and b are valid numbers
            const result = operators[operator](a, b); //the result is stored in the variable result.
            display.value = result; //The result of the calculation is displayed in the display element.

        } else {
            display.value = "Error"; //If two or one, a or b is not a valid number, the display is set to "Error"
        }
    } else {
        display.value = "Error";
    }

}
