import { notFound } from 'next/navigation';
import Image from 'next/image';

import FAQAccordion from '@/components/FAQAccordion';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBox from '@/components/CtaBox';
import { getFeatureBySlug, getAllFeatureSlugs } from '@/data/featureDetails';

interface FeatureDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllFeatureSlugs();
  return slugs.map((slug) => ({ slug }));
}

const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ params }) => {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <PageHero
        backLink={{ label: 'All Features', href: '/features' }}
        eyebrow={feature.subtitle}
        title={feature.title}
        description={feature.heroDescription}
        actions={[
          { label: feature.ctaText, href: feature.ctaUrl, variant: 'primary' },
          {
            label: 'Book a Demo',
            href: 'https://calendar.app.google/Tp8Hwzbf6tVMGDkW6',
            variant: 'outline',
            target: '_blank',
            rel: 'noopener',
          },
        ]}
      />

      {/* ── STATS BAR ── */}
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

      {/* ── HIGHLIGHTS / CAPABILITIES ── */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <SectionHeading eyebrow="Capabilities" title="What it does" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {feature.featureHighlights.map((highlight, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-[0.75rem] p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center mb-3.5"
                    style={{ background: 'rgba(2,128,196,0.1)' }}
                  >
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

            {feature.screenshotImage && (
              <div className="mt-12 rounded-[0.75rem] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
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

      {/* ── HOW IT WORKS ── */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <SectionHeading eyebrow="Process" title="How it works" />

            <div className="flex flex-col max-w-[52rem] mx-auto">
              {feature.howItWorksSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-7 border-b border-border last:border-b-0"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-sm text-white"
                    style={{ background: 'var(--secondary)' }}
                  >
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

      {/* ── PERSONA BENEFITS ── */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <SectionHeading eyebrow="Benefits" title="Who it's for" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {feature.personaBenefits.map((persona, i) => (
                <div
                  key={i}
                  className="border border-border rounded-[0.75rem] p-6"
                  style={{ background: 'var(--muted)' }}
                >
                  <div className="font-heading font-extrabold text-[0.8125rem] uppercase tracking-[0.06em] text-[color:var(--secondary)] mb-3.5">
                    {persona.persona}
                  </div>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {persona.benefits.map((benefit, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-[1.5]"
                      >
                        <svg
                          className="flex-shrink-0 mt-[0.125rem]"
                          style={{ color: 'var(--success)' }}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
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

      {/* ── COMPARISON ── */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <SectionHeading eyebrow="Comparison" title="Opscel vs. the rest" />

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-[0.75rem] overflow-hidden border border-border">
                <thead>
                  <tr>
                    <th
                      className="text-left py-[0.875rem] px-5 font-heading text-sm font-bold text-white"
                      style={{ background: 'var(--foreground)' }}
                    >
                      Feature
                    </th>
                    <th
                      className="text-center py-[0.875rem] px-5 font-heading text-sm font-bold text-white w-[120px]"
                      style={{ background: 'var(--secondary)' }}
                    >
                      Opscel
                    </th>
                    <th
                      className="text-center py-[0.875rem] px-5 font-heading text-sm font-bold text-white w-[120px]"
                      style={{ background: 'var(--foreground)' }}
                    >
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feature.comparison.map((row, i) => (
                    <tr key={i}>
                      <td
                        className="py-3 px-5 border-b border-border text-sm text-muted-foreground"
                        style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}
                      >
                        {row.feature}
                      </td>
                      <td
                        className="py-3 px-5 border-b border-border text-center"
                        style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}
                      >
                        {row.opscel ? (
                          <span className="text-[1.125rem] font-bold" style={{ color: 'var(--success)' }}>
                            ✓
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td
                        className="py-3 px-5 border-b border-border text-center"
                        style={{ background: i % 2 === 0 ? '#fff' : 'var(--muted)' }}
                      >
                        {typeof row.others === 'boolean' ? (
                          row.others ? (
                            <span className="text-[1.125rem] font-bold" style={{ color: 'var(--success)' }}>
                              ✓
                            </span>
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

      {/* ── FAQ ── */}
      {feature.faq && feature.faq.length > 0 && (
        <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
          <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
            <SectionHeading eyebrow="FAQ" title={`${feature.subtitle} — common questions`} />
            <div className="max-w-[52rem] mx-auto">
              <FAQAccordion faqs={feature.faq} />
            </div>
          </div>
        </section>
      )}

      <CtaBox
        title="Ready to transform your operations?"
        subtitle="90-day free trial. No credit card. Full access from day one."
        actions={[
          { label: feature.ctaText, href: feature.ctaUrl, variant: 'primary' },
          { label: 'View All Features', href: '/features', variant: 'outline' },
        ]}
      />
    </>
  );
};

export default FeatureDetailPage;
