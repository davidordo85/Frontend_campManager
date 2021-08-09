import React from 'react';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../../api/auth';
import RegisterForm from './registerForm';
import { Navbar, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoW.png';

import './register.css';

function RegisterPage() {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newUser, setNewUser] = React.useState(false);

  const resetError = () => setError(null);

  const handleSubmit = async register => {
    resetError();
    setIsLoading(true);
    try {
      setIsLoading(true);
      await registerUser(register);
      setNewUser(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (newUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="registerPage">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" alt="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Card border="dark" className="card-register">
        <Card.Header className="text-header">
          <Card.Text className="register-title">CampManager Register</Card.Text>
        </Card.Header>
        <Card.Body>
          <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
          {error && (
            <Alert
              onClick={resetError}
              variant="danger"
              className="registerPage-error"
            >
              {error.message}
              <br />
              <Link to="/forgetPassword">Forget password</Link>
            </Alert>
          )}
        </Card.Body>
      </Card>
      <footer className="layout-footer bordered">
        © 2021 KeepCoding - CodeSword - Práctica final
      </footer>
    </div>
  );
}

export default RegisterPage;
