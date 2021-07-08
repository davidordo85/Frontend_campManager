import React from 'react';

import Button from '../../Button';

function LoginForm() {
  return (
    <form className="loginForm">
      <input type="email" name="email" className="loginFormField"></input>
      <input type="password" name="password" className="loginFormField"></input>
      <input
        type="checkbox"
        name="checkbox"
        className="loginFormCheckbox"
      ></input>
      <Button type="submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
