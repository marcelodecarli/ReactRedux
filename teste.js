
function gerarNumeros(qtde) {

    let numerosDaSorte = []

    for (let i = 0; i <= qtde - 1; i++) {

        let num = Math.random() * (60 - 1) + 1

        if (!numerosDaSorte.includes(num)) {
            numerosDaSorte.push(Math.floor(num));
        }


    }
    return numerosDaSorte
}

console.log(gerarNumeros(7))

