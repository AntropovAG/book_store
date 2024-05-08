import styles from './booksList.module.css'
import { books } from '@/utils/constants'
import Item from '@/components/item/item'

export default function BooksList() {
    return (
        <section className={styles.container}>
            {books.map((book, index) => (
                <Item key={index} book={book} />
            ))}
        </section>
    )
}
