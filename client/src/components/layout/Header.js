import React from 'react';
import './Header.css';
import logo from '../../assets/images/logoW.png';
import Button from '../Buttons/Button';

const Header = () => {
    
    return (
        <header >
            <div className="header-nav">
                 <div className="header-logo">
                     <img className='logo' src={logo}></img>
                </div>
                <nav className='login'>
                    <Button>¡Registrate!</Button>
                    <Button>Entrar</Button>
                </nav>
            </div>
        </header>
    )
}

export default Header;