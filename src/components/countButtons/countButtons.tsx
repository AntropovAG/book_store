import styles from './countButtons.module.css';

interface CountButtonsProps {
    quantity: number;
}

export default function CountButtons({quantity}: CountButtonsProps) {
    return (
        <div className={styles.countContainer}>
            <button className={styles.countButton}>
                <img className={styles.image} src="/remove_button.png" alt="remove" />
            </button>
            <span className={styles.countText}>{quantity}</span>
            <button className={styles.countButton}>
                <img className={styles.image} src="/add_button.png" alt="add" />
            </button>
        </div>
    )
}
