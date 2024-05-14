import styles from './booksList.module.css'
import Item from '@/components/item/item'

interface BooksListProps {
    books: {
        id: string;
        name: string;
        authors: string[];
        description: string;
        price: number;
        currency: string;
        rating: number;
        reviews: number;
        image: string;
    }[];
}

export default function BooksList({ books }: BooksListProps) {
    return (
        <section className={styles.container}>
            {books.map((book, index) => (
                <Item key={index} book={book} />
            ))}
        </section>
    )
}
