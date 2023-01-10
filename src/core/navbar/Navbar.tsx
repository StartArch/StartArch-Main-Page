import { StartarchLogo } from '../../assets/images';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import styles from './navbar.module.css';

function Navbar() {

    const navigation = [
        { name: 'About', href: '#', current: false },
        { name: 'Portfolio', href: '#', current: false },
        { name: 'Services', href: '#', current: true },
        { name: 'Prices', href: '#', current: false },
        { name: 'Contact Us', href: '#', current: false },
    ]

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="pt-2">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-nearWhite hover:text-white focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <img
                                    className="h-[40px] w-auto"
                                    src={StartarchLogo.asset} alt={StartarchLogo.description}/>

                                <h1 className='text-nearWhite font-spaceGrotesk text-[24px] font-bold'>StartArch</h1>
                            </div>
                            <div className="hidden sm:ml-6 sm:block absolute right-0">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className='text-nearWhite hover:text-nearWhite hover:font-bold px-3 py-2 text-base font-poppins'
                                            aria-current={item.current ? 'page' : undefined}>

                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name} as="a" href={item.href}
                                    className='text-nearWhite hover:font-bold block px-3 py-2 text-base'
                                    aria-current={item.current ? 'page' : undefined}>

                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
