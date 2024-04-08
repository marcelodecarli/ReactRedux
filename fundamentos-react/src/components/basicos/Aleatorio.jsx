import React from "react";

export default function Aleatorio(props) {

    // const min = props.min
    // const max = props.max

    //A const abaixo é a mesma coisa que a criação das duas const acima

    const { min, max } = props

    const aleatorio = Math.floor(Math.random() * (max - min) + min)


    return (
        <div>
            <h2>Valor aleatório: </h2>
            <p><strong>Valor mínimo = </strong> {min}</p>
            <p><strong>Valor máximo = </strong> {max}</p>
            <p><strong>Valor sorteado = </strong> {aleatorio}</p>
        </div>
    )
}

