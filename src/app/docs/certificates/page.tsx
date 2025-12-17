'use client';

import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

import Container from '@/components/Container';
import DocSidebar from '@/components/DocSidebar';
import { certificatesGuide } from '@/data/docs/certificates-guide';
import { IDocSubsection } from '@/types';

const CertificatesDocPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = certificatesGuide.sections;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSubsection = (subsection: IDocSubsection, index: number) => (
    <div key={index} className="mb-6">
      <h4 className="text-lg font-bold text-foreground mb-3">{subsection.title}</h4>
      {subsection.content && (
        <p className="text-muted-foreground mb-3 leading-relaxed">{subsection.content}</p>
      )}
      {subsection.bullets && subsection.bullets.length > 0 && (
        <ul className="space-y-2 ml-4">
          {subsection.bullets.map((bullet, idx) => (
            <li key={idx} className="text-muted-foreground flex items-start gap-2">
              <span className="text-secondary mt-1.5">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {subsection.steps && subsection.steps.length > 0 && (
        <ol className="space-y-2 ml-4">
          {subsection.steps.map((step, idx) => (
            <li key={idx} className="text-muted-foreground flex items-start gap-3">
              <span className="font-mono text-secondary font-bold">{idx + 1}.</span>
              <span>{step.step} {step.description && `— ${step.description}`}</span>
            </li>
          ))}
        </ol>
      )}
      {subsection.table && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-border bg-muted/30">
                {subsection.table.headers.map((header, idx) => (
                  <th key={idx} className="text-left py-3 px-4 font-bold text-foreground">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subsection.table.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-border">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="py-3 px-4 text-muted-foreground">
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 bg-hero-background border-b border-border">
        <Container>
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/features/certificates" className="hover:text-foreground transition-colors">
                Certificates
              </Link>
              <span>/</span>
              <span className="text-foreground">User Guide</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {certificatesGuide.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {certificatesGuide.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date(certificatesGuide.lastUpdated).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <div className="flex gap-12 relative">
          {/* Sidebar TOC */}
          <DocSidebar sections={certificatesGuide.sections} activeSection={activeSection} />

          {/* Content Area */}
          <main className="flex-1 py-12 min-w-0 lg:pl-8">
            <div className="max-w-3xl">
              {certificatesGuide.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <Disclosure defaultOpen={section.id === 'overview'}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between items-center w-full text-left group">
                          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                            {section.title}
                          </h2>
                          <FiChevronDown
                            className={`w-6 h-6 text-muted-foreground transition-transform ml-4 flex-shrink-0 ${
                              open ? 'transform rotate-180' : ''
                            }`}
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="mt-6">
                          {section.content && (
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                              {section.content}
                            </p>
                          )}

                          {section.table && (
                            <div className="overflow-x-auto mb-6">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b-2 border-border bg-muted/30">
                                    {section.table.headers.map((header, idx) => (
                                      <th key={idx} className="text-left py-3 px-4 font-bold text-foreground">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.table.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="border-b border-border">
                                      {row.map((cell, cellIdx) => (
                                        <td key={cellIdx} className="py-3 px-4 text-muted-foreground">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {section.subsections && section.subsections.length > 0 && (
                            <div className="space-y-6">
                              {section.subsections.map((subsection, idx) => renderSubsection(subsection, idx))}
                            </div>
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* Divider */}
                  <div className="mt-8 border-b border-border" />
                </section>
              ))}

              {/* Need Help Section */}
              <section className="mt-16 p-8 bg-hero-background rounded-xl border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Need More Help?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                </p>
                <a
                  href="mailto:support@opscel.com"
                  className="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all"
                >
                  Contact Support
                </a>
              </section>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default CertificatesDocPage;
