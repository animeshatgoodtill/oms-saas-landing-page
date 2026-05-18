'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';

import Container from './Container';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setOpenSubmenu(null);
    };

    const toggleSubmenu = (itemText: string) => {
        setOpenSubmenu(openSubmenu === itemText ? null : itemText);
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <Container className="!px-0">
                <nav className="mx-auto flex justify-between items-center py-2 px-5 md:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/opscel-logo.webp"
                            alt="Opscel"
                            width={300}
                            height={90}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map(item => (
                            <li key={item.text} className="relative group">
                                {item.submenu ? (
                                    <>
                                        <Link
                                            href={item.url}
                                            className="text-foreground hover:text-foreground-accent transition-colors flex items-center gap-1"
                                        >
                                            {item.text}
                                            <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        </Link>
                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 top-full mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                                <div className="px-4 py-2 border-b border-gray-100">
                                                    <Link href={item.url} className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                                                        View All Features →
                                                    </Link>
                                                </div>
                                                {item.submenu.map(subItem => (
                                                    <Link
                                                        key={subItem.text}
                                                        href={subItem.url}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        {subItem.text}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://app.opscel.com/handler/sign-in"
                                className="text-foreground hover:text-foreground-accent transition-all duration-mechanical ease-mechanical"
                            >
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 rounded-full transition-all duration-mechanical ease-mechanical"
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text} className="border-b border-gray-100 last:border-0">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleSubmenu(item.text)}
                                            className="w-full flex items-center justify-between py-3 text-foreground hover:text-primary"
                                        >
                                            <span>{item.text}</span>
                                            <HiChevronDown
                                                className={`w-5 h-5 transition-transform ${openSubmenu === item.text ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <Transition
                                            show={openSubmenu === item.text}
                                            enter="transition-all duration-200 ease-out"
                                            enterFrom="opacity-0 max-h-0"
                                            enterTo="opacity-100 max-h-96"
                                            leave="transition-all duration-150 ease-in"
                                            leaveFrom="opacity-100 max-h-96"
                                            leaveTo="opacity-0 max-h-0"
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pb-2">
                                                    <Link
                                                        href={item.url}
                                                        className="block py-2 pl-4 text-sm text-blue-600 font-medium hover:text-blue-700"
                                                        onClick={toggleMenu}
                                                    >
                                                        View All Features →
                                                    </Link>
                                                    {item.submenu.map(subItem => (
                                                        <Link
                                                            key={subItem.text}
                                                            href={subItem.url}
                                                            className="block py-2 pl-4 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                                                            onClick={toggleMenu}
                                                        >
                                                            {subItem.text}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                ) : (
                                    <Link href={item.url} className="block py-3 text-foreground hover:text-primary" onClick={toggleMenu}>
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="pt-4">
                            <a
                                href="https://app.opscel.com/handler/sign-in"
                                className="text-foreground hover:text-primary block py-2"
                                onClick={toggleMenu}
                            >
                                Sign In
                            </a>
                        </li>
                        <li className="pt-2">
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-secondary text-white hover:bg-secondary/90 px-5 py-2 rounded-full block w-fit transition-all duration-mechanical ease-mechanical"
                                onClick={toggleMenu}
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
