import { Component } from "react";
import apiService from './Api/apiService';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
// import Modal from './Modal';
// import Loader from './Loader';
// import Button from './Button';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImage();
  }
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
      console.log('App fetch error', error);
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





  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  render() {
    const { images, isLoading, largeImage, error } = this.state;
    const needShowLoadMore = images.length > 0 && images.length >= 12;

    return (
      <>
        <Searchbar onSearch={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
        {needShowLoadMore && <Button onClick={this.getImages}/>}
        {/* <Modal /> */}
        {/* <Loader /> */}
        {/* <Button/> */}
    </>
    );
  };
};


// key=31642520-d6a6357411a55db3459510987
// https://pixabay.com/api/?q=cat&page=1&key=31642520-d6a6357411a55db3459510987&image_type=photo&orientation=horizontal&per_page=12