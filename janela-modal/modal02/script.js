const btn = document.querySelector(".btn")
const modal = document.querySelector("#janela-modal")
const close = document.querySelector("#close")


btn.addEventListener('click', function () {

    modal.classList.add('open')

    modal.addEventListener('click', (e) => {

        if (e.target.id == 'janela-modal') {

            modal.classList.remove('open')
            
        }

    })

    close.addEventListener('click', () => {

        modal.classList.remove('open')
    })
})
    


