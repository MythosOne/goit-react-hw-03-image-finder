import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
    
        <ul className={styles.ImageGallery}>
            {images.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        onImageClick={onImageClick}
                    />
                );
            })}
        </ul>
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;