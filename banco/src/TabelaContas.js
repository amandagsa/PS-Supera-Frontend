import { Link } from 'react-router-dom';

function TabelaContas({vetor}){
    return(              
        <div className="container-sm">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nº Conta</th>
                        <th>Responsável</th>                    
                        <th>Ação</th>
                    </tr>
                </thead>
                
                <tbody>
                        {
                            vetor.map((obj, indice) => (
                                <tr key={indice}>
                                    <td>{obj.idConta}</td>
                                    <td>{obj.nomeResponsavel}</td>
                                    <td><Link to={`/transferencia/${obj.idConta}`}>Extrato</Link></td>
                                    <td></td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default TabelaContas;