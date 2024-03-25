import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const el = document.getElementById('root')//Variável criada para salvar de onde e para onde vão os dados
//na constante TAG foi salva a informação que queremos exibir na tela

ReactDom.render(

    <div id="app">
        <Primeiro></Primeiro>

        <ComParametro titulo="- Situação do Aluno"
            nome="Pedro"
            nota={6.3} />
        
        <Fragmento></Fragmento>

    </div>,

    el //Variável criada para salvar de onde e para onde vão os dados
)