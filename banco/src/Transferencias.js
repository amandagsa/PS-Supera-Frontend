import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from './Formulario';
import TabelaTransferencia from './TabelaTransferencia';
import './App.css';
import config from './config.json'

function Transferencias() {

  const transferencia = {
    dataInicial: '',
    dataFinal: '',
    operador: ''
  }

  const [objTransferencia, setObjTransferencia] = useState(transferencia);
  const [transferencias, setTransferencias] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoPeriodo, setSaldoPeriodo] = useState(0);

  const param = useParams();

  useEffect(()=>{
    fetch(`${config.baseUrl}/transferencia/${param.idConta}`)
    .then(retorno => retorno.json())
    .then(data => {
      setTransferencias(data.listTransferencia);
      setSaldoTotal(data.saldoTotal);
      setSaldoPeriodo(data.saldoPeriodo);
    });
  }, []);

  const aoDigitar = (e) => {
    setObjTransferencia({...objTransferencia, [e.target.name]:e.target.value});
  }

  const pesquisar = () => {
    const keys = Object.keys(objTransferencia);
    const keysMapped = keys.map(function(key){
      if(objTransferencia.dataInicial){
        objTransferencia.dataInicial = new Date(objTransferencia.dataInicial).toISOString().slice(0,-5);
      }
      if(objTransferencia.dataFinal){
        objTransferencia.dataFinal = new Date(objTransferencia.dataFinal).toISOString().slice(0,-13).concat("23:59:59");
      }
      return key + '=' + encodeURIComponent(objTransferencia[key]);
    });
    
    const join = keysMapped.join('&');

    fetch(`${config.baseUrl}/transferencia/${param.idConta}?${join}`)
    .then(retornoConta => retornoConta.json())
    .then(data => {
      setTransferencias(data.listTransferencia);
      setSaldoTotal(data.saldoTotal);
      setSaldoPeriodo(data.saldoPeriodo);
    });
  }

  return (
    <div>
      <Formulario eventoTeclado={aoDigitar} pesquisar={pesquisar}/>
      <TabelaTransferencia transferencias={transferencias} saldoTotal={saldoTotal} saldoPeriodo={saldoPeriodo}/>
    </div>
  );
}

export default Transferencias;
