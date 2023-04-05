import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, showModal }) {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem images={images} showModal={showModal} />
    </ul>
  );
}
