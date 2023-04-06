import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, showModal }) {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem images={images} showModal={showModal} />
    </ul>
  );
}

ImageGallery.propType = {
  images: PropTypes.array.isRequired,
};
