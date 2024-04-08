import React from "react";
import "./Contador.css"
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";


class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 2
    }

    //Função inc vem a ser um incrementador no nosso número que aparece no display

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    //Função dec vem a ser um decrementador no nosso número que aparece no display

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    //nessa função estamos setando o
    // valor que será aumentado ou diminuido a partir do botão + ou -
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />

            </div>
        )
    }

}

export default Contador