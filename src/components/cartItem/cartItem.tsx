import React from 'react'
import Image from 'next/image'
import Stars from '@/components/stars/stars'
import CountButtons from '@/components/countButtons/countButtons'
import styles from './cartItem.module.css'
import { BookInCart } from '@/utils/interfaces'
import { addOneItem, removeOneItem } from '@/redux/booksSlice'
import { useAppDispatch } from '@/utils/hooks'

interface CartItemProps {
    book: BookInCart;

}

export default function CartItem({ book }: CartItemProps) {
    const { name, authors, rating, reviews, price, quantity, deliveryStatus, image, id } = book;
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        dispatch(addOneItem(id));
    }

    const handleRemove = () => {
        dispatch(removeOneItem(id));
    }
    
    return (
        <>
            <div className={styles.card}>
                <Image className={styles.image} src={image} alt="book" width={102} height={145} />
                <div className={styles.infoContainer}>
                    <h2 className={styles.bookName}>{name}</h2>
                    <p className={styles.author}>{authors.join(", ")}</p>
                    {rating || reviews && 
                    <div className={styles.reviewContainer}>
                        <Stars rating={rating} id={id} />
                        <p className={styles.reviewCount}>{reviews} review(s)</p>
                    </div>}
                </div>
            </div>
            <CountButtons quantity={quantity} add={handleAdd} remove={handleRemove} />
            <p className={styles.priceInfo}>{price ? price : "no price"}</p>
            <p className={styles.deliveryinfo}>{deliveryStatus}</p>
        </>
    )
}
