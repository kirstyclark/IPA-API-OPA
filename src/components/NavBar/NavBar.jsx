import Order from '../Order';
import SearchBar from '../SearchBar';
import CheckBox from '../Checkbox'; 
// import SlidingScale from '../SlidingScale';
import styles from './NavBar.module.scss';

const NavBar = (props) => {

    return (
        <div className={`navbar ${styles.navbar}`}>
            <div className={styles.navContainer}>
                <SearchBar updateSearchText={props.updateSearchText}/>
                <Order updateOrder={props.updateOrder}/>
                <CheckBox updateAbv={props.updateAbv}/>
            </div>
        </div>
    )
}

export default NavBar;