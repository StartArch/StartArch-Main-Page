import { Monitor, Phone, PuzzlePieces, Database } from '../../assets/icons'
import styles from './services.module.css';

export default function Services () {
    return (
        <section className={styles.servicesSection}>
            <h2 className={styles.title}>Our Services</h2>

            <div className={styles.servicesList}>
                <div className={styles.service}>
                    <img src={Monitor.asset} alt=''/>
                    <h3>Web<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <img src={Phone.asset} alt=''/>
                    <h3>Mobile<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <img src={PuzzlePieces.asset} alt=''/>
                    <h3>Integration<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <img src={Database.asset} alt=''/>
                    <h3>Hosting</h3>
                </div>
            </div>
        </section>
    );
}