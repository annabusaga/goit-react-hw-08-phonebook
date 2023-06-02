// import Filter from '../Filter/Filter';
import css from './ContactsPage.module.css';
// import { useDispatch } from 'react-redux';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import { fetchContacts } from 'redux/operations';

export default function ContactsPage() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      {/* <ContactForm /> */}

      <h2 className={css.title}>Contacts</h2>
      {/* <Filter /> */}

      {/* <ContactList /> */}
    </div>
  );
}
