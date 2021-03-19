import Card from '../Card';
import styles from './CardList.module.scss'

const CardList = (props) => {

    const { beers, listOrder } = props;

    let beerArray = [];

    if (listOrder !== '') {
        beerArray = orderedArray;
        
        const keyOrder = (listOrder, beers) => {
            let orderedArray = [];
            let keyArray;
            if (listOrder == 'a-z'){
                keyArray = (beers.map(beer => beer.name)).sort();
                console.log(keyArray);
                keyArray.map((key) => {
                    beers.filter((beer) => {
                        if (beer.name == key) {
                            return orderedArray.push(beer);
                        }
                    });
                    return orderedArray
                })
                return orderedArray;
            } 
            // else if (listOrder == 'z-a') {
            //     return (beers.map(beer => beer.name)).sort((a, b) => b-a);
            // } else if (listOrder == 'old-new') {
            //     return (beers.map(beer => beer.first_brewed)).sort((a, b) => a-b);
            // } else if (listOrder == 'new-old') {
            //     return (beers.map(beer => beer.first_brewed)).sort((a, b) => b-a);
            // } else {
            //     return []
            // }
            // console.log(orderedArray);
        }
    } else {
        beerArray = beers;
    }
    
    const getCardJsx = (beer) => (
        <div key={beer.id}>
            <Card beer={beer} />
        </div>
    );
        
    return <section className={styles.cardList}>{beerArray.map(getCardJsx)}</section>;

}

export default CardList;