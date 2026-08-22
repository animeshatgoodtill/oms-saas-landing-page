import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IFeatureDetailSection } from '@/types';

interface FeatureSpotlightProps {
  sections: IFeatureDetailSection[];
}

const Eyebrow: React.FC<{ text: string; accent: string }> = ({ text, accent }) => (
  <div className="inline-flex items-center gap-2 mb-3">
    <span className="w-5 h-[2px]" style={{ background: accent }} />
    <span className="font-heading text-[0.75rem] font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--secondary)' }}>
      {text}
    </span>
  </div>
);

/**
 * Product spotlight — one full "hero" story for the single highest-priority
 * capability, then every other story condensed into a shared, tight grid
 * below it. Keeps the airy floating-card look (no boxed chrome, images
 * carry their own rounded corners + shadow) without letting the page run
 * to five full-viewport sections in a row.
 */
const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({ sections }) => {
  const [hero, ...rest] = sections;
  if (!hero) return null;

  return (
    <>
      {/* ── HERO STORY ── */}
      <section className="relative overflow-hidden bg-white" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0' }}>
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
        <div
          className="absolute w-[32rem] h-[32rem] rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
          style={{ background: 'var(--secondary)', right: '-8%', top: '-18%' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          <span
            className="hidden lg:block absolute -top-2 right-0 font-mono font-bold leading-none select-none pointer-events-none"
            style={{ fontSize: '6.5rem', color: 'var(--foreground)', opacity: 0.05 }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div className="max-w-[36rem]">
              {hero.eyebrow && <Eyebrow text={hero.eyebrow} accent="var(--secondary)" />}
              {hero.title && (
                <h2
                  className="font-heading font-extrabold tracking-[-0.02em] leading-[1.08] text-foreground"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.375rem)' }}
                >
                  {hero.title}
                </h2>
              )}
              <p className="mt-3.5 text-[1.0625rem] text-muted-foreground leading-[1.6]">
                {hero.description}
              </p>

              {hero.bullets && hero.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {hero.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2.5">
                      <BsFillCheckCircleFill className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--secondary)' }} />
                      <span className="text-[0.9375rem] text-foreground leading-[1.6]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {hero.stat && (
              <div className="flex-shrink-0 pb-1">
                <div
                  className="font-heading font-extrabold tracking-[-0.02em] leading-none"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--secondary)' }}
                >
                  {hero.stat.value}
                </div>
                <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
                  {hero.stat.label}
                </div>
              </div>
            )}
          </div>

          {hero.imageSrc && (
            <div className="flex justify-center">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt || hero.title || hero.description}
                width={hero.imageWidth || 1200}
                height={hero.imageHeight || 800}
                className="w-full h-auto"
                style={{ maxWidth: 'min(100%, 52rem)' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── CONDENSED GRID: every other story ── */}
      {rest.length > 0 && (
        <section className="relative overflow-hidden bg-hero-background" style={{ padding: 'clamp(2.5rem, 4vw, 4rem) 0' }}>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute w-[28rem] h-[28rem] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
            style={{ background: 'var(--primary)', left: '-6%', bottom: '-15%' }}
            aria-hidden="true"
          />

          <div className="relative mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {rest.map((section, i) => {
                const accent = i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)';
                const spanFull = rest.length % 2 === 1 && i === rest.length - 1;
                return (
                  <div key={i} className={spanFull ? 'md:col-span-2' : ''}>
                    <div className={spanFull ? 'max-w-[36rem] mx-auto text-center' : ''}>
                      {section.eyebrow && (
                        <div className={`inline-flex items-center gap-2 mb-2.5 ${spanFull ? 'justify-center' : ''}`}>
                          <span className="w-4 h-[2px]" style={{ background: accent }} />
                          <span
                            className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.09em]"
                            style={{ color: 'var(--secondary)' }}
                          >
                            {section.eyebrow}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        {section.title && (
                          <h3 className="font-heading font-bold tracking-[-0.01em] leading-[1.15] text-foreground text-[1.25rem] sm:text-[1.375rem]">
                            {section.title}
                          </h3>
                        )}
                        {section.stat && (
                          <span className="font-heading font-extrabold text-sm flex-shrink-0" style={{ color: accent }}>
                            {section.stat.value} <span className="font-normal text-muted-foreground text-xs uppercase tracking-wide">{section.stat.label}</span>
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-[1.55]">
                        {section.description}
                      </p>
                    </div>

                    {section.imageSrc && (
                      <div className={`mt-4 flex ${spanFull ? 'justify-center' : ''}`}>
                        <Image
                          src={section.imageSrc}
                          alt={section.imageAlt || section.title || section.description}
                          width={section.imageWidth || 1200}
                          height={section.imageHeight || 800}
                          className="w-full h-auto"
                          style={{ maxWidth: spanFull ? 'min(100%, 40rem)' : '100%' }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FeatureSpotlight;
