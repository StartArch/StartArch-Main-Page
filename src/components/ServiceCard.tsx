import styles from './ServiceCard.module.css';

interface Props {
    projectInfo: {
        icon: string,
        description: string,
        service1: string
        service2: string
        service3: string
        tool1: string,
        tool1Description: string,
        tool2: string,
        tool2Description: string,
        tool3: string,
        tool3Description: string,
    }
};

export default function ServiceCard(props: Props) {

    const {projectInfo} = props;

    return(
        <div className={styles.serviceDescription}>

            <img src={projectInfo.icon} alt='Design' width='60px'/>
            <p>{projectInfo.description}</p>
            <ul className={styles.serviceDistinctions}>
                <li>{projectInfo.service1}</li>
                <li>{projectInfo.service2}</li>
                <li>{projectInfo.service3}</li>
            </ul>
            <div className={styles.serviceTools}>
                <img src={projectInfo.tool1} alt={projectInfo.tool1Description}/>
                <img src={projectInfo.tool2} alt={projectInfo.tool2Description}/>
                <img src={projectInfo.tool3} alt={projectInfo.tool3Description}/>
            </div>
        </div>
    );
}