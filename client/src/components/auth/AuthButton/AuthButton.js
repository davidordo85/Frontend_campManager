import Button from '../../Button';
import { logout } from '../../../api/auth';

const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        // as: Link,
        //  to: '/login',
        children: 'Log in',
      } && {
        // as: Link,
        // to: '/register',
        children: 'Register',
      };

  return <Button className={className} {...props} />;
};

export default AuthButton;
