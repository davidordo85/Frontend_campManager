import React from 'react';
import Layout from '../../layout/layout';
import Loader from '../../Loader/Loader';
import { Card } from 'react-bootstrap';
import List from './List';
import { getUser, editRole } from '../../../api/auth';
import './UserList.css';

const UserList = ({ id, history, ...props }) => {
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    userList();
  }, []);

  const userList = async () => {
    try {
      setLoading(true);
      const getUserList = await getUser();
      setUser(getUserList.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (id, data) => {
    resetError();
    setLoading(true);
    try {
      await editRole(id, data);
    } catch (error) {
      setError(error);
    } finally {
      userList();
      setLoading(false);
    }
  };
  return (
    <Layout {...props}>
      <div>
        <Loader hidden={!loading} />
        <Card className="user-list">
          <Card.Header className="header">
            Choose the user to modify
          </Card.Header>
          <Card.Body className="user-list-body">
            <div className="list">
              {user.map((user, index) => (
                <List
                  key={index}
                  id={user._id}
                  email={user.email}
                  role={user.role}
                  comments={user.coments}
                  className="item-list"
                  history={history}
                  onSubmit={handleSubmit}
                ></List>
              ))}
            </div>
            {error && (
              <div onClick={resetError} className="loginPage-error">
                {error.message}
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default UserList;
