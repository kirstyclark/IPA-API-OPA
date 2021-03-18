import Card from '../Card';
import styles from './CardList.module.scss'

const CardList = (props) => {

    const { beers } = props;

    const getCardJsx = (beer) => (
        <div key={beer.id}>
            <Card beer={beer} />
        </div>
    );
        
    return <section className={styles.cardList}>{beers.map(getCardJsx)}</section>;

}

export default CardList;