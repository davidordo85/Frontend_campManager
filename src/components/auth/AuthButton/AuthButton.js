//import Button from '../../Buttons/Button';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/auth';

const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out', className: 'logout' }
    : {
        as: Link,
        to: '/login',
        children: 'Log in',
      };

  return (
    <Button
      size="lg"
      className={className}
      variant="outline-light"
      {...props}
    />
  );
};

export default AuthButton;
