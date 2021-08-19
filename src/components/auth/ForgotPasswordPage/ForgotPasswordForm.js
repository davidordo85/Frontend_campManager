import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [send, setSend] = useState({
    email: 'await',
  });

  const forgotPasswordData = event => {
    const aver = { email: event.target.value };
    setSend(aver);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(send);
    onSubmit(send);
  };

  const email = send.email;

  return (
    <Form className="form-login" onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label className="loginform-label">Reset Password</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={forgotPasswordData}
          placeholder="Enter your registered email address"
          required
        />
        <Form.Text className="text-muted">
          Wait for email and follow instructions
        </Form.Text>
      </Form.Group>
      <ButtonGroup>
        <Button
          type="submit"
          className="LoginFormSubmit"
          variant="outline-dark"
        >
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default ForgotPasswordForm;
