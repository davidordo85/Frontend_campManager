import React from 'react';
import { Link } from 'react-router-dom';

import './DashboardAdmin.css';

const DashboardAdmin = () => {
  return (
    <div className="dashboardAdmin">
      <Link to="/createCamp" className="link">
        Create Camp
      </Link>
      <Link className="link">Modify Camp</Link>
      <Link className="link">Requests</Link>
      <Link className="link">Users List</Link>
      <Link className="link">Observations Users</Link>
      <Link className="link">Modify Profile</Link>
    </div>
  );
};

export default DashboardAdmin;
