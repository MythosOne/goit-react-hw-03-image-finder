import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { apiService } from './Api/apiService';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import Loader from './Loader/Loader';
import styles from './App.module.css';

export class App extends Component {

  state = {
    inputData: '',
    items: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
  };

  handleSubmit = inputData => {
    this.setState({ inputData, page: 1, items: [] });
  };

  componentDidUpdate = (_, prevState) => {
    if (this.state.inputData.trim() === '') {
      Notiflix.Notify.failure('You cannot search by empty field, try again.');
      return;
    };
    
    if (prevState.inputData !== this.state.inputData || prevState.page !== this.state.page) {
      this.setState({isLoading: true});
      apiService(this.state.inputData, this.state.page)
        .then(images => {
          this.setState(prevState => ({
            items: [...prevState.items, ...images.hits],
            totalHits: images.totalHits,
          }));
        })
        .finally(() => this.setState({ isLoading: false }));
    };
  };

  oneNextPage = () => {
    this.setState(prevState => ({page: prevState.page + 1}));
  };

    render() {
      const { items, totalHits, isLoading } = this.state;
      return (
        <>
          <div className= {styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery items={items} />
            {isLoading && <Loader />}
            {totalHits > 12 && totalHits > items.length && 
              (<Button onClick={this.oneNextPage} />)}
          </div>
      </>
      )
  };
};

export default App;