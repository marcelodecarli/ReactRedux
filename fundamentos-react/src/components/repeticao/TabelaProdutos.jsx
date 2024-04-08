import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default props => {

    const tabela = produtos.map((produto, i) => {
        return (
            <tr key={produto.id}className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{'R$ '}{produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabela}
                </tbody>
            </table>
        </div>
    )
}


/*

exemplo do professor: 

import produtos from "../../data/produtos";

export default props => {

function getLinhas() {
    return produtos.map(produto => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
}

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}
*/

