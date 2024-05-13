import styles from './menu.module.css'
import { useEffect, useState } from 'react'
import { menuItems } from '@/utils/constants';
import clsx from 'clsx'

export default function Menu({setSubject, subject, setPage}) {

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const type = target.dataset.type;
        setPage(1);
        setSubject(type as string);
    }

    return (
            <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                    <li key={index} className={clsx(styles.menuItem,
                        {[styles.itemSelected]: item === subject}
                    )}><button className={styles.menuButton} type="button"
                        data-type={item} onClick={handleMenuClick}>{item}</button></li>
                ))}
            </ul>
    )
}
