import React from 'react';
import { Button, Form } from 'react-bootstrap';

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

  {
    /*
TODO: faltan las validaciones
*/
  }

  const { email, password, remember } = credentials;
  return (
    <Form className="form-login" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          name="checkbox"
          label="Remember Password"
          checked={remember}
          onChange={handleCheckbox}
        />
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
