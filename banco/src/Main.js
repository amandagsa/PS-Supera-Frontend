
import { useEffect, useState } from 'react';
import './App.css';
import TabelaContas from './TabelaContas';

function Main() {
  const baseUrl = "http://localhost:8080/";

  const conta = {
    idConta: '',
    nomeResponsavel: '',
  }

  const [contas, setContas] = useState([]);
  
  useEffect(()=>{
    fetch(`${baseUrl}/conta`)
    .then(retorno => retorno.json())
    .then(retorno_convertido => setContas(retorno_convertido))
  }, []);

  return (
    <div className='inicial'>
      <TabelaContas vetor={contas}/>
    </div>
  );
}

export default Main;
