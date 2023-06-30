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

    if (digit === '.' && currentNumber.includes('.')) {

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

 
    if (resultValue.toString().split('.')[1]?.length > 5) {

        currentNumber = +resultValue.toFixed(5).toString();

    } else {

        currentNumber = resultValue.toString();

    }

    operator = null;
    firstOperand = null;
    restart = true;
    updateResult()
}


buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const buttonValue = button.textContent;

        if (+buttonValue >= 0 || buttonValue === '.') {


            addDigit(buttonValue)

        } else if (['+', '-', 'x', '÷'].includes(buttonValue)) {

            setOperator();

        } else if (buttonValue === '=') {

            calculateAll()

        }
    })
})