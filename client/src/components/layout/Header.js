import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoW.png';
import Button from '../Buttons/Button';
import AuthButton from '../auth/AuthButton';

const Header = ({ isLogged, onLogout, ...props }) => {
  return (
    <header>
      <div className="header-nav">
        <div className="header-logo">
          <img className="logo" alt="logo" src={logo}></img>
        </div>
        <nav className="login">
          <AuthButton isLogged={isLogged} onLogout={onLogout} />
          {isLogged ? null : (
            <Button as={Link} to="/Register">
              Register
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
