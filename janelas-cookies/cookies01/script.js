const confirmBtn = document.querySelector('#confirm')
const cookieBox = document.querySelector('#cookie-box')

confirmBtn.addEventListener('click', () => {

    localStorage.msgCookie = 'yes'

    cookieBox.classList.remove('show')
    
})

if (localStorage.msgCookie !== 'yes') {

    cookieBox.classList.add('show')

} else {

    cookieBox.classList.remove('show')

}