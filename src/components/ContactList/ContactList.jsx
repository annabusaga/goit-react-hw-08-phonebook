import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const filter = useSelector(state => state.filter);
  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <>
      <ul className={css.list}>
        {getFilteredContacts().map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
}
