import React from 'react';
import DashboardAdmin from '../../admin/DashboardAdmin/DashboardAdmin';
import { getMe } from '../../../api/auth';
import UserDashboard from '../../user/dashboard-user';

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
      throw new Error(error);
    } 
  };

  /*   {
    /*TODO: mete aqui tus dashboard
  } */
  return <div>{me.role === 'admin' ? <DashboardAdmin /> : me.role === 'helper' ? <UserDashboard /> : null}</div>;
};

export default Dashboard;
