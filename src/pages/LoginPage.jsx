import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { useState } from 'react';

export default function LoginPage(params) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);

        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      login({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
    );

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input value={email} onChange={handleChange} name="email" type="text" />
      </label>

      <label>
        Password
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}
