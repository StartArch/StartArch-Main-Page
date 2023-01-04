import styles from './Services.module.css';
import { ServiceCard } from '../components';
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
                {/* <ServiceCard projectInfo={designProjectInfo}/> */}
                {/* <ServiceCard projectInfo={developmentProjectInfo}/> */}
                <ServiceCard projectInfo={hostingProjectInfo}/>
                    </div>
        </section>
    );
}

export default Services;