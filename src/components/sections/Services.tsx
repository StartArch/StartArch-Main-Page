import Image from 'next/image';
import { Monitor, Phone, PuzzlePieces, Database } from '../../assets/images';
import styles from '../../styles/services.module.css';

export default function Services () {
    return (
        <section className={styles.servicesSection}>
            <h2 className={styles.title}>Our Services</h2>

            <div className={styles.servicesList}>
                <div className={styles.service}>
                    <Image src={Monitor.asset} alt=''/>
                    <h3>Web<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <Image src={Phone.asset} alt=''/>
                    <h3>Mobile<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <Image src={PuzzlePieces.asset} alt=''/>
                    <h3>Integration<br/>Development</h3>
                </div>

                <div className={styles.service}>
                    <Image src={Database.asset} alt=''/>
                    <h3>Hosting</h3>
                </div>
            </div>
        </section>
    );
}