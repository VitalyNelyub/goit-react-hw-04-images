import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={css.spinner}>
        <Blocks
          visible={true}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    );
  }
}

export default Loader;
