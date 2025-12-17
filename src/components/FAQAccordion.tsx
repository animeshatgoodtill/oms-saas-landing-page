'use client';

import { Disclosure } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { IFAQ } from '@/types';

interface FAQAccordionProps {
  faqs: IFAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  return (
    <div className="space-y-4">
      {faqs.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="border border-border rounded-lg overflow-hidden">
              <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left bg-card hover:bg-muted transition-colors">
                <span className="font-semibold text-foreground pr-8">
                  {item.question}
                </span>
                <FiChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    open ? 'transform rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 py-4 bg-muted/50 text-muted-foreground">
                {item.answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default FAQAccordion;
