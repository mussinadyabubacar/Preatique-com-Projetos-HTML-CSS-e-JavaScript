const resultScrean = document.querySelector('.result');
const buttons = document.querySelectorAll('.button-box button');
let currentNumber = '';
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {

    // resultScrean.textContent = originClear ? 0 : currentNumber.replace('.', ',')

    if (resultScrean.textContent = originClear) {

        resultScrean.textContent = 0;

    } else {

        resultScrean.textContent = currentNumber;

    }

}


function addDigit(digit) {

    if (digit === '.' && resultScrean.textContent.includes('.')) {

        return;

    }

    if (restart) {

        currentNumber = digit;

        restart = false;

    } else {

        currentNumber += digit;

    }

    updateResult()

}


function setOperator(newOperator) {

    if (currentNumber) {

        calculateAll()

        // currentNumber += newOperator
        firstOperand = +currentNumber;
        currentNumber = "";

    }

    operator = newOperator;

}


function calculateAll() {

    if (operator === null || firstOperand === null) {

        return;

    }

    let secondOperand = +currentNumber;
    let resultValue;

    switch (operator) {

        case '+' :

            resultValue = firstOperand + secondOperand;

        break;

        case '-' :

            resultValue = firstOperand - secondOperand;

        break;

        case 'x' :

            resultValue = firstOperand * secondOperand;

        break;

        case '÷' :

            resultValue = firstOperand / secondOperand;

        break;

        default :
            return;
    }

        currentNumber = resultValue

    operator = null;
    firstOperand = null;
    restart = true;
    updateResult()
}

function clear() {

    currentNumber = ''
    operator = null;
    firstOperand = null;
    updateResult(true)
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const buttonValue = button.textContent;

        if (+buttonValue >= 0 || buttonValue === '.') {


            addDigit(buttonValue)

        } else if (['+', '-', 'x', '÷'].includes(buttonValue)) {

            setOperator(buttonValue);

        } else if (buttonValue === '=') {

            calculateAll()

        } else if (buttonValue === 'C') {

            clear()

        }
    })
})