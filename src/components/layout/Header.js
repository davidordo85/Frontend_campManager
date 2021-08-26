import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoW.png';
//import Button from '../Buttons/Button';
import { Button, Navbar } from 'react-bootstrap';
import AuthButton from '../auth/AuthButton';
import Dashboard from '../auth/Dashboard/Dashboard';
import './Header.css';

const Header = ({ isLogged, onLogout }) => {
  const [hidden, setHidden] = React.useState(false);

  const handleClick = event => {
    if (event) {
      if (!hidden) {
        setHidden(true);
      } else if (hidden) {
        setHidden(false);
      }
    }
  };

  return (
    <Navbar fixed="top" bg="dark" expand="lg" className="header">
      <Navbar.Brand>
        <Link to="/" variant="outline-light">
          <img className="logo" alt="logo" src={logo}></img>
        </Link>
        <AuthButton className="login" isLogged={isLogged} onLogout={onLogout} />
        {isLogged ? (
          <div>
            <Button
              size="lg"
              id="menu"
              variant="outline-light"
              onClick={handleClick}
            >
              Menu
            </Button>
            {!hidden || window.innerWidth >= 600 ? (
              <Dashboard isLogged={isLogged} onLogout={onLogout} />
            ) : null}
          </div>
        ) : null}
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
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
