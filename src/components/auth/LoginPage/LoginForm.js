import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginForm.css'

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
    <Form className="form-login" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="loginform-label">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          isValid={email ? true : false}
        />
        <Form.Label className="loginform-label">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          isValid={password ? true : false}
        />
        <div className="rememberPassword">
          <Form.Check
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={remember}
            onChange={handleCheckbox}
            className="loginform-check loginform-label"
          />
          <Form.Label>Remember Password</Form.Label>
          <Link to="/register" variant="outline-light">
            <p className='notAccount'>Not account yet? Click here!</p>
          </Link>
        </div>
      </Form.Group>
      <Button
        type="submit"
        className="LoginFormSubmit"
        variant="outline-dark"
        // TODO: cambiar el isLoading por el loader
        disabled={isLoading || !email || !password}
      >
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
