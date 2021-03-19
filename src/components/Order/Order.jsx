import styles from './Order.module.scss';

const Order = (props) => {
    
    const { updateOrder } = props; 

    const orderChoice = (event) => {
        return updateOrder(event.target.value);
    }

    return (
        <div className={styles.order}>
            <label>View options</label>
            <select id='order-options' onChange={orderChoice}>
                <option value=''></option>
                <option value='a-z'>Alphabetical; A-Z</option>
                <option value='z-a'>Alphabetical; Z-A</option>
                <option value='old-new'>Brew date; oldest - newest</option>
                <option value='new-old'>Brew date; newest - oldest</option>
            </select>
        </div>
    )
}

export default Order;