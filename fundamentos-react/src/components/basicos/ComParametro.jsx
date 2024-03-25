import React from "react"

export default function ComParametro(props) {

    const notaInt = Math.ceil(props.nota)
    const status = notaInt >= 7 ? 'Aprovado' : 'Recuperação'
  

    return (
        //as chaves {} são para o programa interpretar como javascript
        <div>
            <h2>{props.titulo} </h2>
            <p>

                {props.nome} tem nota: 
                <strong> {notaInt}. </strong>
                E está <strong> {status}</strong>!!!

            </p>
        </div>
    )
}