const btn = document.querySelector(".btn")

btn.addEventListener('click', function () {

    const modal = document.querySelector("#janela-modal")
    modal.classList.add("open")

    modal.addEventListener('click', (event) => {

        if (event.target.id == 'close' || event.target.id == 'janela-modal') {
            
            modal.classList.remove("open")
        }
    })
})

