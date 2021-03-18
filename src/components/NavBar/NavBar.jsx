import SearchBar from '../SearchBar';
import CheckBox from '../Checkbox';
// import SlidingScale from '../SlidingScale';
import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <div className={styles.navBar}>
            <SearchBar updateSearchText={props.updateSearchText}/>
            {/* <SlidingScale updateScale={props.updateScale}/> */}
            <CheckBox />
        </div>
    )
}

export default NavBar;