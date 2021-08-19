import React from 'react';
import Layout from '../../layout/layout';
import Loader from '../../Loader/Loader';
import { Card } from 'react-bootstrap';
import List from './List';
import { getUser } from '../../../api/auth';
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
  console.log(user);
  return (
    <Layout {...props}>
      <div>
        <Loader hidden={!loading} />
        <Card className="user-list">
          <Card.Header className="card-header">
            Choose the camp to modify
          </Card.Header>
          <div className="list">
            {user.map((user, index) => (
              <List
                key={index}
                id={user._id}
                name={user.name}
                firstFamilyName={user.firstFamilyName}
                //secondFamilyName={user.secondFamilyName}
                email={user.email}
                role={user.role}
                className=""
                history={history}
              ></List>
            ))}
          </div>
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

export default UserList;
