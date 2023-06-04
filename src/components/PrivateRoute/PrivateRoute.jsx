import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(getToken);

  return token ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
