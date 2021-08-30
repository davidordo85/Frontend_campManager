import { Redirect, Route } from 'react-router-dom';
import storage from '../../../utils/storage';

const PrivateRouteAdmin = ({ isLogged, ...props }) => {
  const role = storage.get('role');
  const admin = role === 'admin';
  const routeProps =
    admin && isLogged
      ? props
      : {
          children: ({ location }) => (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          ),
        };
  return <Route {...routeProps} />;
};

export default PrivateRouteAdmin;
