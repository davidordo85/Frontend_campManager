import React from 'react';
import Layout from '../layout/layout';
import { getMyCampsRequest } from '../../api/auth';
import { Card, Alert } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import './request.css';

const UserRequest = ({ ...props }) => {
  const [request, setRequest] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const resetError = () => setError(null);
  const id = props.id

  React.useEffect(() => {
    handleCamps(id);
  }, [id]);

  

  const handleCamps = async (id) => {
    try {
      setLoading(true);
      const myRequest = await getMyCampsRequest(id);
      setRequest(myRequest.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout {...props}>    
      <div className="container-camps">
        <Card className="container-request">
          <Loader hidden={!loading} />
          {request.length > 0 ? (
            request.map((req, index) => (
              <Card key={index} className="card-request">
                <Card.Header >{index + 1}</Card.Header>
                <Card.Body >
                  <Card.Text>
                    <b>Camp name: </b>
                    {req.campName}
                  </Card.Text>
                  <Card.Text>
                    <b>Role: </b>
                    {req.role}
                  </Card.Text>
                  <Card.Text>
                    <b>Status: </b>
                    {req.status}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Card.Text>You have no pending requests... </Card.Text>
          )}
          {error && (
            <Alert
              variant="danger"
              onClick={resetError}
              className="loginPage-error"
            >
              {error.message}
            </Alert>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default UserRequest;
