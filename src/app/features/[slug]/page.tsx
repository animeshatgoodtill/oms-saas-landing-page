import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Container from '@/components/Container';
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
      {/* Hero Section - Enhanced with better hierarchy */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 bg-gradient-to-b from-hero-background to-white overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/features" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <span>/</span>
              <span className="text-foreground">{feature.title}</span>
            </div>

            {/* Better visual hierarchy */}
            <div className="flex items-start gap-6 mb-8 animate-fade-in-up stagger-1">
              <div className="w-20 h-20 bg-primary/15 rounded-3xl flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12">
                  <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-3">
                  {feature.subtitle}
                </p>
                <h1 className="text-display-lg text-foreground mb-6">
                  {feature.title}
                </h1>
              </div>
            </div>

            <p className="lead mb-10 max-w-3xl animate-fade-in-up stagger-2">
              {feature.heroDescription}
            </p>

            {/* CTAs with better spacing */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
              <Link
                href={feature.ctaUrl}
                className="inline-block bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-4 rounded-full font-semibold transition-all duration-mechanical ease-mechanical text-center shadow-lg hover:shadow-xl"
              >
                {feature.ctaText}
              </Link>
              {feature.slug === 'certificates' && (
                <Link
                  href="/docs/certificates"
                  className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-mechanical ease-mechanical text-center"
                >
                  View Complete User Guide
                </Link>
              )}
            </div>
          </div>
        </Container>

        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Feature Highlights Grid - Left-aligned cards */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                {feature.featureHighlights.map((highlight, index) => (
                  <div key={index} className={`flex gap-6 animate-fade-in-up stagger-${index + 1}`}>
                    {/* Icon left-aligned */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8">
                          <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                        </svg>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* How It Works Steps - With connecting lines */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-hero-background">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-center mb-16">
                How It Works
              </h2>

              {/* Steps with vertical flow and connecting line */}
              <div className="relative max-w-3xl mx-auto">
                {/* Connecting line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 hidden md:block" />

                {feature.howItWorksSteps.map((step, index) => (
                  <div key={index} className={`relative flex gap-6 mb-12 last:mb-0 animate-fade-in-up stagger-${index + 1}`}>
                    {/* Step number with gradient */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      {step.stepNumber}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Persona Benefits */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-16">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {feature.personaBenefits.map((persona, index) => (
                  <div key={index} className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-in-up stagger-${index + 1}`}>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      For {persona.persona}
                    </h3>
                    <ul className="space-y-3">
                      {persona.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <BsFillCheckCircleFill className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Stats Block - Enhanced with gradient */}
      {feature.stats && feature.stats.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-secondary/5 via-primary/5 to-transparent">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-12">
                {feature.stats.map((stat, index) => (
                  <div key={index} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                    <div className="text-5xl md:text-6xl font-bold mb-3 gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Legacy Feature Sections (for backward compatibility) */}
      {feature.sections && feature.sections.map((section, index) => (
        <section
          key={index}
          style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
          className={index % 2 === 1 ? 'bg-hero-background' : ''}
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {section.description}
              </p>

              {/* Bullets if provided */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-4">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <BsFillCheckCircleFill className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-foreground-accent text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Image if provided */}
              {section.imageSrc && (
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={section.imageSrc}
                    alt={section.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* Comparison Table - Enhanced with hover effects */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-hero-background">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-4">
                What Makes OpsCel Different?
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Compare our features with traditional job management software
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-6 px-6 font-bold text-lg">Feature</th>
                      <th className="text-center py-6 px-6 font-bold text-lg text-secondary">OpsCel</th>
                      <th className="text-center py-6 px-6 font-bold text-lg text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.comparison.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-5 px-6 text-foreground">
                          {row.feature}
                        </td>
                        <td className="py-5 px-6 text-center">
                          {row.opscel ? (
                            <BsFillCheckCircleFill className="inline text-2xl text-green-600" />
                          ) : (
                            <span className="text-gray-400 text-sm">—</span>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center text-muted-foreground">
                          {typeof row.others === 'boolean' ? (
                            row.others ? (
                              <BsFillCheckCircleFill className="inline text-2xl text-gray-400" />
                            ) : (
                              <span className="text-gray-400 text-sm">—</span>
                            )
                          ) : (
                            <span className="text-sm font-medium">{row.others}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      {feature.faq && feature.faq.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-12">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={feature.faq} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section - Enhanced */}
      <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-gradient-to-br from-foreground via-gray-900 to-foreground text-background relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-2 opacity-90">
              {feature.slug === 'quotations'
                ? 'Quotations is available on Business and Pro plans.'
                : 'Available on all plans.'}
            </p>
            <p className="text-lg mb-10 opacity-75">
              No credit card required. Full access to every feature. 90-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={feature.ctaUrl}
                className="bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-4 rounded-full font-semibold transition-all duration-mechanical ease-mechanical shadow-xl hover:shadow-2xl"
              >
                {feature.ctaText}
              </Link>
              <Link
                href="/features"
                className="border-2 border-background hover:bg-background/10 text-background px-8 py-4 rounded-full font-semibold transition-all duration-mechanical ease-mechanical"
              >
                View All Features
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeatureDetailPage;
