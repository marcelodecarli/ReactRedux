import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho"


export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <div>Nome: {nome}, </div>
                <div>idade:<strong> {idade}</strong></div>
                <div> é nerd? {nerd ? 'Verdadeiro' : 'Falso'}</div>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}