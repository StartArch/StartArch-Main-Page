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
            </div>

        </div>
    );
}

export default Footer;