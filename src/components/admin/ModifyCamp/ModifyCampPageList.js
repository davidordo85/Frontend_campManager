import React from 'react';
import Layout from '../../layout/layout';
import { getAllCamps } from '../../../api/camps';
import Loader from '../../Loader/Loader';
import { Card, ListGroup } from 'react-bootstrap';
import './ModifyCampPageList.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ModifyCampList = ({ ...props }) => {
  const [camps, setCamps] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    allCamps();
  }, []);

  const allCamps = async () => {
    try {
      const allCampsList = await getAllCamps();
      setCamps(allCampsList.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = event => {
    console.log('estoy clickando', event.target.id);
  };

  return (
    <Layout {...props}>
      <div className="main">
        <Loader hidden={!loading} />
        <Card>
          <CardHeader className="card-header">
            Choose the camp to modify
          </CardHeader>
          <ListGroup className="list-group">
            {camps.map((camp, index) => (
              <ListGroup.Item
                key={index}
                id={camp._id}
                className="list-camp"
                onClick={handleClick}
              >
                {camp.name} / {camp.location}
              </ListGroup.Item>
            ))}
          </ListGroup>
          {error && (
            <div onClick={resetError} className="loginPage-error">
              {error.message}
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default ModifyCampList;
