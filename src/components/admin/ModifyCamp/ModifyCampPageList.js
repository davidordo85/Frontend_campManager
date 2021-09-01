import React from 'react';
import Layout from '../../layout/layout';
import { getAllCamps } from '../../../api/camps';
import Loader from '../../Loader/Loader';
import { Card, ListGroup } from 'react-bootstrap';
import List from './List';
import './ModifyCampPageList.css';

const ModifyCampList = ({ id, history, ...props }) => {
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

  return (
    <Layout {...props}>
      <div className="main">
        <Loader hidden={!loading} />
        <Card className="card-modify">
          <Card.Header className="header">
            <Card.Text className="modifyCampForm-title">Choose the camp to modify</Card.Text>
          </Card.Header>
          <ListGroup className="list-group">
            {camps.map((camp, index) => (
              <List
                key={index}
                id={camp._id}
                name={camp.name}
                location={camp.location}
                className="list-camp"
                history={history}
              ></List>
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
