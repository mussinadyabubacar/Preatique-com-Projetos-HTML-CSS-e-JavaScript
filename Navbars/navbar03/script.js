// CRIANDO EVENTO QUE VAI FUNCIONAR QUANDO O USUARIO ROLAR A PAGINA
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('#navbar')

    // Adicione uma classe na minha variavel quando a rolagem no eixo Y for maior que 30
    navBar.classList.toggle('scroll', window.scrollY > 30)
})