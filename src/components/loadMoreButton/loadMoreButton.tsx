import styles from './loadMoreButton.module.css'

export default function LoadMoreButton({ setPage }) {

    const handleClick = () => {
        setPage((prev) => prev + 1);
    }

    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            load more
        </button>
    )
}
