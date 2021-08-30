import { Redirect, Route } from 'react-router-dom';

const PrivateRouteAdmin = ({ admin, ...props }) => {
  const routeProps = admin
    ? props
    : {
        children: ({ location }) => (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        ),
      };
  return <Route {...routeProps} />;
};

export default PrivateRouteAdmin;
