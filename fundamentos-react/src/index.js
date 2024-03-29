import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Apk from './Apk'

//const el = document.getElementById('root') Variável criada para salvar de onde e para onde vão os dados
//na constante TAG foi salva a informação que queremos exibir na tela

ReactDom.render(
    <Apk />,
    document.getElementById('root')
)