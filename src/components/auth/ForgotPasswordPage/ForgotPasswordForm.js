 import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

const ForgotPasswordForm = ({ onSubmit}) => {
  const [email, setEmail] = useState('')

  const forgotPasswordData = e => {
    setEmail({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(email)
  }

  return (
    <Form className="form-login" onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Reset Password</Form.Label>
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
          disabled={!email}
        >
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default ForgotPasswordForm