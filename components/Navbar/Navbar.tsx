import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About-Us', href: '/about', current: false },
    { name: 'Academics', href: '/academics', current: false },
    { name: 'Student-Life', href: '/studentLife', current: false },
    { name: 'School-News', href: '/news', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <div >
            <>
                <div className="mx-auto max-w-7xl px-12 py-2 lg:px-12">
                    <div className="relative flex h-6 md:h-16 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start flex-nowrap">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-20 w-30 lg:hidden"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="hidden h-20 w-30 lg:block"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex items-center">
                                { navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}

                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'border-b-4 border-b-[rgba(230,20,0)] text-sm text-[#2f66a6]' : 'text-[#2f66a6]',
                                                    'px-3 py-2 font-normal opacity-75 hover:opacity-100 text-sm'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}




                        {/* REGISTER DIALOG */}



                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>


                    </div>
                </div>
            </>
        </div>
    );
};

export default Navbar;
