import { Component } from 'react';
import css from '../Modal/Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEsc);
  }

  pressEsc = e => {
    if (e.code === 'Escape') {
      this.props.hideModal();
    }
  };

  clickOverlay = e => {
      if (e.currentTarget === e.target) {
          this.props.hideModal();
      }
  };
  render() {
    return (
      <div className={css.overlay} onClick={this.clickOverlay}>
        <div className={css.modal}>
          <img
            src={this.props.modalImg}
            alt={this.props.modalImg}
            className={css.modal__img}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
