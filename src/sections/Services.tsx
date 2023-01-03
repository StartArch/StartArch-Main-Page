import { designIcon, figmaLogo, adobeXDLogo, photoshopLogo } from '../assets';
import styles from '../styles/services-section.module.css';

function Services() {

    const servicesListItems = (isActive: boolean) => [
        styles.servicesListItems,
        isActive ? 'text-nearWhite' : 'text-nearBlack',
        isActive ? 'bg-[#2F80ED]' : 'bg-white'
    ].join(' ');

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Services</h2>

            <div className={styles.sectionBody}>
                <ul className={styles.servicesList}>
                    <li className={servicesListItems(true)}>Design</li>
                    <li className={servicesListItems(false)}>Development</li>
                    <li className={servicesListItems(false)}>Hosting & Maintenance</li>
                </ul>
                <div className={styles.serviceDescription}>

                    <img src={designIcon} alt='Design' width='60px'/>
                    <p>
                        Every project starts at the drawing table, we work to bring what is in your head to reality.
                    </p>
                    <ul className={styles.serviceDistinctions}>
                        <li>Website design</li>
                        <li>Mobile app design</li>
                        <li>Logo design</li>
                    </ul>
                    <div className={styles.serviceTools}>
                        <img src={figmaLogo} alt='Figma'/>
                        <img src={adobeXDLogo} alt='AdobeXD'/>
                        <img src={photoshopLogo} alt='Photoshop'/>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Services;