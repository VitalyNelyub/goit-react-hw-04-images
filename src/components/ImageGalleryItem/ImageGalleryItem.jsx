import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ showModal, images }) {

  const showImage = e => {
    e.preventDefault();
    showModal(e.target.src);
  };

  if (images)
    return images.map(img => {
      return (
        <li key={img.id} className={css.gallery__item}>
          <img
            src={img.webformatURL}
            className={css.gallery__img}
            alt={img.tags}
            onClick={showImage}
          />
        </li>
      );
    });
}
