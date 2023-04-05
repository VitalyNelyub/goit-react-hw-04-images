import css from '../Button/Button.module.css';
// import { fetchImages } from '../Srvice/Fetch';

export default function Button({ loadMore }) {
  return (
    <button type="button" className={css.load__moreBtn} onClick={loadMore}>
      Load more
    </button>
  );
}
