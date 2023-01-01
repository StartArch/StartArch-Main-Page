import { yellowRocket } from '../assets';
import styles from '../styles/services-section.module.css';

function Services() {

    return (
        <section className='container is-widescreen'>
            <h2 className='title'>Services</h2>

            <div className='columns'>
                <ul className='column buttons is-flex is-flex-direction-column'>
                    <li className='button'>Design</li>
                    <li className='button'>Development</li>
                    <li className='button'>Hosting & Maintenance</li>
                </ul>
                <div className='column container'>
                    <p>
                        Every project starts at the drawing table, we work to bring what is in your head to reality.
                    </p>
                    <ul className='is-flex'>
                        <li>Website design</li>
                        <li>Mobile app design</li>
                        <li>Logo design</li>
                    </ul>
                    <ul className='is-flex'>
                        <li>Figma</li>
                        <li>AdobeXD</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default Services;