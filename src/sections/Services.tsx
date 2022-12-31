import { yellowRocket } from '../assets';
import styles from '../styles/services-section.module.css';

function Services() {

    return (
        <section className={styles.content}>
            <h2>Services</h2>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Hosting & Maintenance</li>
            </ul>
            <div>
                <p>Every project starts at the drawing table, we work to bring what is in your head to reality.</p>
                <ul>
                    <li>Website design</li>
                    <li>Mobile app design</li>
                    <li>Logo design</li>
                </ul>
                <ul>
                    <li>Figma</li>
                    <li>AdobeXD</li>
                    <li>Photoshop</li>
                </ul>
            </div>
        </section>
    );
}

export default Services;