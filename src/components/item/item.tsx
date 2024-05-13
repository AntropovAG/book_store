import styles from './item.module.css';
import Stars from '../stars/stars';

interface ItemProps {
    book: {
        id: string;
        name: string;
        authors: string[];
        description: string;
        price: number;
        rating: number;
        reviews: number;
        image: string;
    }[];
}

export default function Item({ book }: ItemProps) {
    const { id, name, authors, description, price, rating, image, reviews } = book;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={image ? image : "/book_default.png"} alt="book" />
            <div className={styles.infoContainer}>
                <p className={styles.author}>{authors != null ? authors.join(", "): "No authors"}</p>
                <h2 className={styles.name}>{name}</h2>
                {rating || reviews &&
                    (<div className={styles.reviewContainer}>
                        <Stars rating={rating} id={id} />
                        <p className={styles.reviewCount}>{reviews}</p>
                    </div>)}

                <p className={styles.description}>{description}</p>
                {price &&
                    (<>
                        <p className={styles.price}>{price}</p>
                        <button className={styles.button} type="button">buy now</button>
                    </>)}

            </div>
        </div>
    )
}