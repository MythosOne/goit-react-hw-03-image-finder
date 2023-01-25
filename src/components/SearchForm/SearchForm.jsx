import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';


class SearchForm extends Component {
    state = {
        query: '',
    };

    handleSearchInput = event => {
        const { name, value } = event.currentTarget;

        this.setState = ({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.query) {
            return;
        }

        this.props.onSearch(this.state.query);

        this.resetForm();
    };

    resetForm = () => {
        this.setState = ({
            query: '',
        });
    };

    render() {
        return (
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                <button type="button" className={styles['SearchForm-button']}>
                    <span className={styles['SearchForm-button-label']}>Search</span>
                </button>

                <input
                    className={styles['SearchForm-input']}
                    type="text"
                    name="query"
                    onChange={this.handleSearchInput}
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        )
    }
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
