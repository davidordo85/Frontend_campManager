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
  const [islogged, setIsLogged] = React.useState(isInitiallyLogged);
  const role = React.useState(roles);

  const [me, setMe] = React.useState({
    campsConfirmed: [],
    campsRequested: [],
    campsRejected: [],
    email: [],
  });

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  React.useEffect(() => {
    if (islogged) {
      handleMe();
    }
  }, []);

  const handleMe = async () => {
    if (islogged) {
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
              islogged={islogged}
              onLogout={handleLogout}
              confirmed={me.campsConfirmed}
              requested={me.campsRequested}
              reject={me.campsRejected}
              role={role[0]}
              {...routeProps}
            />
          )}
        </Route>
        <PrivateRouteAdmin islogged={islogged} exact path="/campModify/:id">
          {routeProps => (
            <ModifyCampPage
              islogged={islogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>
        <PrivateRoute islogged={islogged} exact path="/myProfile">
          <MyProfile
            islogged={islogged}
            onLogout={handleLogout}
            handleMe={handleMe}
            data={me}
          />
        </PrivateRoute>
        <PrivateRoute
          islogged={islogged}
          onLogout={handleLogout}
          data={me}
          exact
          path="/userRequests"
        >
          {routeProps => (
            <UserRequest
              islogged={islogged}
              onLogout={handleLogout}
              id={me._id}
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
        <PrivateRouteAdmin islogged={islogged} exact path="/createCamp">
          <CreateCamp islogged={islogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin islogged={islogged} exact path="/requests">
          <Requests islogged={islogged} onLogout={handleLogout} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin islogged={islogged} exact path="/modifyCamp">
          {routeProps => (
            <ModifyCampList
              islogged={islogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>
        <PrivateRouteAdmin islogged={islogged} exact path="/userList">
          {routeProps => (
            <UserList
              islogged={islogged}
              onLogout={handleLogout}
              {...routeProps}
            />
          )}
        </PrivateRouteAdmin>
        <Route exact path="/">
          {routeProps => (
            <CampList
              islogged={islogged}
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
