import React from 'react';
import { Link } from 'react-router-dom';
import imgLogoCabeza from '../img/logocabeza.png';
import imgLogoLetra from '../img/logoletra.png';
import imgSearch from '../img/search.svg';
import imgUser from '../img/user.svg';
import imgPurse from '../img/vector.svg';


const MenuNav = ({ setCategory, valueSearch, setInputValue, clickSearch }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand itemNav" href="./">
                <img src={imgLogoCabeza} className="imgLogoCabeza" />
                <img src={imgLogoLetra} className="imgLogoLetra" />
            </a>
            <a className="navbar-brand itemNav" href="./"><img src={imgUser} /></a>
            <Link to="/ShoppingCart"><a className="navbar-brand itemNav" href="./"><img src={imgPurse} /></a></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active text-center">
                        <a className="navbar-brand text-center" href="./">Bella</a>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Maquillaje')}>Maquillaje</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Cuidado Personal')}>Cuidado Personal</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Tratamiento Corporal')}>Tratamiento Corporal</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Tratamiento Facial')}>Tratamiento Facial</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Fragancias')}>Fragancias</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" onClick={() => setCategory('Accesorios Cosmeticos')}>Accesorios Cosméticos</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" >Tiendas retail</spam>
                    </li>
                    <li className="nav-item active text-center">
                        <spam className="nav-link" >Catálogo virtual</spam>
                    </li>
                </ul>
            </div>
            <div className="form-inline my-2 my-lg-0 divSearch">
                <input className="form-control mr-sm-2" type="search" placeholder="Escribe nombre del producto" aria-label="Search"  onChange={() => setInputValue(valueSearch)}/>
                <a onClick={(event) => clickSearch(event)} ><img src={imgSearch} alt=""/></a>
            </div>

        </nav>
    )
};

export default MenuNav;
