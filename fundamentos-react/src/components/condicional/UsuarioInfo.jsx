import React from "react";
import IfEstudo, { Else } from "./IfEstudo"


export default props => {

    const usuario = props.usuario || {}

    return (
        <div>
            <IfEstudo test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong> !!
            <Else>
            <strong>Usuário sem nome!</strong>
            </Else>
            </IfEstudo>
            
        </div>
    )
}



/*
    return (
        <div>
            <IfEstudo test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong> !!
            </IfEstudo>
            <IfEstudo test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong> !!
            </IfEstudo>
        </div>
    )
}

*/