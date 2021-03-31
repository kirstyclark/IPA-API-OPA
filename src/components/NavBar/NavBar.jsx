import Order from '../Order';
import SearchBar from '../SearchBar';
import CheckBox from '../Checkbox'; 
// import SlidingScale from '../SlidingScale';
import styles from './NavBar.module.scss';

const NavBar = (props) => {

    const {reload} = props;

    return (
        <div className={`navbar ${styles.navbar}`}>
            <div className={styles.home} onClick={() => reload()}>
                <p>I</p>
                <p>P</p>
                <p>A</p>
            </div>
            <div className={styles.navContainer}>
                <h4>Filter...</h4>
                <SearchBar updateSearchText={props.updateSearchText}/>
                <CheckBox updateAbv={props.updateAbv}/>
                <h4>Order...</h4>
                <Order updateOrder={props.updateOrder}/>
            </div>
        </div>
    )
}

export default NavBar;