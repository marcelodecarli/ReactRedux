import React from "react";

export default function Fragmento(props) {
    return (

        <React.Fragment key="1">

            <h2>Fragmento</h2>
            <p>Cuidado com esse Erro!</p>

        </React.Fragment>

        /* <>
        
        <h2>Fragmento</h2>
        <p>Cuidado com esse Erro!</p>
        
        </> 
        nesse exemplo temos uma forma reduzida de acessar React.Fragment,
        porém se por ventura precisar adicionar alguma chave ou atributo,
        nesse caso devemos sim usar ou uma <div> ou <React.Fragment>
        podendo assim passar os atributos, como no exemplo acima sem comentário 
        dois elementos ou mais elementos, a não ser que estejam envolvidos
        por uma div, spam, paragrafo, ou seja uma tag
        */

    )
}