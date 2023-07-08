const form = document.getElementById('form')
let inputList = document.getElementById('inputlist')
let ul = document.getElementById('lista')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const valor = inputList.value

    if (valor == "") {

        alert('O campo esta vazio adicione um item')

    } else {

        let li = document.createElement('li')
        li.textContent = valor

        let span = document.createElement('span')
        span.textContent = 'x'

        li.appendChild(span)
        ul.appendChild(li)
        
        span.addEventListener('click', function (){
            if (confirm("Deseja apagar o item?")) {
    
                li.remove()
            }
        })
    }

    /* ul.innerHTML += `<li>${valor} <span>x</span></li>` 

    Esta é umas das outras formas de criar um elemento atraves do js*/

    inputList.value = "";

    
})