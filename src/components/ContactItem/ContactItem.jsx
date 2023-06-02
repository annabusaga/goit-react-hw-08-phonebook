import React from 'react';
import css from './ContactItem.module.css';
import { PropTypes } from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
