import { useEffect, useState } from 'react';
import { StartarchLogo } from '../../assets/images';
import { HamburguerMenu, CloseMenu } from '../../assets/icons';
import styles from './navbar.module.css';

function Navbar() {

    let [isMobile, setIsMobile] = useState(false);
    let [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const checksWindowWidth = () => {
        if (window.innerWidth > 1060) {
            setIsMenuOpen(false);
            setIsMobile(false);
        }
        else {
            setIsMobile(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", checksWindowWidth);
        return () =>
            window.removeEventListener("resize", checksWindowWidth);
    });

    const menuIcon = isMenuOpen ? CloseMenu.asset : HamburguerMenu.asset;
    const menuIconDescription = isMenuOpen ? CloseMenu.description : HamburguerMenu.description;


    const navbarStyle = isMenuOpen ? styles.navSection + ' bg-darkPurple h-[100vh]' : styles.navSection;

    const navButtons = (isMobile && !isMenuOpen) ? 'hidden ' + styles.navButtons : styles.navButtons;

    return (
        <nav className={navbarStyle}>

            <span className={styles.companyLogo}>
                <img src={StartarchLogo.asset} alt={StartarchLogo.description} />
                <h1>StartArch</h1>
            </span>

            <img className={styles.hamburguerMenu}
                onClick={toggleMenu} src={menuIcon} alt={menuIconDescription}/>

            {/* TODO: Settup react router to navigate through page */}
            <div className={navButtons}>
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
