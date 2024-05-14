import styles from "@/styles/cart.module.css"
import CartItem from "@/cartItem/cartItem"
import { useAppSelector } from "@/utils/hooks"

export default function Cart() {
    const booksInCart = useAppSelector((state) => state.books.booksInCart);
    const totalPrice = booksInCart.reduce((acc, book) => acc + book.price, 0);

    return (
            <div className={styles.container}>
                <h1 className={styles.title}>shoping cart</h1>
                <div className={styles.itemsContainer}>
                    <div className={styles.itemsTable}>
                        <div className={styles.name}>item</div>
                        <div className={styles.quantity}>quantity</div>
                        <div className={styles.price}>price</div>
                        <div className={styles.delivery}>delivery</div>
                    </div>
                    <div className={styles.itemsList}>
                        {booksInCart.map((book, index) => (
                            <CartItem key={index} book={book} />
                        ))}
                    </div>
                </div>
                <p className={styles.totalPrice}>total price: {totalPrice!==0?totalPrice:"no total"}</p>
                <button className={styles.button} type="button">checkout</button>
            </div>
    )
}
