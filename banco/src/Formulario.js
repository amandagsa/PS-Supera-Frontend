function Formulario({eventoTeclado, pesquisar}){
    return(
    <div className="m-5">
        <form>
            <div className="row">
                <div className="col">
                    <label className="form-label">Data de Início:</label>
                    <input type="date" className="form-control" onChange={eventoTeclado} name='dataInicial'/>
                </div>
                <div className="col">
                    <label className="form-label">Data de Fim:</label>
                    <input type="date" className="form-control" onChange={eventoTeclado} name='dataFinal'/>
                </div>
                <div className="col">
                    <label className="form-label">Nome do Operador:</label>
                    <input type='text' className='form-control' onChange={eventoTeclado} name='operador'/>
                </div>
            </div>
            <div className="row mt-5 float-end">
                <div className="col">
                    <input className="btn btn-primary mb-3" type='button' onClick={pesquisar} value='Pesquisar'/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Formulario;