import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'


//nesse exemplo o _ underline nos diz que o parâmetro nesse função não será usado
//e não utilizaremos ele, ou seja, não nos interessa nessa função

export default _ =>

    <div className="App">
        <h1>Fundamentos React </h1>


        <div className='Cards'>

            <Card titulo="#04 - Desafio Aleatório" color='#E15132'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragemento" color='#CC46B9'>
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color='#5FA588'>
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Pedro"
                    nota={6.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color='#D0DA30'>
                <Primeiro></Primeiro>
            </Card>

        </div>




    </div>




