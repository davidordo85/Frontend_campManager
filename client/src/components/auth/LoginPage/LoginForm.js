import React from 'react';
import { FormLoginField, FormCheckbox } from '../../shared';
import Button from '../../Button';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = event => {
    console.log(credentials);
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
        label="email"
        className="loginFormField"
        value={email}
        onChange={handleChange}
      />
      <FormLoginField
        type="password"
        name="password"
        label="password"
        className="loginFormField"
        value={password}
        onChange={handleChange}
      />
      <FormCheckbox
        type="checkbox"
        name="checkbox"
        label="RememberPassword"
        className="loginFormCheckbox"
        checked={remember}
        onChange={handleCheckbox}
      />
      <Button
        type="submit"
        variant="primary"
        className="LoginFormSubmit"
        // TODO: cambiar el isLoading por el loader
        disabled={isLoading || !email || !password}
      >
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
