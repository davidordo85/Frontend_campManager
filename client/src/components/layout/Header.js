import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoW.png';
//import Button from '../Buttons/Button';
import { Button } from 'react-bootstrap';
import AuthButton from '../auth/AuthButton';
import './Header.css';

const Header = ({ isLogged, onLogout }) => {
  return (
    <header>
      <div className="header-nav">
        <Link to="/">
          <div className="header-logo">
            <img className="logo" alt="logo" src={logo}></img>
          </div>
        </Link>
        <nav className="login">
          <AuthButton isLogged={isLogged} onLogout={onLogout} />
          {isLogged ? null : (
            <Button
              size="lg"
              className="register"
              variant="outline-light"
              as={Link}
              to="/Register"
            >
              Register
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
