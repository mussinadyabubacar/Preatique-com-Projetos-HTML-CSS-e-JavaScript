const btn = document.querySelector(".btn")
const modal = document.querySelector("#janela-modal")

btn.addEventListener('click', function () {

    modal.classList.add("open")

    modal.addEventListener('click', (event) => {

        if (event.target.id == 'close' || event.target.id == 'janela-modal') {
            
            modal.classList.remove("open")
        }
    })
})

