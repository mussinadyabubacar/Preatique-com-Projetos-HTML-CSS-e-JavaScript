const resultadoNaTela = document.querySelector('.result');
const buttons = document.querySelectorAll('.input-button input');

// FINÇÃO QUE É RESPONSAVEL POR ADICIONAR APENAS NUMEROS NA TELA.
function adicionarDigito (digito) {
    
    if (digito >= 0 || digito === '.') {

        if (digito === '.' && (resultadoNaTela.value.includes('.') || resultadoNaTela.value === '')) {

            return;

        } else {

            resultadoNaTela.value += digito;
            // console.log(digito);

        }

    }
    
}

// FUNÇÃO QUE É RESPONSAVEL EM ADICIONAR APENAS OPERAÇÕES.
function adicionarOperador(operador) {
    
    if (['+', '-', '*', '/'].includes(operador)) {
        
        if (resultadoNaTela.value !== '') {

            trocaSinal()

            resultadoNaTela.value += operador;
            // console.log(operador);

        }

    }
    
}

// FUNÇÃO RESPONSAVEL EM ELIMINAR UM DIGITO POR VEZ.
function elimineUmValorPorVez(elimine) {
    
    if (elimine === 'DEL' && resultadoNaTela.value !== '') {

        resultadoNaTela.value = resultadoNaTela.value.slice(0, -1);
        // console.log(elimine);

    }

}

// FUNÇÃO RESPONSAVEL EM LIMPAR TODOS OS DIGITOS NA TELA.
function limpaTela(limpar) {

    if (limpar === 'AC' && resultadoNaTela.value !== '') {

        resultadoNaTela.value = '';
        // console.log(limpar);

    }

}

// FUNÇÃO RESPONSAVEL POR PROCESSAR O CALCULO.
function calcule(resultado) {

    if (resultado === '=' && resultadoNaTela.value !== '') {

        try {
            
            resultadoNaTela.value = eval(resultadoNaTela.value);
            // console.log(limpar);

        } catch {
            
            alert('Math ERROR');
            resultadoNaTela.value = '';

        }

    }

}

// FUNÇÃO RESPONSAVEL EM FAZER TROCA DE SINAIS
function trocaSinal() {
    
    const ultimoElementoInput = resultadoNaTela.value[resultadoNaTela.value.length -1];
    
    // console.log(ultimoElementoInput, !+ultimoElementoInput, typeof ultimoElementoInput)

    if (ultimoElementoInput && !+ultimoElementoInput && ultimoElementoInput != 0) {

        resultadoNaTela.value = resultadoNaTela.value.slice(0, -1);
        
    }
    
}

// FUNÇÃO QUE TROCA O SINAL DE UM NUMERO POSITIVO PARA NEGATIVO E DE NEGATIVO PARA POSITIVO
function negativoParaPositivo(viceverce) {

    if (viceverce === '+/-' && +resultadoNaTela.value) {

        resultadoNaTela.value = resultadoNaTela.value * -1;

    }
}

// FUNÇÃO MÃE
buttons.forEach ( (button) => {

    const buttonValue = button.value;
    
    button.addEventListener('click', () => {
        
        adicionarDigito(buttonValue);
        adicionarOperador(buttonValue);
        elimineUmValorPorVez(buttonValue);
        limpaTela(buttonValue);
        negativoParaPositivo(buttonValue);
        calcule(buttonValue);
        
    })

})