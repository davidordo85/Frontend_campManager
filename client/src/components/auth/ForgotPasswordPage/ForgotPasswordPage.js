import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from '../../../api/auth';
import { Alert, Card, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoW.png';

import './LoginPage.css';

const ForgotPasswordPage = () => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const resetError = () => setError(null);

  const handleSubmit = async email => {
    resetError();
    setIsLoading(true);
    try {
      await forgotPassword(email);
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
        <Card.Header className="text-header">Reset Password</Card.Header>
        <ForgotPasswordForm
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
          </Alert>
        )}
      </Card>
      <footer className="layout-footer bordered">
        © 2021 KeepCoding - CodeSword - Práctica final
      </footer>
    </div>
  );
}

export default ForgotPasswordPage;