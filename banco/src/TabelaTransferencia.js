function TabelaTransferencia({transferencias, saldoTotal, saldoPeriodo}){
    return(
        <div className="m-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan={2}>Saldo Total: R$ {saldoTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})}</th>
                        <th colSpan={2}>Saldo no Período: R$ {saldoPeriodo.toLocaleString('pt-br', {minimumFractionDigits: 2})}</th>                    
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
                            transferencias.map((obj, indice) => (
                                <tr key={indice}>
                                    <td>{new Date(obj.dataTransferencia).toLocaleString().slice(0,-8)}</td>
                                    <td>R$ {(obj.valor).toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
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