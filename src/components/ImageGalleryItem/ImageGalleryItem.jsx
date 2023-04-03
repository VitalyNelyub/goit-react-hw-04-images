import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    currentImage: null,
  };

  showModalImg = image => {
    this.setState({ currentImage: image });
    this.props.showModal(this.state.currentImage);
  };

  showImage = e => {
    e.preventDefault();
    this.setState({ currentImage: e.target.src });
    this.props.showModal(e.target.src);
  };

  render() {
    if (this.props.images)
      return this.props.images.map(img => {
        return (
          <li key={img.id} className={css.gallery__item}>
              <img
                src={img.webformatURL}
                className={css.gallery__img}
                alt={img.tags}
                onClick={this.showImage}
              />
          </li>
        );
      });
  }
}

export default ImageGalleryItem;
