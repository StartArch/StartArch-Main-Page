import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import { useState } from 'react';
import { HamburguerMenu, CloseMenu} from '../../assets/images';
import Link from 'next/link';

function Navbar() {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const navigation = [
        { name: 'Portfolio', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact Us', href: '#' }
    ]

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = ''
    }

    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <nav className={styles.topBar}>
                <h1 className={styles.companyName}>StartArch</h1>

                <div className={styles.optionMenu}>
                    <ul className={styles.options}>
                        {navigation.map(item => (
                            <li key={item.name} className={styles.option}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}

                        <li className={styles.signInBtn}><Link href="">Sign in</Link></li>
                    </ul>

                    {
                        isMenuOpen &&
                        <Image
                            className={styles.menuButton}
                            src={CloseMenu.asset}
                            alt={CloseMenu.description}
                            onClick={closeMenu}/>
                    }
                    {
                        !isMenuOpen &&
                        <Image
                            className={styles.menuButton}
                            src={HamburguerMenu.asset}
                            alt={HamburguerMenu.description}
                            onClick={openMenu}/>
                    }

                </div>
            </nav>

            {
                isMenuOpen &&
                <div className={styles.mobileOpenMenu}>
                    <ul className={styles.mobileOptionMenu}>
                        {navigation.map(item => (
                            <li key={item.name} className={styles.option}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                        <li className={styles.option}><Link href="">Sign in</Link></li>
                    </ul>
                </div>
            }
        </>
    );
}

export default Navbar;
