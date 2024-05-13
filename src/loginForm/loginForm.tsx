import { useRouter } from 'next/router';
import styles from './loginForm.module.css';
import { useState } from 'react';

export default function LoginForm() {
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [emailError, setEmailError] = useState<string>('');
const [passwordError, setPasswordError] = useState<string>('');
const { push } = useRouter();

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    try {
        const response = await fetch('/api/authorize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            if (data.type === 'email') {
                setEmailError(data.message);
            } else if (data.type === 'password') {
                setPasswordError(data.message);
            }
            throw new Error(data.message || 'Something went wrong');
        }
        console.log('Login Successful:', data);
        push('/profile');
    } catch (error) {
        console.log('Login Error:', error);
    }
}

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.title}>Log in</h2>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" onChange={handleEmailChange} />
                {/* <input className={styles.input} type="email" id="email" name="email" onChange={handleEmailChange} required /> */}
                {emailError&&(<span className={styles.error}>{emailError}</span>)}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" onChange={handlePasswordChange} />
                {/* <input className={styles.input} type="password" id="password" name="password" onChange={handlePasswordChange} minLength={6} required/> */}
                {passwordError&&(<span className={styles.error}>{passwordError}</span>)}
            </div>
            <button type="submit" className={styles.button}>log in</button>
        </form>
    )
}
