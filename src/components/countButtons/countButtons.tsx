import styles from './countButtons.module.css';

export default function CountButtons() {
    return (
        <div className={styles.countContainer}>
            <button className={styles.countButton}>
                <img className={styles.image} src="/remove_button.png" alt="remove" />
            </button>
            <span className={styles.countText}>1</span>
            <button className={styles.countButton}>
                <img className={styles.image} src="/add_button.png" alt="add" />
            </button>
        </div>
    )
}
