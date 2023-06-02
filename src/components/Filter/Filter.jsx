import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
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
