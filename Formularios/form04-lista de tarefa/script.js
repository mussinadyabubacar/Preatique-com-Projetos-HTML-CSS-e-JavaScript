// ADICIONADO LISTAS DE TAREFAS

function addList() {

    const inputValue = document.querySelector('#addinput').value
    const ul = document.querySelector("#list")
    let template = document.querySelector('.template')
    let li = template.cloneNode(true)
    li.querySelector('.item').textContent = inputValue

    if (inputValue === "") {

        alert("LISTA VAZIA ADICIONE A SUAS TAREFAS")

    } else {

        ul.appendChild(li)
        li.classList.remove('template')
        li.classList.remove('hidden')

        li.querySelector(".end").addEventListener('click', function () {
            li.classList.toggle('done')
        })

        li.querySelector(".delete").addEventListener('click', function () {
            li.remove()
        })

    }

    inputValue = document.querySelector('#addinput').value = "";
}


const form = document.querySelector('#form')

form.addEventListener("submit", function (event) {

    event.preventDefault()

    addList()
})