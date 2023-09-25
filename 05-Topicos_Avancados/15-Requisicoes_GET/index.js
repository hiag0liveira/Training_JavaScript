/* Requisições HTTP de forma dinâmica, um recurso extremamente importante
nos dias de hoje como programador web.E iremos começar com as requisições
mais simples, as requisições GET, que servem para obter informações de
um back - end.Como exemplo iremos utilizar a Rest Countries, uma API pública
que não necessita de autenticação e nos retorna dados sobre os países do mundo. */

function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    card.append(name, flag)
    document.querySelector('#countries').append(card)
}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    console.log(countries)
    countries.forEach(createCountryCard)
}

getCountries()