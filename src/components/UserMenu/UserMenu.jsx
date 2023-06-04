import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(logout());
  };
  const { email } = useSelector(getUser);
  return (
    <>
      <p>{email}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
