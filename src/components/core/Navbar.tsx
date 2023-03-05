import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { HamburguerMenu, CloseMenu} from '@/assets/images';
import Link from 'next/link';

function Navbar() {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ menuIcon, setMenuIcon ] = useState(HamburguerMenu);

    const navigation = [
        { name: 'Portfolio', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Sign in', href: '#' },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);

        setMenuIcon(prevState => {
            if (prevState == HamburguerMenu)
                return CloseMenu;

            return HamburguerMenu;
        })
    }

    return (
        <>
            <nav className={styles.topBar}>
                <h1 className={styles.companyName}>StartArch</h1>

                <div className={styles.optionMenu}>
                    <ul className={styles.options}>
                        {navigation.map(item => (
                            <li key={item.name}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    <Image
                        className={styles.menuButton}
                        src={menuIcon.asset}
                        alt={menuIcon.description}
                        onClick={toggleMenu}/>
                </div>


            </nav>

            {
                isMenuOpen &&
                <div className={styles.mobileOpenMenu}>
                    <ul>
                        {navigation.map(item => (
                            <li key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }

        </>

    );
}

export default Navbar;
