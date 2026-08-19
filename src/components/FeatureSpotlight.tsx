import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IFeatureDetailSection } from '@/types';

interface FeatureSpotlightProps {
  sections: IFeatureDetailSection[];
}

/**
 * Product spotlight sections — one real product story per section, framed
 * like an actual product surface rather than a pasted screenshot: a
 * left-aligned header row (eyebrow pill + headline + dek, with an optional
 * highlight stat), a textured/glowing backdrop, a ghost index numeral for
 * editorial rhythm, and the visual itself inside a browser-chrome frame so
 * it reads as "this is the real app" rather than marketing art.
 */
const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        const tinted = index % 2 === 1;
        const accent = index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)';
        const accentSoft = index % 2 === 0 ? 'rgba(48,79,255,0.08)' : 'rgba(254,216,53,0.14)';
        const glowSide = index % 2 === 0 ? { right: '-8%', top: '-15%' } : { left: '-8%', bottom: '-15%' };
        const num = String(index + 1).padStart(2, '0');

        return (
          <section
            key={index}
            className={`relative overflow-hidden ${tinted ? 'bg-hero-background' : 'bg-white'}`}
            style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}
          >
            {/* dot-grid texture */}
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
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                <div className="max-w-[36rem]">
                  {section.eyebrow && (
                    <div
                      className="inline-flex items-center gap-2 mb-4 pl-2.5 pr-3.5 py-1 rounded-full border"
                      style={{ borderColor: accent, background: accentSoft }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                      <span
                        className="font-heading text-[0.75rem] font-bold uppercase tracking-[0.1em]"
                        style={{ color: 'var(--foreground)' }}
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

              {/* product visual, framed like a real app window */}
              {section.imageSrc && (
                <div className="relative">
                  <div
                    className="rounded-2xl border border-border bg-white overflow-hidden"
                    style={{ boxShadow: '0 30px 70px -24px rgba(23,23,23,0.28), 0 4px 14px -4px rgba(23,23,23,0.08)' }}
                  >
                    {/* chrome bar */}
                    <div
                      className="flex items-center gap-4 px-4 sm:px-5 py-2.5 border-b border-border"
                      style={{ background: 'var(--muted)' }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                      </div>
                      <span className="font-mono text-[0.6875rem] text-muted-foreground tracking-wide truncate">
                        app.opscel.com — {(section.eyebrow || section.title || '').toLowerCase()}
                      </span>
                    </div>
                    <div className="p-4 sm:p-6" style={{ background: 'var(--muted)' }}>
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt || section.title || section.description}
                        width={section.imageWidth || 1200}
                        height={section.imageHeight || 800}
                        className="w-full h-auto rounded-lg border border-border"
                      />
                    </div>
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
