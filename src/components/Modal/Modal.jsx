import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const ModalRoot = document.querySelector('#ModalRoot');

class Modal extends Component {

    static propTypes = {
        image: PropTypes.object,
        onClose: PropTypes.func,
    }.isRequired;
    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
    };

    keyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    onOverlayClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        };
    };

render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
        <div onClick={this.onOverlayClose} className={styles.Overlay}>
            <div className={styles.Modal}>
                <img src={largeImageURL} alt="img" />
            </div>
        </div>,
        ModalRoot
        );
    };
};

export default Modal;