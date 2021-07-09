import React from 'react';

import CampList from './components/index/CampList';
import { LoginPage } from './components/auth';
import bg from './assets/images/bg.jpeg';
import './App.css';

var backgroundStyle = {
  width: '100%',
  height: '100vh',
  backgroundPosition: ' 10px 30px',
  backgroundImage: `url(${bg})`,
  margin: 0,
};

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App" style={backgroundStyle}>
      {isLogged ? (
        <CampList isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/* <CampList /> */}
    </div>
  );
}

export default App;
