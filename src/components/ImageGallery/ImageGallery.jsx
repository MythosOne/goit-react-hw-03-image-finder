import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ items }) {
    return (
        <>
            <ul className={styles.ImageGallery}>
                {items.map(item => (
                    <ImageGalleryItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.array,
};