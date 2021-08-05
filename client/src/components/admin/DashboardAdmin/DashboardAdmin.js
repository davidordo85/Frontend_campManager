import React from 'react';
import { getMe } from '../../../api/auth';
import { Link } from 'react-router-dom';

import './DashboardAdmin.css';

const DashboardAdmin = () => {
  const [me, setMe] = React.useState({});

  React.useEffect(() => {
    handleMe();
  }, []);

  const handleMe = async () => {
    try {
      const meDates = await getMe('auth');
      setMe(meDates);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('ok');
    }
  };

  console.log(me);
  return (
    <div className="dashboardAdmin">
      <Link to="/createCamp" className="link">
        Create Camp
      </Link>
      <Link to="/modifyCamp" className="link">
        Modify Camp
      </Link>
      <Link to="/requests" className="link">
        Requests
      </Link>
      <Link to="/UserList" className="link">
        Users List
      </Link>
      <Link to="/ObservationUser" className="link">
        Observations Users
      </Link>
      <Link className="link">Modify Profile</Link>
    </div>
  );
};

export default DashboardAdmin;
