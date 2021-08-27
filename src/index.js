import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');
const role = storage.get('role');

configureClient({ accessToken });

ReactDOM.render(
  <Router>
    <App isInitiallyLogged={!!accessToken} roles={role} />,
  </Router>,
  document.getElementById('root'),
);
