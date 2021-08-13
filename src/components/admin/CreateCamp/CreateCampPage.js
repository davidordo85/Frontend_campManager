import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateCampForm from './CreateCampForm';
import Layout from '../../layout/layout';
import { createCamp } from '../../../api/camps';
import { Alert, Card } from 'react-bootstrap';
import './createCampForm.css';

const CreateCampPage = ({ ...props }) => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newCamp, setNewCamp] = React.useState(false);

  const resetError = () => setError(null);

  /*   React.useEffect(() => {
    handleSubmit();
  }, []); */

  const handleSubmit = async create => {
    resetError();
    setIsLoading(true);
    try {
      setIsLoading(true);
      await createCamp(create);
      setNewCamp(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setNewCamp(false);
    }
  };

  if (newCamp) {
    return <Redirect to="/" />;
  }

  return (
    <Layout {...props}>
      <Card border="dark" className="card-createCamp">
        <Card.Header className="title-createCamps">Create Camp</Card.Header>
        <CreateCampForm
          className=""
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {error && (
          <Alert onClick={resetError} variant="danger" className="">
            {error.message}
            <br />
          </Alert>
        )}
      </Card>
    </Layout>
  );
};

export default CreateCampPage;
