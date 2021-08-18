import React from 'react';
import Layout from '../../layout/layout';
import { getUser } from '../../../api/auth';

const UserList = ({ ...props }) => {
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
  return <Layout {...props}></Layout>;
};

export default UserList;
