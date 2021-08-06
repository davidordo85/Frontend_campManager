import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');

//console.log(accessToken)

//console.log(accessToken,'accessToken index')
console.log(sessionStorage,'sessionStorage')
console.log(localStorage,'localStorage')

configureClient({ accessToken });

ReactDOM.render(
  <Router>
    <App isInitiallyLogged={!!accessToken} />,
  </Router>,
  document.getElementById('root'),
);
