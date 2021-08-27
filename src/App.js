import React from 'react';
import { getMe } from './api/auth';
import CampList from './components/index/CampList';
import { LoginPage, RegisterPage } from './components/auth';
import { ForgotPasswordPage } from './components/auth';
import { Switch, Route, Redirect } from 'react-router';
import PrivateRouteAdmin from './components/auth/PrivateRoute/PrivateRouteAdmin';
import { CampDetail } from './components/CampDetail';
import { PrivateRoute } from './components/auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCamp from './components/admin/CreateCamp/CreateCampPage';
import Requests from './components/admin/Requests/Requests';
import UserList from './components/admin/UsersList/UsersList';
import ModifyCampList from './components/admin/ModifyCamp/ModifyCampPageList';
import ModifyCampPage from './components/admin/ModifyCamp/ModifyCampPage';
import PageError from './components/Error/PageError';
import UserRequest from './components/user/userRequest';
import MyProfile from './components/user/MyProfile';

function App({ isInitiallyLogged, roles }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const role = React.useState(roles);

  const [me, setMe] = React.useState({
    campsConfirmed: [],
    campsRequested: [],
    campsRejected: [],
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
        throw new Error(error);
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
              reject={me.campsRejected}
              role={role[0]}
              {...routeProps}
            />
          )}
        </Route>
        <PrivateRouteAdmin
          admin={role[0] === 'admin'}
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
        <PrivateRoute
          isLogged={isLogged}
          onLogout={handleLogout}
          exact
          path="/myProfile"
        >
          <MyProfile isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRoute>
        <PrivateRoute
          isLogged={isLogged}
          onLogout={handleLogout}
          exact
          path="/userRequests"
        >
          {routeProps => (
            <UserRequest
              isLogged={isLogged}
              onLogout={handleLogout}
              confirmed={me.campsConfirmed}
              requests={me.campsRequested}
              role={role[0]}
              {...routeProps}
            />
          )}
        </PrivateRoute>
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
          admin={role[0] === 'admin'}
          exact
          path="/createCamp"
        >
          <CreateCamp isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={role[0] === 'admin'}
          exact
          path="/requests"
        >
          <Requests isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin
          isLogged={isLogged}
          admin={role[0] === 'admin'}
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
          admin={role[0] === 'admin'}
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
