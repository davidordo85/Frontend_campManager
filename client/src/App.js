import React from 'react';

import CampList from './components/index/CampList';
import { LoginPage, RegisterPage, PrivateRoute } from './components/auth';
import { Switch, Route, Redirect } from 'react-router';
import CampDetail from './components/CampDetail/CampDetail';
import bg from './assets/images/bg.jpeg';
import './App.css';

var backgroundStyle = {
  width: '100%',
  height: '100vh',
  backgroundPosition: ' 10px 30px',
  backgroundImage: `url(${bg})`,
  margin: 0,
};

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App" style={backgroundStyle}>
      <Switch>
        {/*TODO: de las mas precisas a las menos precisas */}
        <PrivateRoute
          /* Si descompongo el componente no me coge el logeo y me manda al login
           si lo dejo como está el Layout no reconoce si está logeado */
          exact
          path="/campDetail/:id"
          isLogged={isLogged}
          onLogout={handleLogout}
          component={CampDetail}
        />

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
          {({ history }) => (
            <CampList
              isLogged={isLogged}
              onLogout={handleLogout}
              history={history}
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
