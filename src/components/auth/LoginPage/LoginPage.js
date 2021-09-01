import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import { Alert, Card, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoW.png';

import './LoginPage.css';

function LoginPage({ onLogin, history, location }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const islogged = React.useRef(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    if (islogged.current) {
      onLogin();
      window.location.replace('/');
    }
  });

  const handleSubmit = async credentials => {
    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      islogged.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="loginPage">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" variant="outline-light">
            <img className="logo" alt="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Card border="dark" className="card-login">
        <Card.Header className="text-header">
          <Card.Text className="login-title">Login</Card.Text>
        </Card.Header>
        <LoginForm
          className="loginPage-form"
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {error && (
          <Alert
            onClick={resetError}
            variant="danger"
            className="loginPage-error"
          >
            {error.message}
            <br />
            <Link to="/forgotpassword">Forgot password</Link>
          </Alert>
        )}
      </Card>
      <footer className="layout-footer bordered">
        © 2021 KeepCoding - CodeSword - Práctica final
      </footer>
    </div>
  );
}

export default LoginPage;
