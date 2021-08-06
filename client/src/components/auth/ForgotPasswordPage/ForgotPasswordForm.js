 import { useState } from 'react';
// import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Form } from 'react-bootstrap';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [isPending, setIsPending] = useState('')
  // const history = useHistory()
  const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/forgotpassword`

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(email)
    }).then(() => {
      setIsPending(false)
      // history.push('/login')
    })
  }

  return (
    <Form className="form-login" onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Reset Password</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          disabled={isPending || !email}
        >
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default ForgotPasswordForm