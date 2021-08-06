import ForgotPasswordForm from './ForgotPasswordForm';
import { Card, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoW.png';

import './LoginPage.css';

const ForgotPasswordPage = () => {
  return (
    <div className="loginPage">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" variant="outline-light">
            <img className="logo" alt="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Card border="dark" className="card-login">
        <Card.Header className="text-header">Reset Password</Card.Header>
        <ForgotPasswordForm className="loginPage-form"/>
      </Card>
      <footer className="layout-footer bordered">
        © 2021 KeepCoding - CodeSword - Práctica final
      </footer>
    </div>
  );
}

export default ForgotPasswordPage;