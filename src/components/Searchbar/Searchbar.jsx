import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChangeStarch = e => {
    this.setState({ value: e.target.value });
  };

  getInputValue = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value !== this.props.currentValue) {
      this.props.getCurrentFetchValue(value);
      this.props.resetPage();
    }
    this.props.getCurrentFetchValue(value);
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.searchForm} onSubmit={this.getInputValue}>
            <button type="submit" className={css.button}>
              <span className={css.button__label}>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              placeholder="Search images and photos"
              onChange={this.handleChangeStarch}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
