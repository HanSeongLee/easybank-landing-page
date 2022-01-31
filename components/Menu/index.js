import React from 'react';
import styles from './style.module.scss';

const Menu = () => {
    return (
        <nav className={styles.nav}>
            <button className={styles.menuButton}>
                <img src={'/icons/icon-hamburger.svg'}
                     alt={'menu'}
                />
            </button>
        </nav>
    );
};

export default Menu;
