import styles from './Services.module.css';
import { ServiceCard } from '../../components';
import { DesignIcon, FigmaLogo, AdobeXDLogo, PhotoshopLogo } from '../../assets/images';
import { DevelopmentIcon } from '../../assets/images';
import { HostingIcon } from '../../assets/images';

function Services() {

    const servicesListItems = (isActive: boolean) => [
        styles.servicesListItems,
        isActive ? 'text-nearWhite' : 'text-nearBlack',
        isActive ? 'bg-[#2F80ED]' : 'bg-white'
    ].join(' ');

    // TODO: Remove mock projectInfo from services
    // TODO: Move ProjectInfo type to types folder
    // TODO: Create json file to holder static values for services
    const designProjectInfo = {
        icon: DesignIcon.asset,
        description: 'Every project starts at the drawing table, we work to bring what is in your head to reality.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: FigmaLogo.asset,
        tool1Description: FigmaLogo.description,
        tool2: AdobeXDLogo.asset,
        tool2Description: AdobeXDLogo.description,
        tool3: PhotoshopLogo.asset,
        tool3Description: PhotoshopLogo.description,
    }

    const developmentProjectInfo = {
        icon: DevelopmentIcon.asset,
        description: 'Making ideas into reality is hard, thankfully our programmers work hard to do it.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: FigmaLogo.asset,
        tool1Description: FigmaLogo.description,
        tool2: AdobeXDLogo.asset,
        tool2Description: AdobeXDLogo.description,
        tool3: PhotoshopLogo.asset,
        tool3Description: PhotoshopLogo.description,
    }

    const hostingProjectInfo = {
        icon: HostingIcon.asset,
        description: 'Every project needs a home and attention, we can manage those problems to let you focus on your idea.',
        service1: 'Website design',
        service2: 'Mobile app design',
        service3: 'Logo design',
        tool1: FigmaLogo.asset,
        tool1Description: FigmaLogo.description,
        tool2: AdobeXDLogo.asset,
        tool2Description: AdobeXDLogo.description,
        tool3: PhotoshopLogo.asset,
        tool3Description: PhotoshopLogo.description,
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Services</h2>

            {/* // TODO: Create clickable event to change selected service */}
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