import { MoneyIcon, ChatIcon, FlexibilityIcon, DevIcon} from '../../assets/icons';
import styles from './Values.module.css';

function Values() {

    return (
        <section className={styles.valuesSection}>
            <h2 className={styles.title}>What Makes us Unique</h2>
            <p className={styles.subtitle}>We take pride in our work and the things that sets us apart for rest</p>

            <div className={styles.values}>
                <div className={styles.valueCard}>
                    <img src={MoneyIcon.asset} alt=""/>
                    <h3>Upfront prices</h3>
                    <p>We carefully plan and map all our projects in advance so there will be no surprises</p>
                </div>

                <div className={styles.valueCard}>
                    <img src={ChatIcon.asset} alt=""/>
                    <h3>Fast Communication</h3>
                    <p>We readily reply to all communications to keep you inside the loop</p>
                </div>

                <div className={styles.valueCard}>
                    <img src={FlexibilityIcon.asset} alt=""/>
                    <h3>High Flexibility</h3>
                    <p>We understand that your project's needs might change. We keep a flexible model to account for that</p>
                </div>

                <div className={styles.valueCard}>
                    <img src={DevIcon.asset} alt=""/>
                    <h3>Dedicated Developers</h3>
                    <p>We make sure every project has a dedicated team to supervise</p>
                </div>
            </div>

        </section>
    );
}

export default Values;