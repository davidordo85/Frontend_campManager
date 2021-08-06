import React from 'react';
import { Link } from 'react-router-dom';

import './DashboardAdmin.css';

const DashboardAdmin = () => {
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
      <Link to="#" className="link">
        Modify Profile
      </Link>
    </div>
  );
};

export default DashboardAdmin;
