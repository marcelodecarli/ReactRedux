import React from "react";

export default props => {

    //EXEMPLO COM FUNÇÃO ARROW

    const callBack = props.quandoClicar
    const min = 50
    const max = 100

    const gerarIDade = () => parseInt(Math.random() * (max -min))+min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div
            >FILHO
            </div>
            <button onClick={_ => callBack('João', gerarIDade(), gerarNerd())}>
                FORNECER INFORMAÇÕES DO PAI
            </button>

        </div>
    )
}

//EXEMPLO COM FUNÇÃO NORMAL
//     return (
//         <div>
//             <div
//             >FILHO
//             </div>
//             <button onClick={
//                 function(e){
//                     props.quandoClicar('João', 53, false)
//                 }
//             }>
//                 FORNECER INFORMAÇÕES DO PAI
//             </button>

//         </div>
//     )
// }