
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Formulario from './Formulario';
import TabelaTransferencia from './TabelaTransferencia';
import './App.css';

function Transferencias() {
  const baseUrl = "http://localhost:8080/transferencia";

  const transferencia={
    dataInicial: '',
    dataFinal: '',
    operador: ''
  }

  const [transferencias, setTransferencias] = useState([]);
  const [objTransferencia, setObjTransferencia] = useState(transferencia);

  const param = useParams();

  useEffect(()=>{
    fetch(`${baseUrl}/${param.idConta}`)
    .then(retorno => retorno.json())
    .then(retorno_convertido => setTransferencias(retorno_convertido))  
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

    fetch(`${baseUrl}/${param.idConta}?${join}`)
    .then(retorno => retorno.json())
    .then(retorno_convertido => setTransferencias(retorno_convertido))
  }

  return (
    <div>
      <Formulario eventoTeclado={aoDigitar} pesquisar={pesquisar}/>
      <TabelaTransferencia vetor={transferencias}/>
      <Link to="/">Selecionar Conta</Link>
    </div>
  );
}

export default Transferencias;
