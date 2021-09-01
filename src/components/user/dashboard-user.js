import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard-user.css'


const UserDashboard = () => {


    return (
         <div className="dashboardUser">
            <Link to="/" className="link">
                Camps
            </Link>
            <Link to="/myprofile" className="link">
                My Profile
            </Link>
            <Link to="/userRequests" className="link" >
                My requests
            </Link>
        </div>
    )
}

export default UserDashboard;