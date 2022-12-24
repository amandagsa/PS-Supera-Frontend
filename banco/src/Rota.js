import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transferencias from './Transferencias';
import Main from './Main';


function Rota() {
    
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/transferencia/:idConta' element={<Transferencias/>} />
        </Routes>
      </Router>    
    );
  }
  
  export default Rota;
  