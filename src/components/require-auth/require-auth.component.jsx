import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider.context';

/**
 * Redirects guests to /auth with return path in location.state.from
 */
const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
