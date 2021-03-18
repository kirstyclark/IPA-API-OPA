import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
    const { updateSearchText } = props; 
    
    return (
        <div className={styles.searchBar}>
            <input type='text' placeholder='search beers' onInput={event => updateSearchText(event.target.value)} />
        </div>
    )
}

export default SearchBar;