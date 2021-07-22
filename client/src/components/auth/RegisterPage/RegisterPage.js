import React from 'react';
import logo from '../../../assets/images/logoW.png';
import Layout from '../../layout/layout';
import './register.css';
import RegisterForm from './registerForm';

function RegisterPage() {
  return (
    <div className="registerPage">
          
    <Layout>
          <h1 className="registerPage-title">Register in to CampManager</h1>
          <RegisterForm />

    </Layout>
    </div>
    
  );
}

export default RegisterPage;
