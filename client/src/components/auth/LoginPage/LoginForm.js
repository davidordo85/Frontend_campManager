import React from 'react';
import { FormLoginField, FormCheckbox } from '../../shared';
import Button from '../../Button';

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
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

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, password } = credentials;
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
      />
      <Button type="submit" variant="primary" disabled={!email || !password}>
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
