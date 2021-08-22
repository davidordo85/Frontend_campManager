import React from 'react';
import { getRequests } from '../../../api/requestsCamps';
import { Table, Alert, Button } from 'react-bootstrap';
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

  console.log(request);
  return (
    <Layout {...props}>
      <Table striped bordered hover className="requests">
        <thead>
          <tr>
            <th>#</th>
            <th>Request date</th>
            <th>Applicant's email</th>
            <th>Requested camp</th>
            <th>State request</th>
            <th>Options</th>
          </tr>
        </thead>
        {request.length > 0 ? (
          request.map((item, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{item.createdAt}</td>
                <td>{item.personName}</td>
                <td>{item.campName}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    className="accept"
                    size="sm"
                    variant="outline-success"
                  >
                    Accept
                  </Button>
                  <Button size="sm" variant="outline-danger">
                    Cancel
                  </Button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody size="sm" className="empty">
            <Alert>You have no requests to review...</Alert>
          </tbody>
        )}
      </Table>
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
