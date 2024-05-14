import styles from './countButtons.module.css';

interface CountButtonsProps {
    quantity: number;
    add: () => void;
    remove: () => void;
}

export default function CountButtons({quantity, add, remove}: CountButtonsProps) {
    return (
        <div className={styles.countContainer}>
            <button className={styles.countButton} onClick={remove}>
                <img className={styles.image} src="/remove_button.png" alt="remove" />
            </button>
            <span className={styles.countText}>{quantity}</span>
            <button className={styles.countButton} onClick={add}>
                <img className={styles.image} src="/add_button.png" alt="add" />
            </button>
        </div>
    )
}
