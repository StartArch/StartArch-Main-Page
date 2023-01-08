import styles from './navbar.module.css';
import { StartarchLogoText } from './../../assets/images'
function Navbar() {

    return (
        <section className={styles.navSection}>

            <span>
                <img src={StartarchLogoText} alt='logo' />
            </span>

            <div className={styles.navButton}>
                <button className={styles.button}>Home</button>
                <button className={styles.button}>Sevices</button>
                <button className={styles.button}>Case of Studies</button>
                <button className={styles.button}>Blog</button>
                <button className={styles.button}>Contact Us</button>
            </div>
        </section>
    );
}

export default Navbar;
