import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onImageClick }) => {
    const fullImage = () => onImageClick(image.largeImageURL);

    return (
        <li class={styles.ImageGalleryItem}>
            <img
                src={image.webFormURL}
                alt={image.tags}
                className={styles['ImageGalleryItem-image']}
                onClick={fullImage}
            />
        </li>
    );
};

ImageGalleryItem.defaultProps = {
    tags: '',
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    }),
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;