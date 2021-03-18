import styles from './Card.module.scss'

const Card = (props) => {

    const { 
        name,
        tagline,
        first_brewed,
        description,
        image_url,
        abv     
    } = props.beer;

    return (
        <div className={styles.card}>
            <img src={image_url} alt={name}/>
            <h2>{name}</h2>
            <h4>{tagline}</h4>
            <p>{description}</p>
            <h6>{abv}</h6>
            <h6>{first_brewed}</h6>
        </div>
    )
}

export default Card;