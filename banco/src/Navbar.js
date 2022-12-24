import { React } from 'react';

function Navbar(){
    return(
        <div>
        <nav className="navbar sticky-top bg-dark">
          <div className="container-fluid">
          <a href='/' className="navbar-brand text-light">Página Inicial</a>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;