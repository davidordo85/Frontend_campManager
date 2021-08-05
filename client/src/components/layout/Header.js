import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoW.png';
//import Button from '../Buttons/Button';
import { Button, Navbar } from 'react-bootstrap';
import AuthButton from '../auth/AuthButton';
import Dashboard from '../auth/Dashboard/Dashboard';
import './Header.css';

const Header = ({ isLogged, onLogout }) => {
  return (
    <Navbar fixed="top" bg="dark" expand="lg" className="header">
      <Navbar.Brand>
        <Link to="/" variant="outline-light">
          <img className="logo" alt="logo" src={logo}></img>
        </Link>
        <AuthButton className="login" isLogged={isLogged} onLogout={onLogout} />
        {isLogged ? (
          <Dashboard isLogged={isLogged} onLogout={onLogout} />
        ) : (
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
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
