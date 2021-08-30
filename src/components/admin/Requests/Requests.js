import React from 'react';
import { getRequests, putRequests } from '../../../api/requestsCamps';
import { Card, Alert, Button, Spinner } from 'react-bootstrap';
import Layout from '../../layout/layout';
import './Requests.css';

const Requests = ({ ...props }) => {
  const [request, setRequest] = React.useState(['']);
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

  const handleAccept = async event => {
    const id = event.target.value;
    const data = { status: 'accepted' };
    try {
      setLoading(true);
      await putRequests(id, data);
    } catch (error) {
      setError(null);
    } finally {
      setLoading(false);
      requestsList();
    }
  };

  const handleReject = async event => {
    const id = event.target.value;
    const data = { status: 'rejected' };
    try {
      setLoading(true);
      await putRequests(id, data);
    } catch (error) {
      setError(null);
    } finally {
      setLoading(false);
      requestsList();
    }
  };

  return (
    <Layout {...props}>
      <Spinner animation="border" variant="info" hidden={!loading} />
      <Card className="request">
        <Card.Header className="header">Requests</Card.Header>
        <Card.Body className="request-list">
          {request[0].length > 0 ? (
            request[0].map((item, index) => (
              <Card key={index}>
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
                  <Card.Text className="text-title">Requested camp: </Card.Text>
                  <Card.Text className="text">{item.campName}</Card.Text>
                  <div className="request-button">
                    <Button
                      variant="outline-success"
                      value={item._id}
                      onClick={handleAccept}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline-danger"
                      value={item._id}
                      onClick={handleReject}
                    >
                      Reject
                    </Button>
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
