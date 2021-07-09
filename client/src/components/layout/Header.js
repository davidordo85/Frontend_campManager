import React from 'react';
import './Header.css';
import logo from '../../assets/images/logoW.png';
import Button from '../Button';
import { logout } from '../../api/auth';

const Header = ({ isLogged, onLogout, ...props }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  return (
    <header>
      <div className="header-nav">
        <div className="header-logo">
          <img className="logo" src={logo}></img>
        </div>
        <nav className="login">
          {!isLogged ? (
            <Button>Entrar</Button> && <Button>¡Registrate!</Button>
          ) : (
            <Button onClick={handleLogoutClick}>Logout</Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
