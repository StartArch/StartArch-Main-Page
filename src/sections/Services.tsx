import styles from './Services.module.css';
import { ServiceCard } from '../components';
import { designIcon, figmaLogo, adobeXDLogo, photoshopLogo } from '../assets';
import { developmentIcon } from '../assets';
import { hostingIcon } from '../assets';

function Services() {

    const servicesListItems = (isActive: boolean) => [
        styles.servicesListItems,
        isActive ? 'text-nearWhite' : 'text-nearBlack',
        isActive ? 'bg-[#2F80ED]' : 'bg-white'
    ].join(' ');

    const designProjectInfo = {
        icon: designIcon,
        description: 'Every project starts at the drawing table, we work to bring what is in your head to reality.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: figmaLogo,
        tool2: adobeXDLogo,
        tool3: photoshopLogo
    }

    const developmentProjectInfo = {
        icon: developmentIcon,
        description: 'Making ideas into reality is hard, thankfully our programmers work hard to do it.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: figmaLogo,
        tool2: adobeXDLogo,
        tool3: photoshopLogo
    }

    const hostingProjectInfo = {
        icon: hostingIcon,
        description: 'Every project needs a home and attention, we can manage those problems to let you focus on your idea.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: figmaLogo,
        tool2: adobeXDLogo,
        tool3: photoshopLogo
    }

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