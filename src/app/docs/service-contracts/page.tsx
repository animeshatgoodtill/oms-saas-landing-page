'use client';

import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Container from '@/components/Container';
import DocSidebar from '@/components/DocSidebar';
import { serviceContractsGuide } from '@/data/docs/service-contracts-guide';
import { IDocSubsection } from '@/types';

export default function ServiceContractsDocsPage() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = serviceContractsGuide.sections;
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderSubsection = (subsection: IDocSubsection) => {
        return (
            <div key={subsection.title} className="mb-8">
                <h3 className="text-xl font-bold mb-4">{subsection.title}</h3>
                {subsection.content && (
                    <div
                        className="text-gray-700 mb-4"
                        dangerouslySetInnerHTML={{ __html: subsection.content }}
                    />
                )}
                {subsection.bullets && subsection.bullets.length > 0 && (
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                        {subsection.bullets.map((bullet, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                        ))}
                    </ul>
                )}
                {subsection.steps && subsection.steps.length > 0 && (
                    <ol className="list-decimal pl-6 mb-4 space-y-3 text-gray-700">
                        {subsection.steps.map((stepObj, idx) => (
                            <li key={idx}>
                                <strong>{stepObj.step}</strong>
                                {stepObj.description && (
                                    <span className="text-gray-600"> — {stepObj.description}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                )}
                {subsection.table && (
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    {subsection.table.headers.map((header, idx) => (
                                        <th
                                            key={idx}
                                            className="border border-gray-300 px-4 py-2 text-left font-semibold"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {subsection.table.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx}>
                                        {row.map((cell, cellIdx) => (
                                            <td
                                                key={cellIdx}
                                                className="border border-gray-300 px-4 py-2 text-gray-700"
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    };

    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto flex gap-8">
                    {/* Sidebar */}
                    <DocSidebar sections={serviceContractsGuide.sections} activeSection={activeSection} />

                    {/* Main Content */}
                    <div className="flex-1 max-w-3xl">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceContractsGuide.title}</h1>
                            <p className="text-xl text-gray-600 mb-2">{serviceContractsGuide.description}</p>
                            <p className="text-sm text-gray-500">Last updated: {serviceContractsGuide.lastUpdated}</p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-8">
                            {serviceContractsGuide.sections.map((section, index) => (
                                <section key={section.id} id={section.id}>
                                    <Disclosure defaultOpen={index === 0}>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between items-center w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors">
                                                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                                                    <FiChevronDown
                                                        className={`w-6 h-6 text-gray-600 transition-transform ${
                                                            open ? 'transform rotate-180' : ''
                                                        }`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-6 py-6">
                                                    {section.content && (
                                                        <div
                                                            className="text-gray-700 mb-6"
                                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                                        />
                                                    )}
                                                    {section.subsections &&
                                                        section.subsections.map((subsection) =>
                                                            renderSubsection(subsection)
                                                        )}
                                                    {section.table && (
                                                        <div className="overflow-x-auto mb-4">
                                                            <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                    <tr className="bg-gray-100">
                                                                        {section.table.headers.map((header, idx) => (
                                                                            <th
                                                                                key={idx}
                                                                                className="border border-gray-300 px-4 py-2 text-left font-semibold"
                                                                            >
                                                                                {header}
                                                                            </th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {section.table.rows.map((row, rowIdx) => (
                                                                        <tr key={rowIdx}>
                                                                            {row.map((cell, cellIdx) => (
                                                                                <td
                                                                                    key={cellIdx}
                                                                                    className="border border-gray-300 px-4 py-2 text-gray-700"
                                                                                >
                                                                                    {cell}
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </section>
                            ))}
                        </div>

                        {/* Need Help Footer */}
                        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
                            <p className="text-gray-700 mb-4">
                                If you&apos;re having trouble with service contracts or need assistance with recurring maintenance setup,
                                our support team is here to help.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:support@opscel.com"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                >
                                    Email Support
                                </a>
                                <a
                                    href="https://help.opscel.com"
                                    className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                                >
                                    Help Centre
                                </a>
                            </div>
                        </div>

                        {/* Related Guides */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4">Related Guides</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/docs/jobs"
                                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                                >
                                    <h4 className="font-bold text-blue-600 mb-2">Jobs & Multi-Visit Workflow</h4>
                                    <p className="text-sm text-gray-600">
                                        Understanding jobs generated from contracts
                                    </p>
                                </Link>
                                <Link
                                    href="/docs/field-service"
                                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                                >
                                    <h4 className="font-bold text-blue-600 mb-2">Field Service App</h4>
                                    <p className="text-sm text-gray-600">
                                        How engineers complete recurring service visits
                                    </p>
                                </Link>
                                <Link
                                    href="/docs/asset-tracking"
                                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                                >
                                    <h4 className="font-bold text-blue-600 mb-2">Asset Tracking</h4>
                                    <p className="text-sm text-gray-600">
                                        Asset continuity and auto-loading explained
                                    </p>
                                </Link>
                                <Link
                                    href="/docs/onboarding"
                                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                                >
                                    <h4 className="font-bold text-blue-600 mb-2">Onboarding</h4>
                                    <p className="text-sm text-gray-600">
                                        Setting up service contracts for new customers
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
