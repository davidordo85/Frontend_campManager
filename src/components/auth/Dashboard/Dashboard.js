import React from 'react';
import DashboardAdmin from '../../admin/DashboardAdmin/DashboardAdmin';
import storage from '../../../utils/storage';
import UserDashboard from '../../user/dashboard-user';

const Dashboard = () => {
  const role = storage.get('role');
  return (
    <div>
      {role === 'admin' ? (
        <DashboardAdmin />
      ) : role === 'helper' ? (
        <UserDashboard />
      ) : null}
    </div>
  );
};

export default Dashboard;
