import styles from './loadMoreButton.module.css'

interface LoadMoreButtonProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;

}

export default function LoadMoreButton({ setPage }: LoadMoreButtonProps) {

    const handleClick = () => {
        setPage((prev) => prev + 1);
    }

    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            load more
        </button>
    )
}
