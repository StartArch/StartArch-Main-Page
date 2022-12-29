import { yellowRocket } from '../assets';
import styles from '../styles/hero-section.module.css';

function Hero() {

    return (
        <section className={styles.heroSection}>
            <h1>Propel your business <br/>to a new height <br/>with a modern website</h1>
            <h2>
                We are a team of enthusiastic engineers, designers and developers <br/>
                with the experience and know-how to bring your projects into reality
            </h2>
            <img src={yellowRocket} alt='' className={styles.rocketImg}/>
            <span className={styles.moonShape}/>
        </section>
    );
}

export default Hero;