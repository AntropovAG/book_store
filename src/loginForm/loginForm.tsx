import styles from './loginForm.module.css';

export default function LoginForm() {
    return (
        <form className={styles.form}>
            <h2 className={styles.title}>Log in</h2>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" required />
                <span className={styles.error}>error</span>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" required minLength={6}/>
                <span className={styles.error}>error</span>
            </div>
            <button type="submit" className={styles.button}>log in</button>
        </form>
    )
}
