import React from 'react';
import logo from '../../../assets/images/logoW.png';

function RegisterPage() {
  return (
    <div className="registerPage">
      <header>
        <div className="header-nav">
          <div className="header-logo">
            <img className="logo" alt="logo" src={logo}></img>
          </div>
        </div>
      </header>
      <h1 className="registerPage-title">Register in to CampManager</h1>
    </div>
  );
}

export default RegisterPage;
