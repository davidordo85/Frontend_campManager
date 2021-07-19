import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import logo from '../../../assets/images/logoW.png';

import './LoginPage.css';

function LoginPage({ onLogin, history, location }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  });

  const handleSubmit = async credentials => {
    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      isLogged.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="loginPage">
      <header>
        <div className="header-nav">
          <div className="header-logo">
            <img className="logo" alt="logo" src={logo}></img>
          </div>
        </div>
      </header>
      <h1 className="loginPage-title">Log in to CampManager</h1>
      <LoginForm
        className="loginPage-form"
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
