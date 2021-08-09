import React from 'react';
import Layout from '../layout/layout';
import { getCampDetail } from '../../api/camps';
import { getMe } from '../../api/auth';
import Loader from '../Loader/Loader';
import { Card, Alert, ListGroup, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './CampDetail.css';

// console.log(sessionStorage,'sessionStorage');
// console.log(localStorage,'localStorage')
// const token = sessionStorage.auth
// const user = getMe({ headers: {"Authorization" : `Bearer ${token}`}});
// console.log(user)
// if(sessionStorage){
//   const user = getMe(sessionStorage.auth);
//   console.log(user,'user');
// }
// const user = getMe();
// console.log(user,'user');

const CampDetail = ({ history, isLogged, ...props }) => {
  const [camp, setCamp] = React.useState({
    activities: ['await'],
    createdAt: '2021-07-28T00:18:07.898Z',
    confirmedHelpers: '',
    confirmedGuests: ''
  });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  const paramsId = props.match.params.id;

  React.useEffect(() => {
    campDetail(paramsId);
  }, [paramsId]);

  const campDetail = async props => {
    setLoading(true);
    setError(null);
    try {
      const detailCamp = await getCampDetail(props);
      setCamp(detailCamp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  }
  const createdAt = camp.createdAt.split('T');

  return (
    <Layout isLogged={isLogged} {...props}>
      <div className="detail">
        <Loader hidden={!loading} />
        <Card className="card-exterior">
          <Card.Header className="detail-header">
            <Card.Text className="detail-title">{camp.name}</Card.Text>
          </Card.Header>
          <Card.Text className="detail-text">{camp.description}</Card.Text>
          <CardColumns className="columns">
            <Card className="detail-description">
              <Card.Header className="detail-header">
                <Card.Title>Description</Card.Title>
              </Card.Header>
              <Card.Body className="detail-body">
                <Card.Text>Direction: {camp.address}</Card.Text>
                <Card.Text>Location: {camp.location}</Card.Text>
                <Card.Text>Edition: {camp.edition}</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="detail-header">
                <Card.Title>Detail</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{camp.description}</Card.Text>
                <ListGroup>
                  <Card.Header>
                    <Card.Title>Activities</Card.Title>
                  </Card.Header>
                  {camp.activities.map((activity, index) => (
                    <ListGroup.Item className={'activities'} key={index}>
                      {activity}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="detail-header">
                <Card.Title>Dates</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <span>From: </span>
                  <time>{camp.from}</time>
                </Card.Text>
                <Card.Text>
                  <span>To: </span>
                  <time>{camp.to}</time>
                </Card.Text>
                <Card.Text>
                  <span>Created: </span>
                  <time>{createdAt[0]}</time>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="detail-header">
                <Card.Title>Contact</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Phone: {camp.phone}</Card.Text>
                <Card.Text>Email: {camp.email}</Card.Text>
                <Card.Text>Helpers: {camp.confirmedHelpers.length}</Card.Text>
                <Card.Text>Guests: {camp.confirmedGuests.length}</Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
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
        <Button 
        type="submit"
        onSubmit={handleSubmit}
        variant="outline-dark" 
        className="sign-up"
        disabled={!isLogged}
        >
          Sign up
        </Button>
      </div>
    </Layout>
  );
};

export default CampDetail;
