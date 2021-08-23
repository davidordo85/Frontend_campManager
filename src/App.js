import React from 'react';
import { getMe } from './api/auth';
import CampList from './components/index/CampList';
import { LoginPage, RegisterPage } from './components/auth';
import { ForgotPasswordPage } from './components/auth';
import { Switch, Route, Redirect } from 'react-router';
import PrivateRouteAdmin from './components/auth/PrivateRoute/PrivateRouteAdmin';
import { CampDetail } from './components/CampDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCamp from './components/admin/CreateCamp/CreateCampPage';
import Requests from './components/admin/Requests/Requests';
import UserList from './components/admin/UsersList/UsersList';
import ModifyCampList from './components/admin/ModifyCamp/ModifyCampPageList';
import ModifyCampPage from './components/admin/ModifyCamp/ModifyCampPage';
import PageError from './components/Error/PageError';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const [me, setMe] = React.useState({
    campsConfirmed: [],
    campsRequested: [],
  });

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  React.useEffect(() => {
    handleMe();
  }, []);

  const handleMe = async () => {
    if (isLogged) {
      try {
        const meDates = await getMe('auth');
        setMe(meDates.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('ok');
      }
    }
  };

  return (
    <div className="App">
      <Switch>
        {/*TODO: de las mas precisas a las menos precisas */}
        <Route exact path="/campDetail/:id">
          {routeProps => (
            <CampDetail
              isLogged={isLogged}
              onLogout={handleLogout}
              confirmed={me.campsConfirmed}
              requested={me.campsRequested}
              role={me.role}
              {...routeProps}
            />
          )}
        </Route>
        <PrivateRouteAdmin
          admin={me.role === 'admin'}
          isLogged={isLogged}
          exact
          path="/campModify/:id"
        >
          {routeProps => (
            <ModifyCampPage
              isLogged={isLogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>

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
        <Route path="/forgotpassword">
          <ForgotPasswordPage />
        </Route>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={me.role === 'admin'}
          exact
          path="/createCamp"
        >
          <CreateCamp isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={me.role === 'admin'}
          exact
          path="/requests"
        >
          <Requests isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={me.role === 'admin'}
          exact
          path="/modifyCamp"
        >
          {routeProps => (
            <ModifyCampList
              isLogged={isLogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={me.role === 'admin'}
          exact
          path="/userList"
        >
          {routeProps => (
            <UserList
              isLogged={isLogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>
        <Route exact path="/">
          {routeProps => (
            <CampList
              isLogged={isLogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </Route>
        {/*TODO: hacer pagina 404 */}
        <Route path="/404">
          <PageError />
        </Route>
        <Route>
          <Redirect to="/404"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
