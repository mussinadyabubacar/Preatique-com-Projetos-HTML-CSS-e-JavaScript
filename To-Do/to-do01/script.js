const inputText = document.querySelector('#inputtext');
const AddListBtn = document.querySelector('.inputtext-btn');
const ul = document.querySelector('.box-list');
const btnClearAll = document.querySelector('.btn-cl')

var ItensDB = [];

// ADICIONA OS VALORES AO NOSSO VETOR E CHAMA A FUNCAO QUE ATUALIZA O NOSSO LOCALSTORAGE.
function AddItemToItensBD() {

    ItensDB.push({'tarefa': inputText.value, 'status': ''});
    upDateLocalStorage();
}


// ENVIA ITENS AO NOSSO LOCALSTORAGE CONVERTIDO EM JSON
function upDateLocalStorage() {

    localStorage.setItem('Lista de Tarefas', JSON.stringify(ItensDB))
    processItem();

}


// FAZ O PROCESSAMENTO DE ITENS OU ATUALIZA O NOSSO VETOR COM OS DADOS ARMAZENADOS NO LOCALSTORAGE CONVERTENTO DE JSON PARA OBJETO E CHAMA A FUNCAO QUE ATUALIZA AS TAREFAS NA TELA.
function processItem() {

    ul.innerHTML = ''

    ItensDB = JSON.parse(localStorage.getItem('Lista de Tarefas'))

    ItensDB.forEach((item, i) => {
        
        addItemToScrean(item.tarefa, item.status, i)
        // console.log(i, item)

    });

}


// ATUALIZA AS TAREFAS NA TELA OU ADICIONA AS TAREFAS NA TELA DINAMICAMENTE
function addItemToScrean(tarefa, status, i) {

    ul.innerHTML += `<li class="list" data = ${i}>
    <div class="tarefa">
        <input type="checkbox" ${status} onchange='done(this, ${i})'>
        <span data-i = ${i}>${tarefa}</span>
    </div>
        <button onclick='removeItem(${i})' data-i = ${i}>Deletar</button
    </li>`

    if (status) {

        let li = document.querySelector(`[data = '${i}']`) 

        li.classList.toggle('bg')

        document.querySelector(`[data-i = '${i}']`).classList.toggle('done')
       
    }

    inputText.value = ''

}

function done(check, i) {

    if(check.checked) {

        ItensDB[i].status = 'checked'
        
    } else {

        ItensDB[i].status = ''
    }

    upDateLocalStorage()
}

function removeItem(i) {

    ItensDB.splice(i, 1);
    upDateLocalStorage()
}

inputText.addEventListener('keypress', (button) => {

    if (button.key === 'Enter' && inputText !== '') {

        AddItemToItensBD()
    }

})

btnClearAll.addEventListener('click', () => {

    ItensDB = []
    upDateLocalStorage()

})


AddListBtn.addEventListener('click', () => {

    if(inputText.value !== '') {

        AddItemToItensBD()

    }

})

processItem()