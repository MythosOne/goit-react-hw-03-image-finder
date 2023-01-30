import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
    return (
        <button className={styles.Button} onClick={onClick}>
            Load more
        </button>
    );
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
