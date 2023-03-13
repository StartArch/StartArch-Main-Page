import Image from 'next/image';
import styles from '../../styles/process.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Process() {
    const processSteps = [
        { title: 'Research Stage', purple: true },
        { title: 'Client research', purple: false },
        { title: 'Audience research', purple: false },
        { title: 'Competition reseach', purple: false },
        { title: 'Concept Stage', purple: true },

        { title: 'Understanding the project', purple: false },
        { title: 'Idea Solidification', purple: false },
        { title: 'Prototyping', purple: false },
        { title: 'Design Aproval', purple: false },
        { title: 'Development Stage', purple: true },

        { title: 'Programming', purple: false },
        { title: 'Weekly Reports & Meetings', purple: false },
        { title: 'Delivery Stage', purple: true },

        { title: 'Validation', purple: false },
        { title: 'Final Report', purple: false },
        { title: 'Resources handling', purple: false },

    ]

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <section className={styles.processSection}>
            <h2 className={styles.title}>Our Process</h2>

            <div className={styles.lineArea}>
                {
                    processSteps.map((e, index) => {


                        if (e.purple && index == 0) {
                            return (
                                <div className={styles.step}>
                                    <div className={styles.circleWithPurleBorder} data-aos="zoom-in">
                                        <div className={styles.purpleCircle} data-aos="zoom-in"></div>
                                    </div>
                                    <h3 className={styles.h3Purple} data-aos="zoom-in">{e.title}</h3>
                                </div>
                            )
                        }

                        if (e.purple && index > 0) {
                            return (
                                <>
                                    <div className={styles.stepLine}>
                                        <div className={styles.lineBetween} data-aos="zoom-in"></div>
                                    </div>
                                    <div className={styles.step}>
                                        <div className={styles.circleWithPurleBorder} data-aos="zoom-in">
                                            <div className={styles.purpleCircle} data-aos="zoom-in"></div>
                                        </div>
                                        <h3 className={styles.h3Purple} data-aos="zoom-in">{e.title}</h3>
                                    </div>
                                </>
                            )
                        }

                        if (!e.purple && index > 0) {
                            return (
                                <>
                                    <div className={styles.stepLine}>
                                        <div className={styles.lineBetween} data-aos="zoom-in"></div>
                                    </div>
                                    <div className={styles.step}>
                                        <div className={styles.circleWithNone} data-aos="zoom-in">
                                            <div className={styles.blackCircle} data-aos="zoom-in"></div>
                                        </div>
                                        <h3 className={styles.h3} data-aos="zoom-in">{e.title}</h3>
                                    </div>
                                </>

                            )
                        }

                        if (!e.purple) {
                            return (
                                <div className={styles.step} data-aos="zoom-in">
                                    <div className={styles.circleWithNone} data-aos="zoom-in">
                                        <div className={styles.blackCircle} data-aos="zoom-in"></div>
                                    </div>
                                    <h3 className={styles.h3} data-aos="zoom-in">{e.title}</h3>
                                </div>
                            )
                        }

                    })

                }

            </div>
        </section>
    );
}
