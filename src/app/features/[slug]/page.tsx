import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import FAQAccordion from '@/components/FAQAccordion';
import { getFeatureBySlug, getAllFeatureSlugs } from '@/data/featureDetails';

interface FeatureDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all feature detail pages
export async function generateStaticParams() {
  const slugs = getAllFeatureSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ params }) => {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      {/* ── PAGE HEADER ── Dark gradient, full-width */}
      <div style={{ background: 'linear-gradient(135deg, #0f1a2e 0%, #0280C4 100%)', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div className="mx-auto px-5 w-full max-w-[52rem]">
          {/* Back link */}
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white no-underline mb-5 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            All Features
          </Link>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-white/65 mb-4">
            {feature.subtitle}
          </div>

          {/* Title */}
          <h1
            className="font-heading font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-[1.125rem]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            {feature.title}
          </h1>

          {/* Description */}
          <p
            className="text-white/75 leading-[1.6] max-w-[38rem]"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)' }}
          >
            {feature.heroDescription}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-[0.875rem] mt-8">
            <Link
              href={feature.ctaUrl}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-semibold text-base transition-all duration-150 whitespace-nowrap"
              style={{ background: 'var(--primary)', color: 'var(--primary-foreground)', border: '1.5px solid var(--primary)' }}
            >
              {feature.ctaText}
            </Link>
            <Link
              href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-semibold text-base text-white transition-all duration-150 whitespace-nowrap hover:border-white/75"
              style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── White bar with 3 stats */}
      {feature.stats && feature.stats.length > 0 && (
        <div className="bg-white border-b border-border py-8">
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {feature.stats.map((stat, i) => (
                <div key={i} className="px-8 py-3">
                  <div
                    className="font-heading font-extrabold tracking-[-0.02em] text-[color:var(--secondary)]"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 leading-[1.4]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── HIGHLIGHTS / CAPABILITIES ── White background */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            {/* Section heading */}
            <div className="text-center mb-10">
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
                Capabilities
              </span>
              <h2 className="font-heading font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: 'var(--text-display-xl, clamp(1.5rem,3vw,2.25rem))' }}>
                What it does
              </h2>
            </div>

            {/* 3-column highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {feature.featureHighlights.map((highlight, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-[var(--r-lg,0.75rem)] p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center mb-3.5"
                    style={{ background: 'rgba(2,128,196,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 200 200">
                      <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                    </svg>
                  </div>
                  <div className="font-heading font-bold text-[0.9375rem] text-foreground mb-1.5">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-muted-foreground leading-[1.6]">
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width screenshot below the grid */}
            {feature.screenshotImage && (
              <div className="mt-12 rounded-[var(--r-lg,0.75rem)] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
                <Image
                  src={feature.screenshotImage}
                  alt={`${feature.title} screenshot`}
                  width={1440}
                  height={900}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── Light surface background */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            {/* Section heading */}
            <div className="text-center mb-10">
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
                Process
              </span>
              <h2 className="font-heading font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: 'var(--text-display-xl, clamp(1.5rem,3vw,2.25rem))' }}>
                How it works
              </h2>
            </div>

            {/* Steps list */}
            <div className="flex flex-col max-w-[52rem] mx-auto">
              {feature.howItWorksSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-7 border-b border-border last:border-b-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-sm text-white"
                    style={{ background: 'var(--secondary)' }}>
                    {step.stepNumber}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-base text-foreground mb-1.5">
                      {step.title}
                    </div>
                    <div className="text-[0.9375rem] text-muted-foreground leading-[1.6]">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PERSONA BENEFITS / WHO IT'S FOR ── White background */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            {/* Section heading */}
            <div className="text-center mb-10">
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
                Benefits
              </span>
              <h2 className="font-heading font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: 'var(--text-display-xl, clamp(1.5rem,3vw,2.25rem))' }}>
                Who it&apos;s for
              </h2>
            </div>

            {/* Persona cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {feature.personaBenefits.map((persona, i) => (
                <div
                  key={i}
                  className="border border-border rounded-[var(--r-lg,0.75rem)] p-6"
                  style={{ background: 'var(--muted)' }}
                >
                  <div className="font-heading font-extrabold text-[0.8125rem] uppercase tracking-[0.06em] text-[color:var(--secondary)] mb-3.5">
                    {persona.persona}
                  </div>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {persona.benefits.map((benefit, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground leading-[1.5]">
                        <svg
                          className="flex-shrink-0 mt-[0.125rem]"
                          style={{ color: 'var(--success)' }}
                          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── COMPARISON TABLE ── Light surface background */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            {/* Section heading */}
            <div className="text-center mb-8">
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
                Comparison
              </span>
              <h2 className="font-heading font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: 'var(--text-display-xl, clamp(1.5rem,3vw,2.25rem))' }}>
                Opscel vs. the rest
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-[var(--r-lg,0.75rem)] overflow-hidden border border-border">
                <thead>
                  <tr>
                    <th className="text-left py-[0.875rem] px-5 font-heading text-sm font-bold text-white" style={{ background: 'var(--foreground)' }}>Feature</th>
                    <th className="text-center py-[0.875rem] px-5 font-heading text-sm font-bold text-white w-[120px]" style={{ background: 'var(--secondary)' }}>Opscel</th>
                    <th className="text-center py-[0.875rem] px-5 font-heading text-sm font-bold text-white w-[120px]" style={{ background: 'var(--foreground)' }}>Others</th>
                  </tr>
                </thead>
                <tbody>
                  {feature.comparison.map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 px-5 border-b border-border text-sm text-muted-foreground" style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}>
                        {row.feature}
                      </td>
                      <td className="py-3 px-5 border-b border-border text-center" style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}>
                        {row.opscel ? (
                          <span className="text-[1.125rem] font-bold" style={{ color: 'var(--success)' }}>✓</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="py-3 px-5 border-b border-border text-center" style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}>
                        {typeof row.others === 'boolean' ? (
                          row.others ? (
                            <span className="text-[1.125rem] font-bold" style={{ color: 'var(--success)' }}>✓</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">No</span>
                          )
                        ) : (
                          <span className="text-xs text-muted-foreground">{row.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── White background */}
      {feature.faq && feature.faq.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            {/* Section heading */}
            <div className="text-center mb-8">
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
                FAQ
              </span>
              <h2 className="font-heading font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: 'var(--text-display-xl, clamp(1.5rem,3vw,2.25rem))' }}>
                {feature.subtitle} — common questions
              </h2>
            </div>
            <div className="max-w-[52rem] mx-auto">
              <FAQAccordion faqs={feature.faq} />
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── Dark background with glow */}
      <div style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          <div
            className="relative overflow-hidden rounded-[var(--r-xl,1rem)]"
            style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}
          >
            {/* Dark grid background */}
            <div
              className="absolute inset-0"
              style={{
                background: '#050a02',
                backgroundImage: 'linear-gradient(to right, #12170f 1px, transparent 1px), linear-gradient(to bottom, #12170f 1px, transparent 1px)',
                backgroundSize: '6rem 4rem',
              }}
            />
            {/* Glow overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle 600px at 50% 120%, #1C1C02, transparent)' }}
            />
            {/* Content */}
            <div className="relative z-10 text-center max-w-[42rem] mx-auto text-white">
              <h2
                className="font-heading font-bold text-white tracking-[-0.02em] leading-[1.2]"
                style={{ fontSize: 'clamp(1.75rem, 3vw + 1rem, 3rem)' }}
              >
                Ready to transform your operations?
              </h2>
              <p className="mt-3.5 text-[1.0625rem] leading-[1.6] text-white/65">
                90-day free trial. No credit card. Full access from day one.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-[0.875rem]">
                <Link
                  href={feature.ctaUrl}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-semibold text-base transition-all duration-150 whitespace-nowrap"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)', border: '1.5px solid var(--primary)' }}
                >
                  {feature.ctaText}
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-semibold text-base text-white transition-all duration-150 hover:border-white/75 whitespace-nowrap"
                  style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)' }}
                >
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureDetailPage;
