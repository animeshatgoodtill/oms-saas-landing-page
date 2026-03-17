import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
                {/* Brand Column */}
                <div className="sm:col-span-2 lg:col-span-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/opscel-logo.svg"
                            alt="Opscel"
                            width={130}
                            height={28}
                            className="h-7 w-auto"
                        />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent max-w-sm">
                        {footerDetails.subheading}
                    </p>
                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-4 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <a
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground-accent hover:text-foreground transition-colors"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </a>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Product</h4>
                    <ul className="text-foreground-accent space-y-2">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-foreground transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Feature Links - Single column */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <ul className="text-foreground-accent space-y-2">
                        {footerDetails.featureLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-foreground transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Resources</h4>
                    <ul className="text-foreground-accent space-y-2">
                        {footerDetails.resourcesLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-foreground transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="text-foreground-accent space-y-2">
                        {footerDetails.companyLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-foreground transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="text-foreground-accent space-y-2">
                        {footerDetails.legalLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-foreground transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* Contact below legal on smaller screens */}
                    <div className="mt-6 lg:hidden">
                        <h4 className="text-lg font-semibold mb-2">Contact</h4>
                        {footerDetails.email && (
                            <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground transition-colors text-sm">
                                {footerDetails.email}
                            </a>
                        )}
                        {footerDetails.telephone && (
                            <a href={`tel:${footerDetails.telephone.replace(/\s/g, '')}`} className="block text-foreground-accent hover:text-foreground transition-colors text-sm mt-1">
                                {footerDetails.telephone}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-6 border-t border-gray-200 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-accent">
                    <p>&copy; {new Date().getFullYear()} Opscel Ltd. Registered in England and Wales. All rights reserved.</p>
                    <div className="hidden lg:flex items-center gap-6">
                        {footerDetails.email && (
                            <a href={`mailto:${footerDetails.email}`} className="hover:text-foreground transition-colors">
                                {footerDetails.email}
                            </a>
                        )}
                        {footerDetails.telephone && (
                            <a href={`tel:${footerDetails.telephone.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                                {footerDetails.telephone}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
