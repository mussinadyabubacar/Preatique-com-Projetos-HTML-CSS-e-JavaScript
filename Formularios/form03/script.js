const form = document.querySelector('#iform');
const inputName = document.querySelector('#inome');
const inputEmail = document.querySelector('#iemail');
const inputPwd = document.querySelector('#ipwd');
const inputpwdConfirm = document.querySelector('#ipwdconfirm');

// EVENTO DE SUBMISÃO DE FORMULÁRIO ONDE PREVENISMOS O PADRÃO DELE QUE É A SUBMISÃO.
form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    checkForm()

})



inputName.addEventListener('blur', () => {
    checkInputName()
})

inputEmail.addEventListener('blur', () => {
    checkInputEmail()
})

inputPwd.addEventListener('blur', () => {
    checkInputPwd()
})

inputpwdConfirm.addEventListener('blur', () => {
    checkInputPwdConfirm()
})

// FUNÇÃO QUE VERIFICAR SE O INPUT DO NOME ESTA VAZIO OU NÃO.
function checkInputName() {

    const erroMessage = document.querySelector('#erronome')

    if (inputName.value === '') {

        erroMessage.textContent = 'Nome de Usuário Obrigatório'

        erroInput(inputName);

    } else {

        const itemInput = inputName.parentElement;
        itemInput.className = 'form-content';
    }
}

// FUNÇÃO QUE VERIFICAR SE O INPUT DO E-MAIL ESTA VAZIO OU NÃO.
function checkInputEmail() {

    const erroMessage = document.querySelector('#erroemail')

    if (inputEmail.value === '') {

        erroMessage.textContent = 'O E-mail é Obrigatório'

        erroInput(inputEmail);

    } else {

        const itemInput = inputEmail.parentElement;

        itemInput.className = 'form-content';
    }
}


// FUNÇÃO QUE VERIFICAR SE O INPUT DO PASSWORD ESTA VAZIO OU NÃO E SE O VALOR TEM NO MINIMO 8 CARACTERE.
function checkInputPwd() {
    
    const erroMessage = document.querySelector('#erropwd')

    if (inputPwd.value === '') {

        erroMessage.textContent = 'Senha é Obrigatória.'

        erroInput(inputPwd);

    } else if (inputPwd.value.length < 8) {

        erroMessage.textContent = 'A Senha tem que ter no minimo 8 caracteres'

        erroInput(inputPwd);

    } else {

        const itemInput = inputPwd.parentElement;

        itemInput.className = 'form-content';
    }
}

// FUNÇÃO QUE CONFIRMA SE A SENHA É A MESMA DIGITADA ANTERIORMENTE.
function checkInputPwdConfirm() {

    const erroMessage = document.querySelector('#erropwdconfirm')

    if (inputpwdConfirm.value === '') {

        erroMessage.textContent = 'Confirmação da Senha é Obrigatório.'

        erroInput(inputpwdConfirm)

    } else if (inputpwdConfirm.value !== inputPwd.value) {

        erroMessage.textContent = 'A senha digitada não são iguais'

        erroInput(inputpwdConfirm)

    } else {

        const itemInput = inputpwdConfirm.parentElement;

        itemInput.className = 'form-content'
    }
}

// ESTA FUNÇÃO VERIFICA TODAS VALIDAÇÕES ANTES DE ENVIAR O FORMULÁRIO.
function checkForm() {

    checkInputName();
    checkInputEmail();
    checkInputPwd();
    checkInputPwdConfirm();

    const formItems = form.querySelectorAll('.form-content')

    const isValid = [...formItems].every( (item) => {
        return item.className === 'form-content'
    })

    if (isValid) {

        alert('CADASTRADO COM SUCESSO...')
    }
}

// A FUNÇÃO QUE MOSTRA O ERRO QUANDO O CAMPO DO INPUT ESTA VAZIA.
function erroInput(input) {
    
    const itemInput = input.parentElement;

    itemInput.className = 'form-content erro';
}

