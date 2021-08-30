import { Redirect, Route } from 'react-router-dom';
import storage from '../../../utils/storage';

const PrivateRouteAdmin = ({ ...props }) => {
  const role = storage.get('role');
  const admin = role === 'admin';
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
