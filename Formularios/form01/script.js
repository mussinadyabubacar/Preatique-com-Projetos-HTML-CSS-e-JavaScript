
function Show() {

    let inputpass = document.getElementById('ipwd')
    let icon = document.getElementById('icon')

    if (inputpass.type === "password") {

        inputpass.setAttribute('type', 'text')
        icon.classList.replace('fa-eye', 'fa-eye-slash')

    } else {

        inputpass.setAttribute('type', 'password')
        icon.classList.replace('fa-eye-slash', 'fa-eye')

    }
}