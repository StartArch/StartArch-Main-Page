import { designIcon, figmaLogo, adobeXDLogo, photoshopLogo } from '../assets';
import styles from '../styles/services-section.module.css';

function Services() {

    return (
        <section className='content my-12'>
            <h2 className='text-3xl font-bold '>Services</h2>

            <div className='flex flex-row my-5'>
                <ul className='flex flex-col basis-1/5'>
                    <li className={`bg-[#2F80ED] ${styles.btn} text-white my-2 py-2 text-center`}>Design</li>
                    <li className={`bg-white ${styles.btn} my-2 py-2 text-center`}>Development</li>
                    <li className={`bg-white ${styles.btn} my-2 py-2 text-center`}>Hosting & Maintenance</li>
                </ul>
                <div className='flex flex-col items-center basis-4/5 gap-5'>
                    <img src={designIcon} width='60px'/>
                    <p>
                        Every project starts at the drawing table, we work to bring what is in your head to reality.
                    </p>
                    <ul className='flex flex-row gap-5'>
                        <li className='border-[1px] border-black rounded-full px-3'>Website design</li>
                        <li className='border-[1px] border-black rounded-full px-3'>Mobile app design</li>
                        <li className='border-[1px] border-black rounded-full px-3'>Logo design</li>
                    </ul>
                    <div className='flex flex-row gap-5'>
                        <img src={figmaLogo} width='50px'/>
                        <img src={adobeXDLogo} width='50px'/>
                        <img src={photoshopLogo} width='50px'/>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Services;