const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('.button-box button');


class calculator {

    constructor(previousOperationText, currentOperationText) {

        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = '';

    };

    // ADICIONAR DIGITOS NA TELA DA CALCULADORA
    addDigit(digit) {

        // VERIFICAR SE A OPERAÇÃO EM ANDAMENTO JÁ TEM UM PONTO (.)
        if (digit === '.' && this.currentOperationText.textContent.includes('.')) {

            return;

        };

        this.currentOperation = digit;

        this.updateScrean();

    };

    // PROCESSAR TODAS AS OPERAÇÕES DA CALCULADORA
    processOperation(operation) {

        // VERIFICA SE O VALOR ATUAL ESTA VAZIA
        if (this.currentOperationText.innerHTML === '' && operation !== "C") {

            // MUNADA A OPERACAO
            if (this.previousOperationText.innerHTML !== '') {

                this.changeOpration(operation);
            }

            return;
        }

        // PEGAR O VALOR ATUAL E O ANTERIOR
        let operationValue;
        const previous = +this.previousOperationText.innerHTML.split(' ')[0];
        const current = +this.currentOperationText.innerHTML;

        switch (operation) {

            case '+' :

                operationValue = previous + current;

                this.updateScrean(operationValue, operation, current, previous)

            break;

            case '-' :

                operationValue = previous - current;

                this.updateScrean(operationValue, operation, current, previous)

            break;

            case '*' :

                operationValue = previous * current;

                this.updateScrean(operationValue, operation, current, previous)

            break;

            case '/' :

                operationValue = previous / current;

                this.updateScrean(operationValue, operation, current, previous)

            break;

            case 'DEL' :

                this.processDelOperation()

            break;

            case 'CE' :

                this.processClearCurrentOperation()

            break;

            case 'C' :

                this.processClearAllOperation()

            break;

            case '=' :

                this.processEqualoperation()

            break;

            default :
                return;
        }

    }

    // ATUALIZAR O VALOR NA TELLA DA CALCULADORA
    updateScrean(

        operationValue = null,
        operation = null,
        current = null,
        previous = null

    ) {

        if (operationValue === null) {

            this.currentOperationText.innerHTML += this.currentOperation;

        } else {

            // VERIFICAR SE O VALOR É 0, SE FOR ADICIONAR O VALOR ATUAL
            if (operationValue === 0) {

                operationValue = current;

            }

            // ADICIONA O VALOR NA TELA ANTERIOR
            this.previousOperationText.innerHTML = `${operationValue} ${operation}`;
            this.currentOperationText.innerHTML = '';
        }

    };

    // MUDAR AS OPERACOES MATEMATICAS
    changeOpration(operation) {

        const mathOperations = ['+', '-', '*', '/'];

        if (!mathOperations.includes(operation)) {

            return;
        }

        this.previousOperationText.innerHTML = this.previousOperationText.innerHTML.slice(0, -1) + operation;
    }

    // ELIMINA O ULTIMO VALOR ATUAL
    processDelOperation() {

        this.currentOperationText.innerHTML = this.currentOperationText.innerHTML.slice(0, -1);
        

    }

    // LIMPA TODOS OS VALORES ATUAIS
    processClearCurrentOperation() {

        this.currentOperationText.innerHTML = '';

    }

    //  LIMPA TODAS OS VALORES ATUAIS ASSIM COMO ANTERIORES
    processClearAllOperation() {

        this.previousOperationText.innerHTML = '';
        this.currentOperationText.innerHTML = '';

    }

    processEqualoperation() {

        const operation = previousOperationText.innerHTML.split(' ')[1];

        this.processOperation(operation)

    }

};

// INFORMAÇÕES PARA ADICIONAR NO CONSRTRATOR
const calc = new calculator(previousOperationText, currentOperationText);

buttons.forEach( (button) => {

    button.addEventListener('click', (event) => {

        const value = event.target.innerHTML;
        
        if (+value >= 0 || value === '.') {

            calc.addDigit(value);

        } else {

            calc.processOperation(value)

        };

    });

});