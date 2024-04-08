import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Marcelo" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Luciano" idade={16} nerd={false}></DiretaFilho>
        </div>
    )
}