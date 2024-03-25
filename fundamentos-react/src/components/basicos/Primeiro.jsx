import React from "react"

export default function Primeiro() {

    const msg = 'Seja bem vindo (a)!, me chamo Marcelo e estou treinando React.'

    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    ) //caso a abertura da div estiver na mesma linha do retun, 
    //não havera problemas, porém caso coloque na linha abaixo para ralizar a identação 
    //correta, é necessário os parênteses para que o programa entenda que é um exresão,
    //então assim não ocorrerá mais o probelma
}

