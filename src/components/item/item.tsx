import styles from './item.module.css';
import Stars from '../stars/stars';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { addToCart } from '@/redux/booksSlice';
import clsx from 'clsx';

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
    };
}

export default function Item({ book }: ItemProps) {
    const dispatch = useAppDispatch();
    const { id, name, authors, description, price, rating, image, reviews } = book;
    const isInCart = useAppSelector((state) => state.books.booksInCart.some((book) => book.id === id));

    const handleClick = () => {
        dispatch(addToCart(book));
    }

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
                {/* {price &&
                    (<>
                        <p className={styles.price}>{price}</p>
                        <button className={styles.button} type="button">buy now</button>
                    </>)} */}
                <p className={styles.price}>{price}</p>
                <button className={clsx(styles.button,
                    { [styles.buttonPressed]: isInCart }
                )} type="button" onClick={handleClick}>buy now</button>
            </div>
        </div>
    )
}