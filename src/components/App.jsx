import { Component } from "react";
import apiService from './Api/apiService';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Message from './Message/Message';
import IconButton from './IconButton/IconButton';
import { ReactComponent as CloseIcon } from './Icons/cross.svg';

export class App extends Component {

  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage:'',
    error: null,
  };

  componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImage();
    };
  };
  
  onChangeQuery = query => {
    this.setState({
      images: [],
      page: 1,
      searchQuery: query,
      error: null,
    });
  };

  getImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits } = apiService(searchQuery, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
      }));

      if (page !== 1) {
        this.scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Api fetch error', error);
      this.setState({ error });
    }
    finally {
      this.setState({
        isLoading: false,
      });
    }
  };


    handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, showModal, largeImage, error } = this.state;
    const needShowLoadMore = images.length > 0 && images.length >= 12;

    return (
      <>
        <Searchbar onSearch={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
        {needShowLoadMore && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className="Close-box">
              <IconButton onClick={this.toggleModal} aria-label="Close modal">
                <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
              </IconButton>
            </div>

            <img src={largeImage} alt="" className="Modal-image" />
          </Modal>
        )}

        {isLoading && <Loader />}

        {error && (
          <Message>
            <h2>Oops! 😯</h2>
            <p>
              Sorry, something went wrong. Please try again.
              <a href="/">refresh the page</a>.
            </p>
          </Message>
        )}
      </>
    );
  };
};

// key=31642520-d6a6357411a55db3459510987
// https://pixabay.com/api/?q=cat&page=1&key=31642520-d6a6357411a55db3459510987&image_type=photo&orientation=horizontal&per_page=12