import React from 'react';
import Layout from '../layout/layout';
import UserDashboard from './dashboard-user';
import { getMe, getMyCampsRequest } from '../../api/auth';
import { Card } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import './request.css';

const UserRequest = ({ ...props }) => {
  const [request, setRequest] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    handleCamps();
  }, []);

  const handleCamps = async id => {
    try {
      setLoading(true);
      const idData = await getMe();
      const myRequest = await getMyCampsRequest(idData.data._id);
      setRequest(myRequest.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout {...props}>
      <UserDashboard />
      <div className="container-camps">
        <Card className="container-request">
          <Loader hidden={!loading} />
          {request.length > 0 ? (
            request.map((req, index) => (
              <Card className="card-request">
                <Card.Header>{index + 1}</Card.Header>
                <Card.Body key={index}>
                  <Card.Text>
                    <b>Campname:</b>
                    {req.campName}
                  </Card.Text>
                  <Card.Text>
                    <b>Role:</b>
                    {req.role}
                  </Card.Text>
                  <Card.Text>
                    <b>Status:</b>
                    {req.status}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Card.Text>You have no pending requests... </Card.Text>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default UserRequest;
