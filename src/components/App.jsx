import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImages } from '../components/Srvice/Fetch';

export default function App() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    if (!value) {
      return;
    }
    setLoader(true);
    fetchImages(value, page).then(
      data => {
        if (data.data.hits.length !== 0) {
          setImages(prev => [...prev, ...data.data.hits]);
          setIsHidden(true)
        } else {
          setIsHidden(false)
          alert('No more photo')
        }        
      },
      setLoader(false),
    );
  }, [page, value]);

  const resetPage = () => {
    setPage(1);
  };

  const showModal = image => {
    setModalImg(image);
  };

  const hideModal = () => {
    setModalImg('');
  };

  const getCurrentFetchValue = currentValue => {
    if (value !== currentValue) setValue(currentValue);
    setImages([]);
  };

  const loadMore = () => {
    setPage(page + 1);  
      // if (images.length === 0) {
      //   this.setState({ isHidden: false });
      //   alert('No more photo');
      // }
  };

  return (
    <div>
      <Searchbar
        getCurrentFetchValue={getCurrentFetchValue}
        resetPage={resetPage}
      />
      {modalImg && <Modal modalImg={modalImg} hideModal={hideModal} />}

      {<ImageGallery images={images} showModal={showModal} />}

      {loader && <Loader />}
      {isHidden && <Button currentValue={value} loadMore={loadMore} />}
    </div>
  );
}
