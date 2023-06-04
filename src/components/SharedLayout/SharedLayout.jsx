import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/selectors';

export default function SharedLayout(params) {
  const token = useSelector(getToken);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {token && (
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            )}
            {!token && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>{' '}
        {token && <UserMenu />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
