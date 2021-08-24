import React from 'react';
import { getRequests } from '../../../api/requestsCamps';
import { Card, Alert, Button, Spinner } from 'react-bootstrap';
import Layout from '../../layout/layout';
import './Requests.css';

const Requests = ({ ...props }) => {
  const [request, setRequest] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    requestsList();
  }, []);

  const requestsList = async () => {
    try {
      setLoading(true);
      const getRequestsList = await getRequests();
      setRequest(getRequestsList.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout {...props}>
      <Spinner animation="border" variant="info" hidden={!loading} />
      <Card className="request">
        <Card.Header className="header">Requests</Card.Header>
        <Card.Body className="request-list">
          {request.length > 0 ? (
            request.map((item, index) => (
              <Card>
                <Card.Header className="request-header">
                  {index + 1}
                </Card.Header>
                <Card.Body className="request-body">
                  <Card.Text className="text-title">Request date: </Card.Text>
                  <Card.Text className="text">{item.createdAt}</Card.Text>
                  <Card.Text className="text-title">
                    Applicant's email:{' '}
                  </Card.Text>
                  <Card.Text className="text">{item.personName}</Card.Text>
                  <Card.Text className="text-title">requested camp: </Card.Text>
                  <Card.Text className="text">{item.campName}</Card.Text>
                  <div className="request-button">
                    <Button variant="outline-success">Accept</Button>
                    <Button variant="outline-danger">Cancel</Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Card.Text>You have no pending requests... </Card.Text>
          )}
        </Card.Body>
      </Card>
      {error && (
        <Alert
          variant="danger"
          onClick={resetError}
          className="loginPage-error"
        >
          {error.message}
        </Alert>
      )}
    </Layout>
  );
};

export default Requests;
