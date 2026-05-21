import { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBox from '@/components/CtaBox';
import { siteDetails } from '@/data/siteDetails';
import { featureCategories } from '@/data/featuresPage';
import { featureDetails } from '@/data/featureDetails';

export const metadata: Metadata = {
  title: `Features | ${siteDetails.siteName}`,
  description:
    'Discover all the features that make OpsCel the complete job management solution for UK trade contractors. Mobile field service, instant certificates, team management, and more.',
};

const FeaturesPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow={
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
            </svg>
            Platform
          </>
        }
        title="Everything You Need to Run Your Business"
        description="From field service to invoicing, customer management to compliance — Opscel handles it all. One system that works."
        actions={[
          { label: 'Start Free Trial', href: 'https://app.opscel.com/handler/sign-up', variant: 'primary' },
          { label: 'View Pricing', href: '/#pricing', variant: 'outline' },
        ]}
      />

      {/* ── ALL FEATURES GRID ── White background */}
      <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          <SectionHeading eyebrow="All Features" title="Explore every capability" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureDetails.map((feature) => (
              <Link
                key={feature.slug}
                href={`/features/${feature.slug}`}
                className="flex items-start gap-4 p-5 bg-white border border-border rounded-[0.75rem] hover:-translate-y-0.5 transition-all duration-200 hover:border-[color:var(--secondary)] hover:shadow-[0_4px_16px_rgba(2,128,196,0.1)]"
              >
                <div
                  className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(2,128,196,0.1)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 200 200">
                    <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-bold text-[0.9375rem] text-foreground mb-1">
                    {feature.title}
                  </div>
                  <div className="text-[0.8125rem] text-muted-foreground leading-[1.45] line-clamp-2">
                    {feature.subtitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── Light surface background */}
      <section style={{ padding: '4rem 0 0', background: 'var(--muted)' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          {featureCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="py-16 border-b border-border last:border-b-0"
            >
              {/* Category header */}
              <div className="flex items-start gap-5 mb-10">
                <div
                  className="w-14 h-14 rounded-[1rem] flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(254,216,53,0.2)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 200 200">
                    <use href={`/icons/features-sprite.svg#${category.iconId}`} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-foreground mb-1.5 tracking-[-0.015em] text-2xl">
                    {category.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-[1.55]">
                    {category.description}
                  </p>
                  {category.detailSlug && (
                    <Link
                      href={`/features/${category.detailSlug}`}
                      className="inline-flex items-center gap-2 text-[color:var(--secondary)] hover:opacity-80 font-medium text-sm mt-3 transition-opacity"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Category features grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div
                      className="w-11 h-11 rounded-[0.875rem] flex items-center justify-center mb-3"
                      style={{ background: 'rgba(2,128,196,0.08)' }}
                    >
                      <svg width="22" height="22" viewBox="0 0 200 200">
                        <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-[0.9375rem] text-foreground mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-[0.8125rem] text-muted-foreground leading-[1.5]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBox
        title="Try every feature free for 90 days"
        subtitle="No limitations, no trial version. See if Opscel works for your business with zero risk."
        actions={[
          { label: 'Start Free Trial', href: 'https://app.opscel.com/handler/sign-up', variant: 'primary' },
          { label: 'View Pricing', href: '/#pricing', variant: 'outline' },
        ]}
      />
    </>
  );
};

export default FeaturesPage;
