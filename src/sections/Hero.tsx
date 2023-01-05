import { yellowRocket } from '../assets';
import styles from './Hero.module.css';

function Hero() {

    return (
        <section className={styles.heroSection}>
            <div className={styles.textBox}>
                <h1>Propel your business <br/>to a new height <br/>with a modern website</h1>

                <h2>
                    We are a team of enthusiastic engineers, designers and developers <br className='hidden md:inline'/>with the experience and know-how to bring your projects into reality
                </h2>
            </div>

            <span className={styles.moon}>
                <img className={styles.rocket} src={yellowRocket} alt=''/>
            </span>
        </section>
    );
}

export default Hero;