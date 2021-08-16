import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from '../../../api/users';
import { Alert, Card, Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/logoW.png';

import './LoginPage.css';

const ForgotPasswordPage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [forgotPass, setForgotPass] = useState(false)

  const resetError = () => setError(null)

  const handleSubmit = async create => {
    resetError()
    setIsLoading(true)
    try {
      setIsLoading(true)
      await forgotPassword(create)
      setForgotPass(true)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (forgotPass) {
    return <Redirect to ="/login" />
  }

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
        <Card.Header className="text-header login-title">Reset Password</Card.Header>
        <ForgotPasswordForm 
          className="loginPage-form"
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {error && (
          <Alert onClick={resetError} variant="danger" >
            {error.message}
            <br />
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