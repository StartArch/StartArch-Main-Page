import { useEffect, useState } from 'react';
import { StartarchLogo } from '../../assets/images';
import { HamburguerMenu, CloseMenu } from '../../assets/icons';
import styles from './navbar.module.css';

function Navbar() {

    return (
        <nav className={styles.navSection}>

            <span className={styles.companyLogo}>
                <img src={StartarchLogo.asset} alt={StartarchLogo.description} />
                <h1>StartArch</h1>
            </span>

            {/* TODO: Settup react router to navigate through page */}
            <div className={styles.navButtons}>
                <button className={styles.button}>About</button>
                <button className={styles.button}>Portfolio</button>
                <button className={styles.button}>Services</button>
                <button className={styles.button}>Prices</button>
                <button className={styles.button}>Contact Us</button>
                <button className={styles.button}>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
