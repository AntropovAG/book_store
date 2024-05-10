import React from 'react'
import Image from 'next/image'
import Stars from '@/components/stars/stars'
import CountButtons from '@/components/countButtons/countButtons'
import styles from './cartItem.module.css'

export default function CartItem() {
    return (
        <>
            <div className={styles.card}>
                <Image className={styles.image} src={"/book_default.png"} alt="book" width={102} height={145} />
                <div className={styles.infoContainer}>
                    <h2 className={styles.bookName}>Book name</h2>
                    <p className={styles.author}>author name</p>
                    <div className={styles.reviewContainer}>
                        <Stars rating={4} id={"111"} />
                        <p className={styles.reviewCount}>4 reviews</p>
                    </div>
                </div>
            </div>
            <CountButtons />
            <p className={styles.priceInfo}>$38.66</p>
            <p className={styles.deliveryinfo}>Shipping: delivery</p>
        </>
    )
}
