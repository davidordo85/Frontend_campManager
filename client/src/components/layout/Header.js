import React from 'react';
import './Header.css';
import logo from '../../assets/images/logoW.png';
//import Button from '../Button';
import AuthButton from '../auth/AuthButton';

const Header = ({ isLogged, onLogout, ...props }) => {
  return (
    <header>
      <div className="header-nav">
        <div className="header-logo">
          <img className="logo" src={logo}></img>
        </div>
        <nav className="login">
          <AuthButton isLogged={isLogged} onLogout={onLogout} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
