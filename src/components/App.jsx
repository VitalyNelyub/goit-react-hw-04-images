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
      data => setImages(data.data.hits),
      setLoader(false),
      setIsHidden(true)
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
    setValue(currentValue);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    fetchImages(value, nextPage).then(data => {
      if (data.data.hits.length === 0) {
        setIsHidden(false);
        alert('No more photo');
      }
      // setImages([...images, ...data.data.hits]);
      setPage(nextPage);
    });
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
