
import SearchForm from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({onSearch}) => {
    return (
        <header className={styles.Searchbar}>
            <SearchForm onSearch={onSearch}/>
        </header>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Searchbar;