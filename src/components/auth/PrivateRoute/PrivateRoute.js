import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ islogged, ...props }) => {
  const routeProps = islogged
    ? props
    : {
        children: ({ location }) => (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        ),
      };
  return <Route {...routeProps} />;
};

export default PrivateRoute;
