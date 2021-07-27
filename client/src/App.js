import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampList from './components/index/CampList';
import { LoginPage, RegisterPage } from './components/auth';
import { Switch, Route, Redirect } from 'react-router';
import { CampDetail } from './components/CampDetail';
import './App.css';

/* var backgroundStyle = {
  width: '100%',
  height: '100vh',
  backgroundPosition: ' 10px 30px',
  backgroundImage: `url(${bg})`,
  margin: 0,
}; */

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      <Switch>
        {/*TODO: de las mas precisas a las menos precisas */}
        <Route exact path="/campDetail/:id">
          {routeProps => (
            <CampDetail
              isLogged={isLogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </Route>

        <Route path="/login">
          {({ history, location }) => (
            <LoginPage
              onLogin={handleLogin}
              history={history}
              location={location}
            />
          )}
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/">
          {({ history, location }) => (
            <CampList
              isLogged={isLogged}
              onLogout={handleLogout}
              history={history}
              location={location}
            ></CampList>
          )}
        </Route>
        {/*TODO: hacer pagina 404 */}
        <Route path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            404 | Not found page
          </div>
        </Route>
        <Route>
          <Redirect to="/404"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
