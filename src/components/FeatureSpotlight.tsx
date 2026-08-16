import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IFeatureDetailSection } from '@/types';

interface FeatureSpotlightProps {
  sections: IFeatureDetailSection[];
}

/**
 * Product spotlight sections — eyebrow / headline / dek copy paired with a
 * real product visual, one story per section. Alternates background tint
 * and accent color for rhythm as you scroll through several in a row.
 */
const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        const tinted = index % 2 === 1;
        const accent = index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)';

        return (
          <section
            key={index}
            className={tinted ? 'bg-hero-background' : 'bg-white'}
            style={{ paddingTop: 'var(--space-section-sm)', paddingBottom: 'var(--space-section-sm)' }}
          >
            <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
              <div className="max-w-[42rem] mx-auto text-center mb-10">
                {section.eyebrow && (
                  <div className="inline-flex items-center gap-2.5 mb-4">
                    <span className="w-6 h-[2px]" style={{ background: accent }} />
                    <span className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[color:var(--secondary)]">
                      {section.eyebrow}
                    </span>
                    <span className="w-6 h-[2px]" style={{ background: accent }} />
                  </div>
                )}
                {section.title && (
                  <h2
                    className="font-heading font-extrabold tracking-[-0.02em] leading-[1.08] text-foreground"
                    style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}
                  >
                    {section.title}
                  </h2>
                )}
                <p className="mt-4 text-lg text-muted-foreground leading-[1.6]">
                  {section.description}
                </p>
              </div>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="max-w-[42rem] mx-auto mb-10 space-y-3">
                  {section.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <BsFillCheckCircleFill
                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--secondary)' }}
                      />
                      <span className="text-[0.9375rem] text-foreground leading-[1.6]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.imageSrc && (
                <div className="relative max-w-[64rem] mx-auto">
                  <div
                    className="absolute -inset-8 rounded-[2rem] opacity-[0.15] blur-3xl"
                    style={{ background: accent }}
                    aria-hidden="true"
                  />
                  <div className="relative rounded-2xl border border-border bg-white p-3 sm:p-5 shadow-[0_24px_60px_-20px_rgba(23,23,23,0.25)]">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt || section.title || section.description}
                      width={section.imageWidth || 1200}
                      height={section.imageHeight || 800}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default FeatureSpotlight;
