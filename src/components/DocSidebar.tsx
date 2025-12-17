'use client';

import { useState } from 'react';
import { IDocSection } from '@/types';

interface DocSidebarProps {
  sections: IDocSection[];
  activeSection: string;
}

const DocSidebar: React.FC<DocSidebarProps> = ({ sections, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-secondary text-white px-4 py-3 rounded-full shadow-lg font-medium flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Contents
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-24 left-0 h-[calc(100vh-6rem)]
          w-72 bg-white lg:bg-transparent border-r lg:border-r-0 border-border
          overflow-y-auto z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="p-6 lg:pr-8">
          <h2 className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">
            On This Page
          </h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    text-left w-full py-1.5 px-3 rounded-md text-sm transition-colors
                    ${activeSection === section.id
                      ? 'bg-primary/10 text-secondary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default DocSidebar;
