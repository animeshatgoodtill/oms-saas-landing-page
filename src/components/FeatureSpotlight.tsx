import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IFeatureDetailSection } from '@/types';

interface FeatureSpotlightProps {
  sections: IFeatureDetailSection[];
}

/**
 * Product spotlight sections — one real product story per section. The
 * visuals are pre-cropped product cards that already carry their own
 * rounded corners and soft shadow, so they float directly on the section's
 * textured backdrop with no extra frame around them — an airy, editorial
 * composition (eyebrow, big headline, dek, optional stat) rather than a
 * screenshot boxed up in more chrome.
 */
const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        const tinted = index % 2 === 1;
        const accent = index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)';
        const glowSide = index % 2 === 0 ? { right: '-8%', top: '-18%' } : { left: '-8%', bottom: '-18%' };
        const num = String(index + 1).padStart(2, '0');

        return (
          <section
            key={index}
            className={`relative overflow-hidden ${tinted ? 'bg-hero-background' : 'bg-white'}`}
            style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}
          >
            {/* soft engineering-grid texture */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
              }}
              aria-hidden="true"
            />
            {/* ambient glow */}
            <div
              className="absolute w-[32rem] h-[32rem] rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
              style={{ background: accent, ...glowSide }}
              aria-hidden="true"
            />

            <div className="relative mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
              {/* ghost index numeral */}
              <span
                className="hidden lg:block absolute -top-2 right-0 font-mono font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: '6.5rem', color: 'var(--foreground)', opacity: 0.05 }}
                aria-hidden="true"
              >
                {num}
              </span>

              {/* header row: copy left, stat right */}
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                <div className="max-w-[36rem]">
                  {section.eyebrow && (
                    <div className="inline-flex items-center gap-2.5 mb-4">
                      <span className="w-6 h-[2px]" style={{ background: accent }} />
                      <span
                        className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.12em]"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {section.eyebrow}
                      </span>
                    </div>
                  )}
                  {section.title && (
                    <h2
                      className="font-heading font-extrabold tracking-[-0.02em] leading-[1.08] text-foreground"
                      style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.375rem)' }}
                    >
                      {section.title}
                    </h2>
                  )}
                  <p className="mt-3.5 text-[1.0625rem] text-muted-foreground leading-[1.6]">
                    {section.description}
                  </p>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {section.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-2.5">
                          <BsFillCheckCircleFill
                            className="h-4 w-4 mt-1 flex-shrink-0"
                            style={{ color: 'var(--secondary)' }}
                          />
                          <span className="text-[0.9375rem] text-foreground leading-[1.6]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {section.stat && (
                  <div className="flex-shrink-0 pb-1">
                    <div
                      className="font-heading font-extrabold tracking-[-0.02em] leading-none"
                      style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: accent }}
                    >
                      {section.stat.value}
                    </div>
                    <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
                      {section.stat.label}
                    </div>
                  </div>
                )}
              </div>

              {/* the product visual itself — already a styled card (rounded
                  corners + soft shadow baked in), so it floats free on the
                  textured backdrop with generous room around it */}
              {section.imageSrc && (
                <div className="flex justify-center">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt || section.title || section.description}
                    width={section.imageWidth || 1200}
                    height={section.imageHeight || 800}
                    className="w-full h-auto"
                    style={{ maxWidth: 'min(100%, 60rem)' }}
                  />
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
