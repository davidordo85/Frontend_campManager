import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateCampForm from './CreateCampForm'

import Layout from '../../layout/layout';
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';

import { createCamp } from '../../../api/camps';
import { Alert, Card, Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/logoW.png';

import './createCampForm.css';

const CreateCampPage = ({ ...props }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetError = () => setError(null);

  const handleSubmit = async create => {
    resetError();
    setIsLoading(true);
    try {
      setIsLoading(true);
      await createCamp(create);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout {...props}>
      <DashboardAdmin />
      <div className="loginPage">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" variant="outline-light">
            <img className="logo" alt="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Card border="dark" className="card-login">
        <Card.Header className="register-title text-header">Create Camp</Card.Header>
        <CreateCampForm className="registerButton-container" onSubmit={handleSubmit} isLoading={isLoading}/>
        {error && (
          <Alert
            onClick={resetError}
            variant="danger"
            className=""
          >
            {error.message}
            <br />
          </Alert>
        )}
      </Card>
    </div>
    </Layout>
  );
};

export default CreateCampPage;