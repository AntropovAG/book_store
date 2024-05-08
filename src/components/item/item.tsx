import styles from './item.module.css';
import Stars from '../stars/stars';

interface ItemProps {
    
}

export default function Item({book}) {
    const {name, author, description, price, rating, img, id} = book;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={img?img:"/book_default.png"} alt="book" />
                <div className={styles.infoContainer}>
                    <p className={styles.author}>{author}</p>
                    <h2 className={styles.name}>{name}</h2>
                    <div className={styles.reviewContainer}>
                        <Stars rating={rating} id={id}/>
                        <p className={styles.reviewCount}>{rating}</p>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>{price}</p>
                    <button className={styles.button} type="button">buy now</button>
                </div>
        </div>
    )
}
