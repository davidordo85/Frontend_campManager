import { useState } from 'react';
import CreateCampForm from './CreateCampForm';
import Layout from '../../layout/layout';
import { createCamp } from '../../../api/camps';
import { Alert, Card } from 'react-bootstrap';
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
