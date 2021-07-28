import React from 'react';
import Layout from '../layout/layout';
import { getCampDetail } from '../../api/camps';
import Loader from '../Loader/Loader';
import { Button, Card, Alert, ListGroup, CardColumns } from 'react-bootstrap';

import './CampDetail.css';

const CampDetail = ({ history, ...props }) => {
  const [camp, setCamp] = React.useState({
    activities: ['await'],
    createdAt: '2021-07-28T00:18:07.898Z',
  });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  const paramsId = props.match.params.id;

  React.useEffect(() => {
    campDetail(paramsId);
  }, []);

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

  const createdAt = camp.createdAt.split('T');
  console.log(camp);

  return (
    <Layout {...props}>
      <div className="detail">
        <Loader hidden={!loading} />
        <Card className="card-exterior">
          <Card.Header className="detail-header">Detail Camp</Card.Header>
          <Card.Text className="detail-text">{camp.name}</Card.Text>
          <CardColumns className="columns">
            <Card className="detail-description">
              <Card.Header className="detail-header">Description</Card.Header>
              <Card.Text> direction: {camp.address}</Card.Text>
              <Card.Text> location: {camp.location}</Card.Text>
              <Card.Text> edition: {camp.edition}</Card.Text>
            </Card>
            <Card>
              <Card.Header className="detail-header">Detail</Card.Header>
              <Card.Text>{camp.description}</Card.Text>
              <ListGroup>
                <Card.Header>activities:</Card.Header>
                {camp.activities.map((activity, index) => (
                  <ListGroup.Item className={'activities'} key={index}>
                    {activity}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
            <Card>
              <Card.Header className="detail-header">Dates</Card.Header>
              <Card.Text>
                <span>created: </span>
                <time>{createdAt[0]}</time>
              </Card.Text>
              <Card.Text>
                <span>from: </span>
                <time>{camp.from}</time>
              </Card.Text>
              <Card.Text>
                <span>to: </span>
                <time>{camp.to}</time>
              </Card.Text>
            </Card>
            <Card>
              <Card.Header className="detail-header">Contact</Card.Header>
              <Card.Text>phone: {camp.phone}</Card.Text>
              <Card.Text>email: {camp.email}</Card.Text>
              <Card.Text>helpers: {camp.helpers}</Card.Text>
              <Card.Text>guests: {camp.guests}</Card.Text>
            </Card>
            <Button variant="outline-dark" className="sign-up">
              Sign up
            </Button>
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
      </div>
    </Layout>
  );
};

export default CampDetail;
