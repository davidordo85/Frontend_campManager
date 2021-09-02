import React from 'react';
import Layout from '../layout/layout';
import { Link, Redirect } from 'react-router-dom';
import {
  deletedCamp,
  getCampDetail,
  subscribe,
  unSubscribe,
} from '../../api/camps';
import Loader from '../Loader/Loader';
import pending from '../../assets/images/pending.svg';
import accepted from '../../assets/images/accepted.svg';
import rejected from '../../assets/images/rejected.svg';
import { Card, Alert, ListGroup, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './CampDetail.css';

const CampDetail = ({ history, islogged, _id, ...props }) => {
  const [camp, setCamp] = React.useState({
    activities: ['await'],
    createdAt: '2021-07-28T00:18:07.898Z',
    confirmedHelpers: '',
    confirmedGuests: '',
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

  const handleSubmit = async () => {
    try {
      await subscribe(paramsId);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  const handleSubmitUnsubscribe = async () => {
    try {
      await unSubscribe(paramsId);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  const handleDeleted = async () => {
    if (window.confirm('sure you want to delete this camp?')) {
      alert('thanks for confirm');
      try {
        await deletedCamp(paramsId);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        window.location.reload();
      }
    }
  };

  const confirmed = props.confirmed;
  const requested = props.requested;
  const reject = props.reject;
  const role = props.role;

  function compare(item1, item2) {
    return item1.some(item => item2 === item);
  }

  const createdAt = camp.createdAt.split('T');

  return (
    <Layout islogged={islogged} {...props}>
      <div className="detail">
        <Loader hidden={!loading} />
        <Card className="card-exterior">
          <Card.Header className="detail-header">
            <Card.Text className="detail-title">{camp.name}</Card.Text>
          </Card.Header>
          <CardColumns className="columns">
            <Card className="detail-description">
              <Card.Header className="detail-header">
                <Card.Title>Description</Card.Title>
              </Card.Header>
              <Card.Body className="detail-body">
                <Card.Text>Direction: {camp.address}</Card.Text>
                <Card.Text>Location: {camp.location}</Card.Text>
                <Card.Text>Edition: {camp.edition}</Card.Text>
                {!islogged ? null : role === 'admin' ? null : compare(
                    confirmed,
                    paramsId,
                  ) ? (
                  <div className="status">
                    <Card.Text className="img-txt">Request status</Card.Text>
                    <Card.Img className="type-camp" src={accepted} />
                  </div>
                ) : compare(requested, paramsId) ? (
                  <div className="status">
                    <Card.Text className="img-txt">Request status</Card.Text>
                    <Card.Img className="type-camp" src={pending} />
                  </div>
                ) : compare(reject, paramsId) ? (
                  <div className="status">
                    <Card.Text className="img-txt">Request status</Card.Text>
                    <Card.Img className="type-camp" src={rejected} />
                  </div>
                ) : null}
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
          {error && error.status === 404 ? (
            <Redirect to="/404" />
          ) : (
            error && (
              <Alert
                variant="danger"
                onClick={resetError}
                className="loginPage-error"
              >
                {error.message}
              </Alert>
            )
          )}
        </Card>
        {!islogged ? (
          <Link to="/login" className="sign-up">
            login to join the camp{' '}
          </Link>
        ) : role === 'admin' ? null : compare(
            reject,
            paramsId,
          ) ? null : role === 'guest' &&
          camp.confirmedHelpers.length >=
            camp.confirmedGuests.length ? null : role === 'helper' &&
          camp.confirmedHelpers.length >= camp.capacity ? null : compare(
            confirmed,
            paramsId,
          ) ? (
          <Button
            type="submit"
            onClick={handleSubmitUnsubscribe}
            variant="outline-danger"
            className="sign-up"
          >
            Cancel sign
          </Button>
        ) : compare(requested, paramsId) ? (
          <Button
            type="submit"
            onClick={handleSubmitUnsubscribe}
            variant="outline-danger"
            className="sign-up"
          >
            Cancel sign
          </Button>
        ) : (
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="outline-dark"
            className="sign-up"
          >
            Sign up
          </Button>
        )}
        {!islogged ? null : role === 'admin' ? (
          <div>
            <Button
              className="sign-up"
              type="submit"
              onClick={handleDeleted}
              variant="outline-danger"
            >
              Delete camp
            </Button>
            <Button
              as={Link}
              to={`/campModify/${paramsId}`}
              variant="outline-dark"
              className="sign-up"
            >
              {' '}
              Edit camp
            </Button>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default CampDetail;
