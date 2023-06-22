let form = document.getElementById('iform')
let inputName = document.getElementById('inome')
let inputEmail = document.getElementById('iemail')
let inputpwd = document.getElementById('ipwd')

form.addEventListener('submit', function (event) {
    
    event.preventDefault()

    NomeValid()

})

function NomeValid() {
    
    if (inputName.value === "") {

        inputName.style.border = "1px solid red"
    } else {
        inputName.style.border = "1px solid blue"
    }


}

function validEmail() {

}