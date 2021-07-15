import React from 'react';
import { FormLoginField, FormCheckbox } from '../../shared';
import { Link } from 'react-router-dom';
import Button from '../../Buttons/Button';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleCheckbox = event => {
    const newCredentials = { ...credentials, remember: event.target.checked };
    setCredentials(newCredentials);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, password, remember } = credentials;
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormLoginField
        type="email"
        name="email"
        label="Email"
        className="loginForm-field"
        value={email}
        onChange={handleChange}
      />
      <FormLoginField
        type="password"
        name="password"
        label="Password"
        className="loginForm-field"
        value={password}
        onChange={handleChange}
      />
      <FormCheckbox
        type="checkbox"
        name="checkbox"
        label="RememberPassword"
        className="loginForm-checkbox"
        checked={remember}
        onChange={handleCheckbox}
      />
      <div className="buttonLogin">
        <Button
          type="submit"
          className="LoginFormSubmit"
          // TODO: cambiar el isLoading por el loader
          disabled={isLoading || !email || !password}
        >
          Log in
        </Button>
        <Button
          as={Link}
          to={'./forgetPassword'}
          disabled={isLoading || !email}
        >
          Forget Password?
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
