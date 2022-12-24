function TabelaTransferencia({vetor}){
    return(              
        <div className="container-sm">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Saldo Total: </th>
                        <th>Saldo no Período: </th>                    
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Dados</th>
                        <th>Valor</th>                    
                        <th>Tipo</th>
                        <th>Nome do Operador</th>
                    </tr>
                </thead>
                
                <tbody>
                        {
                            vetor.map((obj, indice) => (
                                <tr key={indice}>
                                    <td>{new Date(obj.dataTransferencia).toLocaleString().slice(0,-8)}</td>
                                    <td>R$ {(obj.valor).toFixed(2).toLocaleString('pt-BR', {currency: 'BRL' })}</td>
                                    <td>{obj.tipo}</td>
                                    <td>{obj.nomeOperadorTransacao}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default TabelaTransferencia;