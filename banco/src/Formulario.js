import { Link } from 'react-router-dom';

function Formulario({eventoTeclado, pesquisar}){
    return(
        <form>
            <label className="form-label">Data de Início:</label>
            <input type='date' onChange={eventoTeclado} name='dataInicial' placeholder='Data de início' className='form-control'/>

            <label className="form-label">Data de Fim:</label>
            <input type='date' onChange={eventoTeclado} name='dataFinal' placeholder='Data de Fim' className='form-control' />
            
            <label className="form-label">Nome do Operador:</label>
            <input type='text' onChange={eventoTeclado} name='operador' className='form-control' />
            
            <input type='button' className="btn btn-primary mb-3" onClick={pesquisar} value='Pesquisar'/>

        </form>
    )
}

export default Formulario;