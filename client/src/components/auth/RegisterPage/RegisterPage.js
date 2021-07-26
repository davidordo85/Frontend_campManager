import React from 'react';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../../api/auth';
import Layout from '../../layout/layout';
import './register.css';
import RegisterForm from './registerForm';

function RegisterPage() {

  const[error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newUser, setNewUser] = React.useState(false);

  const handleSubmit = async register => {
    try{
      setIsLoading(true);
      console.log(register)
      await registerUser(register);
      setNewUser(true)

    } catch(error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  }

  if (newUser){
    return <Redirect to='/login' />
  }

  return (
    <div className="registerPage">
          
    <Layout>
          <h1 className="registerPage-title">Register in to CampManager</h1>
          <RegisterForm  onSubmit={handleSubmit}/>

    </Layout>
    </div>
    
  );
}

export default RegisterPage;
