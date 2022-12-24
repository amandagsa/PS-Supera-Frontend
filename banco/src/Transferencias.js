import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from './Formulario';
import TabelaTransferencia from './TabelaTransferencia';
import './App.css';
import config from './config.json'

function Transferencias() {
  const formPesquisa = {
    dataInicial: '',
    dataFinal: '',
    operador: ''
  }

  const [objFormPesquisa, setObjFormPesquisa] = useState(formPesquisa);
  const [transferencias, setTransferencias] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoPeriodo, setSaldoPeriodo] = useState(0);

  const param = useParams();

  const getTransferencias = (idConta, paramsPesquisa) => {
    let urlRequest = `${config.baseUrl}/transferencia/${idConta}`;

    if(paramsPesquisa) {
      urlRequest += `?${paramsPesquisa}`;
    }

    fetch(urlRequest)
    .then(retorno => retorno.json())
    .then(data => {
      setTransferencias(data.listTransferencia);
      setSaldoTotal(data.saldoTotal);
      setSaldoPeriodo(data.saldoPeriodo);
    });
  }

  useEffect(() => {
    getTransferencias(param.idConta);
  }, []);

  const aoDigitar = (e) => {
    setObjFormPesquisa({...objFormPesquisa, [e.target.name]:e.target.value});
  }

  const objFormularioToParams = (objFormPesquisa) => {
    const campos = Object.keys(objFormPesquisa);
    const mapeaCampos = campos.map(function(campos){
      if(objFormPesquisa.dataInicial){
        objFormPesquisa.dataInicial = new Date(objFormPesquisa.dataInicial).toISOString().slice(0,-5);
      }
      if(objFormPesquisa.dataFinal){
        objFormPesquisa.dataFinal = new Date(objFormPesquisa.dataFinal).toISOString().slice(0,-13).concat("23:59:59");
      }
      return campos + '=' + encodeURIComponent(objFormPesquisa[campos]);
    });

    return mapeaCampos.join('&');
  }

  const pesquisar = () => {
    const paramsPesquisa = objFormularioToParams(objFormPesquisa);
    getTransferencias(param.idConta, paramsPesquisa);
  }

  return (
    <div>
      <Formulario eventoTeclado={aoDigitar} pesquisar={pesquisar}/>
      <TabelaTransferencia transferencias={transferencias} saldoTotal={saldoTotal} saldoPeriodo={saldoPeriodo}/>
    </div>
  );
}

export default Transferencias;