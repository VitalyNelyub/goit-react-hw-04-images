import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImages } from '../components/Srvice/Fetch';

class App extends Component {
  state = {
    value: '',
    images: null,
    page: 1,
    isHidden: false,
    loader: false,
    modalImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ loader: true });
      fetchImages(this.state.value, this.state.page).then(data =>
        this.setState({
          images: data.data.hits,
          isHidden: true,
          loader: false,
          // page: 1,
        })
      );
      // .finally(this.setState({ loader: false }));
    }
  }

  resetPage = () => {
    this.setState({ page: 1 });
  };

  showModal = image => {
    this.setState({ modalImg: image });
  };

  hideModal = () => {
    this.setState({ modalImg: '' });
  };

  getCurrentFetchValue = currentValue => {
    this.setState({ value: currentValue });
  };

  loadMore = () => {
    const nextPage = this.state.page + 1;
    fetchImages(this.state.value, nextPage).then(data => {
      if (data.data.hits.length === 0) {
        this.setState({ isHidden: false });
        alert('No more photo');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.data.hits],
        page: nextPage,
      }));
    });
  };

  render() {
    return (
      <div>
        <Searchbar getCurrentFetchValue={this.getCurrentFetchValue} resetPage={this.resetPage} />
        {this.state.modalImg && (
          <Modal modalImg={this.state.modalImg} hideModal={this.hideModal} />
        )}

        {<ImageGallery images={this.state.images} showModal={this.showModal} />}

        {this.state.loader && <Loader />}
        {this.state.isHidden && (
          <Button currentValue={this.state.value} loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
