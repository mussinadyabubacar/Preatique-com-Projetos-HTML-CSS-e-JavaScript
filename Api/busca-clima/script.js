const input = document.querySelector('#itempo');
const button = document.querySelector('#verificar')

const showBox = document.querySelector('.box');
const localizacao = document.querySelector('#lugar');
const graus = document.querySelector('#graus');
const veloVento = document.querySelector('#vento');
const imagem = document.querySelector('#img');
const estado = document.querySelector('#estado')

button.addEventListener('click', () => {

    if (!input.value) {
        
        alert('Ops!: Fez uma busca Vazia')

    } else {

        buscaTempo();

    }

})


async function buscaTempo() {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=8f0b394a6bca95af2c89cc9369a76a10&lang=pt_br`


        // https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=8f0b394a6bca95af2c89cc9369a76a10`

        // https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}

    try {
        
        await fetch(url)
            .then((resposta) => resposta.json())
            .then((data) => {

                if(data?.cod && data.cod === "404") {

                    return alert('Ops!: Loca não encontrado...')

                } else {

                    processarDados(data)
                    
                }

            })
    } catch (error) {
        
        console.log(error)

    }

}

function processarDados(dados) {

    localizacao.textContent = `${dados.name}, ${dados.sys.country}`
    graus.textContent = `Temperatura: ${Math.floor(dados.main.temp)} ℃`
    veloVento.textContent = `Velocidade do Vento: ${dados.wind.speed} km/h`
    estado.textContent = `Descrição: ${dados.weather[0].description}`

    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    
    showBox.style.display = "block"
}