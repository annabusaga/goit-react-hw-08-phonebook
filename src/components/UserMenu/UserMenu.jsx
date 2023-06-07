import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(logout());
  };
  const { email } = useSelector(getUser);
  return (
    <>
      <p>{email}</p>
      <button className={css.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
