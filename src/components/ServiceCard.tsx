import styles from './ServiceCard.module.css';
import { designIcon, figmaLogo, adobeXDLogo, photoshopLogo } from '../assets';

interface Props {
    projectInfo: {
        icon: any,
        description: string,
        service1: string
        service2: string
        service3: string
        tool1: any,
        tool2: any,
        tool3: any
    }
};

export default function ServiceCard(props: Props) {

    return(
        <div className={styles.serviceDescription}>

            <img src={props.projectInfo.icon} alt='Design' width='60px'/>
            <p>{props.projectInfo.description}</p>
            <ul className={styles.serviceDistinctions}>
                <li>{props.projectInfo.service1}</li>
                <li>{props.projectInfo.service2}</li>
                <li>{props.projectInfo.service3}</li>
            </ul>
            <div className={styles.serviceTools}>
                <img src={props.projectInfo.tool1} alt='Figma'/>
                <img src={props.projectInfo.tool2} alt='AdobeXD'/>
                <img src={props.projectInfo.tool3} alt='Photoshop'/>
            </div>
        </div>
    );
}