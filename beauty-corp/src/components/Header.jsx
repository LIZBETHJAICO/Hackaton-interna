import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';

const Header = ({ setType, setCategory, valueSearch, setInputValue, clickSearch }) => {

  return (
    <header>
      <section>
        <button type="button" className="buttonBrand" onClick={() => setType('Esika')}>Bella</button>
        <button type="button" className="buttonBrand" onClick={() => setType('Cyzone')}>MakeUp</button>
        <button type="button" className="buttonBrand" onClick={() => setType('LBel')}>Natural</button>
        {/* <Link to="/ShoppingCart"><button>Carrito</button></Link> */}
      </section>
      <MenuNav setCategory={setCategory} valueSearch={valueSearch} setInputValue={setInputValue} clickSearch={clickSearch} />
    </header>
  )
}


export default Header;
