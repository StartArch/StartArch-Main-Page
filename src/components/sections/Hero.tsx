import Image from 'next/image';
import { StartarchLogo } from '../../assets/images';
import styles from '../../styles/Hero.module.css';

function Hero() {

    return (
        <section className={styles.heroSection}>
            <div className={styles.textBox}>
                <h1>Your ideas <br/>start here</h1>

                <h2>
                    We are a team of enthusiastic engineers, designers and developers with the experience and know-how to bring your projects into reality
                </h2>
            </div>

            <Image
                className={styles.companyLogo}
                src={StartarchLogo.asset}
                alt={StartarchLogo.description}/>

        </section>
    );
}

export default Hero;