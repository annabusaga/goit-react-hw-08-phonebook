import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/selectors';
import css from './SharedLayout.module.css';

export default function SharedLayout(params) {
  const token = useSelector(getToken);
  return (
    <>
      <header>
        <nav>
          <ul className={css.list}>
            <li>
              <Link className={css.link} to="/">
                Home
              </Link>
            </li>
            {token && (
              <li>
                <Link className={css.link} to="/contacts">
                  Contacts
                </Link>
              </li>
            )}
            {!token && (
              <>
                <li>
                  <Link className={css.link} to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className={css.link} to="/login">
                    Login
                  </Link>
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
