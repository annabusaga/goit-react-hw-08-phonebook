import Filter from 'components/Filter/Filter';
import css from './ContactsPage.module.css';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(getContacts));
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
}
