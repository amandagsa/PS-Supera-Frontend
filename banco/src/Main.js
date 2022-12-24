import { useEffect, useState } from 'react';
import './App.css';
import TabelaContas from './TabelaContas';
import config from './config.json'

function Main() {
  const [contas, setContas] = useState([]);
  
  useEffect(()=>{
    fetch(`${config.baseUrl}/conta`)
    .then(retornoConta => retornoConta.json())
    .then(retornoContaConvertido => setContas(retornoContaConvertido))
  }, []);

  return (
    <div>
      <TabelaContas vetor={contas}/>
    </div>
  );
}

export default Main;
