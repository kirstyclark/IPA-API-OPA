import Order from '../Order';
import SearchBar from '../SearchBar';
import CheckBox from '../Checkbox'; 
// import SlidingScale from '../SlidingScale';
import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <div className={styles.navBar}>
            <Order updateOrder={props.updateOrder}/>
            <SearchBar updateSearchText={props.updateSearchText}/>
            <CheckBox updateAbv={props.updateAbv}/>
        </div>
    )
}

export default NavBar;