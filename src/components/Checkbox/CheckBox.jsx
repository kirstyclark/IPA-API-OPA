import styles from './CheckBox.module.scss';

const CheckBox = (props) => { 
    const { updateAbv } = props; 

    return (
        <div className={styles.CheckBox}>
            <label>High ABV (&gt; 6.0%)</label>
            <input type='checkbox' onClick={event => updateAbv(event)} />
        </div>
    )
}

export default CheckBox;