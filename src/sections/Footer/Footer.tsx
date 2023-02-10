import styles from './Footer.module.css';
import { StartarchLogoNotTitle } from '../../assets/images';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.columnOganize}>
                <img className="h-[100px] w-auto"
                    src={StartarchLogoNotTitle.asset} alt={StartarchLogoNotTitle.description} />
                <h2 className={styles.titulo}>StartArch</h2>
                <h4 className={styles.slogan}>
                    We help brands turn their products into reality.
                </h4>
                <h2 className={styles.email}>
                    hello@startarch.com
                </h2>

                <div className={styles.tags}>

                    <div className={styles.columnTags}>
                        <div className={styles.firstLabel}>Company</div>
                        <div className={styles.otherLabel}>Projects</div>
                        <div className={styles.otherLabel}>Services</div>
                        <div className={styles.otherLabel}>Prices</div>
                        <div className={styles.otherLabel}>Contact</div>

                    </div>

                    <div className={styles.columnTags}>
                        <div className={styles.firstLabel}>Support</div>
                        <div className={styles.otherLabel}>Login</div>
                        <div className={styles.otherLabel}>Create an account</div>
                        <div className={styles.otherLabel}>Privacy policy</div>
                        <div className={styles.otherLabel}>Terms and conditions</div>
                    </div>

                    <div className={styles.columnTags}>
                    <div className={styles.firstLabel}>social medias</div>
                        <div className={styles.otherLabel}>Linkedin</div>
                        <div className={styles.otherLabel}>Instagram</div>
                        <div className={styles.otherLabel}>Twitter</div>
                        <div className={styles.otherLabel}>GitHub</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;