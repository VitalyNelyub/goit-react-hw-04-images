import { useState } from 'react';
import PropTypes from 'prop-types';

import css from '../Searchbar/Searchbar.module.css';

export default function Searchbar({
  getCurrentFetchValue,
  resetPage,
  currentValue,
}) {
  const [value, setValue] = useState('');

  const handleChangeStarch = e => {
    setValue(e.target.value);
  };

  const getInputValue = e => {
    e.preventDefault();
    if (value !== currentValue) {
      getCurrentFetchValue(currentValue);
      resetPage();
    }
    getCurrentFetchValue(value);
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={getInputValue}>
          <button type="submit" className={css.button}>
            <span className={css.button__label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            onChange={handleChangeStarch}
            value={value}
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  getCurrentFetchValue: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
};
