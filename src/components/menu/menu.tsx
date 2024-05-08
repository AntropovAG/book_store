import styles from './menu.module.css'
import { useEffect, useState } from 'react'
import { menuItems } from '@/utils/constants';
import clsx from 'clsx'

export default function Menu() {
    const [option, setOption] = useState<string>(menuItems[0]);

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const type = target.dataset.type;
        setOption(type as string);
    }

    return (
            <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                    <li key={index} className={clsx(styles.menuItem,
                        {[styles.itemSelected]: item === option}
                    )}><button className={styles.menuButton} type="button"
                        data-type={item} onClick={handleMenuClick}>{item}</button></li>
                ))}
            </ul>
    )
}
