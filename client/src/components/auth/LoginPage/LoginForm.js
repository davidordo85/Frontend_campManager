import React from 'react';

import FormLoginField from '../../shared/FormLoginField';
import FormCheckbox from '../../shared/FormCheckbox';
import Button from '../../Button';

function LoginForm() {
  return (
    <form className="loginForm">
      <FormLoginField
        type="email"
        name="email"
        label="email"
        className="loginFormField"
      />
      <FormLoginField
        type="password"
        name="password"
        label="password"
        className="loginFormField"
      />
      <FormCheckbox
        type="checkbox"
        name="checkbox"
        label="RememberPassword"
        className="loginFormCheckbox"
      />
      <Button type="submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
