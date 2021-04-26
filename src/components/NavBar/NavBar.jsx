import Order from '../Order';
import SearchBar from '../SearchBar';
import styles from './NavBar.module.scss';

const NavBar = (props) => {

    return (
        <div className={`navbar ${styles.navbar}`}>
            <div className={styles.home} onClick={()=> window.location.reload()}>
                <p>I</p>
                <p>P</p>
                <p>A</p>
            </div>
            <div className={styles.navContainer}>
                <SearchBar updateAbv={props.updateAbv} updateSearchText={props.updateSearchText}/>
                <Order updateOrder={props.updateOrder}/>
            </div>
        </div>
    )
}

export default NavBar;