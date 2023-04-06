import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ hideModal, modalImg }) {
  useEffect(() => {
    window.addEventListener('keydown', pressEsc);
  });

  const pressEsc = e => {
    if (e.code === 'Escape') {
      hideModal();
    }
  };

  const clickOverlay = e => {
    if (e.currentTarget === e.target) {
      hideModal();
    }
  };
  return (
    <div className={css.overlay} onClick={clickOverlay}>
      <div className={css.modal}>
        <img src={modalImg} alt={modalImg} className={css.modal__img} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};
