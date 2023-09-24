/* Podemos utilizar funções async dentro do Promise.all(), afinal elas retornam uma
promise. Porém, como o próprio Promise.all() retorna uma promise também podemos utilizar
o await com ele. No código abaixo vemos que a função .map() está retornando um array de promises pendentes:

Obs.: a função waitFor() é apenas uma forma simples de fazer o código esperar por uma quantidade
arbitrária de tempo, assim simulamos um código que demora a ser executado. */

function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 5, 9, 13, 77]

async function execute() {
    console.time('map')

    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))

    console.log(squares)

    console.timeEnd('map')
}

execute()