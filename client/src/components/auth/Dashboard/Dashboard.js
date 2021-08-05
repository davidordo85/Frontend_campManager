import React from 'react';

import DashboardAdmin from '../../admin/DashboardAdmin/DashboardAdmin';
import { getMe } from '../../../api/auth';
const Dashboard = () => {
  const [me, setMe] = React.useState({});

  React.useEffect(() => {
    handleMe();
  }, []);

  const handleMe = async () => {
    try {
      const meDates = await getMe('auth');
      setMe(meDates.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('ok');
    }
  };

  if (me.role === 'admin') {
    return <DashboardAdmin />;
  } else {
    return null;
  }
};

export default Dashboard;
