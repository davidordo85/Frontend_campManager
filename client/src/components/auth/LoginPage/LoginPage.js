import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

function LoginPage({ onLogin }) {
  const handleSubmit = async credentials => {
    await login(credentials);
    onLogin();
  };
  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to CampManager</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
