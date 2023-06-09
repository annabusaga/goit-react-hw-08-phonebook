import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import css from './RegisterPage.module.css';

export default function RegisterPage(params) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

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
      register({
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.name}>
          Name
          <input value={name} onChange={handleChange} name="name" type="text" />
        </label>
        <label className={css.name}>
          Email
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
          />
        </label>

        <label className={css.name}>
          Password
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </label>

        <button className={css.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
