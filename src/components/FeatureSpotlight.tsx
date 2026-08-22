import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IFeatureDetailSection } from '@/types';

interface FeatureSpotlightProps {
  sections: IFeatureDetailSection[];
}

/**
 * Product spotlight — every story gets the SAME treatment: eyebrow +
 * headline + dek (+ optional stat) in a text column, the real product UI
 * in a visual column, side-by-side in one row. Alternates which side the
 * text sits on for rhythm, and gives wide/panoramic screenshots a wider
 * image column so they don't get squeezed thin. Images already carry
 * their own rounded corners + shadow, so no extra chrome around them.
 */
const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        const textFirst = index % 2 === 0;
        const tinted = index % 2 === 1;
        const accent = index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)';
        const glowSide = textFirst ? { right: '-6%', top: '-20%' } : { left: '-6%', bottom: '-20%' };
        const num = String(index + 1).padStart(2, '0');

        const aspect = (section.imageWidth || 1200) / (section.imageHeight || 800);
        const isWide = aspect > 3;
        const gridColsClass = isWide ? 'lg:grid-cols-[0.55fr_1fr]' : 'lg:grid-cols-[0.72fr_1fr]';

        const textBlock = (
          <div>
            {section.eyebrow && (
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-[22px] h-[2px]" style={{ background: accent }} />
                <span
                  className="font-heading text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                  style={{ color: 'var(--secondary)' }}
                >
                  {section.eyebrow}
                </span>
              </div>
            )}
            {section.title && (
              <h2
                className="font-heading font-extrabold tracking-[-0.02em] leading-[1.06] text-foreground"
                style={{ fontSize: 'clamp(1.625rem, 2.6vw, 2.25rem)' }}
              >
                {section.title}
              </h2>
            )}
            <p className="mt-4 text-[1rem] text-muted-foreground leading-[1.6] max-w-[38ch]">
              {section.description}
            </p>

            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-5 space-y-2.5">
                {section.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5">
                    <BsFillCheckCircleFill className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--secondary)' }} />
                    <span className="text-[0.9375rem] text-foreground leading-[1.6]">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.stat && (
              <div className="mt-5 flex items-baseline gap-2.5">
                <span
                  className="font-heading font-extrabold leading-none"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2rem)', color: accent }}
                >
                  {section.stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.06em] text-muted-foreground">
                  {section.stat.label}
                </span>
              </div>
            )}
          </div>
        );

        const imageBlock = section.imageSrc && (
          <Image
            src={section.imageSrc}
            alt={section.imageAlt || section.title || section.description}
            width={section.imageWidth || 1200}
            height={section.imageHeight || 800}
            className="w-full h-auto"
          />
        );

        return (
          <section
            key={index}
            className={`relative overflow-hidden ${tinted ? 'bg-hero-background' : 'bg-white'}`}
            style={{ padding: 'clamp(2.75rem, 4.5vw, 4.5rem) 0' }}
          >
            <div
              className="absolute inset-0 opacity-55"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute w-[28rem] h-[28rem] rounded-full opacity-[0.11] blur-[100px] pointer-events-none"
              style={{ background: accent, ...glowSide }}
              aria-hidden="true"
            />

            <div className="relative mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
              <span
                className="hidden lg:block absolute -top-1 right-0 font-mono font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: '5.5rem', color: 'var(--foreground)', opacity: 0.05 }}
                aria-hidden="true"
              >
                {num}
              </span>

              <div className={`relative grid grid-cols-1 lg:items-center gap-10 lg:gap-16 ${gridColsClass}`}>
                {textFirst ? (
                  <>
                    <div className="lg:order-1">{textBlock}</div>
                    <div className="lg:order-2">{imageBlock}</div>
                  </>
                ) : (
                  <>
                    <div className="lg:order-2">{textBlock}</div>
                    <div className="lg:order-1">{imageBlock}</div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default FeatureSpotlight;
