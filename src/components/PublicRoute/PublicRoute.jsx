import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(getToken);

  return token ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
