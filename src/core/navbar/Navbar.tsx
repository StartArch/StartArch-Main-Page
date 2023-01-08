import styles from './navbar.module.css';
import { StartarchLogoText } from './../../assets/images'
function Navbar() {

    return (
        <nav className={styles.navSection}>

            {/* TODO: Modify logo to have a textt tag for the company name */}
            <span>
                <img src={StartarchLogoText} alt='logo' />
            </span>

            {/* TODO: Settup react router to navigate through page */}
            <div className={styles.navButton}>
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
