import Layout from "@/components/layout/layout"
import styles from "@/styles/cart.module.css"
import Stars from "@/components/stars/stars"
import CountButtons from "@/components/countButtons/countButtons"
import Image from "next/image"
import CartItem from "@/cartItem/cartItem"

export default function Cart() {
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
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <p className={styles.totalPrice}>total price: 10000 Euro</p>
                <button className={styles.button} type="button">checkout</button>
            </div>
    )
}
