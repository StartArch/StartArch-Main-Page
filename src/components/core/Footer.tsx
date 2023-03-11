import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import { StartarchLogo } from '../../assets/images';


function Footer() {

    const instagramLink = "https://www.instagram.com/startarch_dev/"

    return (
        <section className={styles.footer}>
            <Image
                className={styles.logo}
                src={StartarchLogo.asset}
                alt={StartarchLogo.description} />

            <h2 className={styles.companyName}>StartArch</h2>
            <h4 className={styles.slogan}>
                We help brands turn their products into reality.
            </h4>
            <h2 className={styles.email}>
                hello@startarch.com
            </h2>

            {/* TODO: transform tags into links */}
            <div className={styles.tags}>
                <div className={styles.columnTags}>
                    <h3 className={styles.tagTitle}>Company</h3>
                    <a href="" className={styles.tag}>Projects</a>
                    <a href="" className={styles.tag}>Services</a>
                    <a href="" className={styles.tag}>Process</a>
                    <a href="" className={styles.tag}>Contact</a>
                </div>

                <div className={styles.columnTags}>
                    <h3 className={styles.tagTitle}>Support</h3>
                    <a href="" className={styles.tag}>Login</a>
                    <a href="" className={styles.tag}>Create an account</a>
                    <a href="" className={styles.tag}>Privacy policy</a>
                    <a href="" className={styles.tag}>Terms and conditions</a>
                </div>

                {/* TODO: Create and add links to social medias */}
                <div className={styles.columnTags}>
                    <h3 className={styles.tagTitle}>Socials</h3>
                    <a href="" className={styles.tag}>Linkedin</a>
                    <a href={instagramLink} className={styles.tag}>Instagram</a>
                    <a href="" className={styles.tag}>Twitter</a>
                    <a href="" className={styles.tag}>Dribbble</a>
                </div>
            </div>
        </section>
    );
}

export default Footer;