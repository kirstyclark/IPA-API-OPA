import styles from './CheckBox.module.scss';

const CheckBox = (props) => { 
    const { updateAbv } = props; 

    return (
        <div className={styles.checkBox}>
            <button onClick={event => updateAbv(event)}>High ABV (&gt; 6.0%)</button>
        </div>
    )
}

export default CheckBox;