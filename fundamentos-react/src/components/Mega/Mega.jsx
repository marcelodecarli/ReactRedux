import React, { useState } from "react";
import "./Mega.css"

export default props => {

    function GerarNumerosNaoContidos(min, max, array) {

        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(aleatorio) ?
            GerarNumerosNaoContidos(min, max, array) :
            aleatorio

    }

    function qtdeNumerosGerados(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = GerarNumerosNaoContidos(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)


        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = qtdeNumerosGerados(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        //No trecho  <h3>{numeros.join(' ')}</h3>, o join adiciona um espaço entre os numero
        //no trecho onChange={e => setQtde((+ esse mais retorna valor numérico)e.target.value)}/> 

        // <div className="Mega">
        // <h2>Números da mega</h2>

        // <div className="Numero">
        //     {numeros.map((numero, index) => (
        //         <div key={index} className="numberCircle">
        //             {numero}
        //         </div>
        //     ))}
        // </div>

        <div className="Mega">
            <h2>Números da mega</h2>


            <h3 className="NumerosGerados">
                {numeros.map((numero, index) => (
                    <div key={index} className="numberCircle">
                        {numero}
                    </div>
                ))}

            </h3>



            <div>
                <label> Quantidade de núemros </label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(qtdeNumerosGerados(+e.target.value))
                    }} />
            </div>
            <button onClick={_ => setNumeros(qtdeNumerosGerados(qtde))}>
                Gerar Números
            </button>

        </div>
    )
}