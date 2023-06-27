let form = document.getElementById('iform')
let inputName = document.getElementById('inome')
let inputEmail = document.getElementById('iemail')
let inputpwd = document.getElementById('ipwd')
let selectJob = document.querySelector('#ijob')

// EVENTO DE SUBMISÃO DO FORMULÁRIO
form.addEventListener('submit', (event) => {

    // NÃO FAÇA A SUBMISÃO ATÉ QUE AS VALIDAÇÕES TERMINEM.
    event.preventDefault()

    // VERIFICAR SE O CAMPO DE NOME ESTA VAZIA OU NÃO.
    if (inputName.value === '') {

        alert('POR FAVOR! VERIFIQUE O CAMPO DE NOME ESTA VAZIA.')
        return;
    }

    // VERIFICAR SE O CAMPO DE E-MAIL ESTA VAZIA OU SE O E-MAIL É VALIDO
    if (inputEmail.value === '' || !validEmail(inputEmail.value)) {

        alert('POR FAVOR! VERIFIQUE O CAMPO DE E-MAIL NÃO ESTA BEM PREENCHIDA.')
        return;
    }

    // VERIFICAR SE A SENHA É VALIDA.
    if (!validPassword(inputpwd.value, 8)) {

        alert('POR FAVOR! VERIFIQUE O CAMPO DE PASSWORD O DIGITO TEM QUE SER MAIOR OU IGUAL A 8 PALAVRAS.')
        return;
    }

    // VERIFICAR SE A SITUAÇÃO DE TRABALHO FOI SELECIONADO OU NÃO
    if (selectJob.value === '') {

        alert('POR FAVOR! SELECIONE A SUA SITUAÇÃO DE TRABALHO NO CAMPO ABAIXO.')
        return;
    }


    // SE TODAS AS VALIDAÕES FORMEM VERIFICADAS ENTÃO FAÇA SUBMISÃO.
    form.submit();
})

// FUNÇÃO VERIFICAR SE O E-MAIL É VALIDO COM UMA REGEX.
function validEmail(email) {

    // criar uma regex para validar o e-mail
    const emailRegex = new RegExp (

        // user12@gmail.com.br => este é o nosso padrão
        /^[a-zA-z0-9._-]+@[a-z]+\.[a-z]{2,}$/
    )

    if (emailRegex.test(email)) {

        return true

    } else {

        return false
    }
}


// VERIFICAR SE A SENHA É VALIDA.
function validPassword(pwd, minDigit) {

    if (pwd.length >= minDigit) {

        return true

    } else {

        return false
    }
} 