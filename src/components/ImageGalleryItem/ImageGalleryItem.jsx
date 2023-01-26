import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        shownModal: false,
    };
    onModal = () => {
        this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
    };
render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
        <li className= {styles.ImageGalleryItem}>
            <img
                onClick={this.onModal}
                className={styles['ImageGalleryItem-image']}
                src={webformatURL}
                alt="img"
            />
            {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
        </li>
    );
    };
};

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};

export default ImageGalleryItem;