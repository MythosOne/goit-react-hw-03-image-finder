import React, { Component } from 'react';
import {TailSpin} from 'react-loader-spinner';
import styles from './Loader.module.css';



class Loader extends Component {
render() {
    return (
        <div className={styles.Loader}>
            <TailSpin  color="#3d6fcce2" radius = "9" height={100} width={100} />
        </div>
    )
    };
};

export default Loader;