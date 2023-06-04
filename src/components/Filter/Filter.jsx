import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <label className={css.filter} htmlFor="">
        Find contacts by name{' '}
        <input
          type="text"
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </>
  );
}
