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
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-hero-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
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

            {/* Icon and Subtitle */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center text-foreground flex-shrink-0">
                <svg className="w-10 h-10">
                  <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                </svg>
              </div>
              <p className="text-secondary font-semibold">{feature.subtitle}</p>
            </div>

            {/* Title and Description */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {feature.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {feature.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={feature.ctaUrl}
                className="inline-block bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical text-center"
              >
                {feature.ctaText}
              </Link>
              {feature.slug === 'certificates' && (
                <Link
                  href="/docs/certificates"
                  className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical text-center"
                >
                  View Complete User Guide
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights Grid */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {feature.featureHighlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10">
                        <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* How It Works Steps */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section className="py-16 md:py-24 bg-hero-background">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {feature.howItWorksSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Persona Benefits */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {feature.personaBenefits.map((persona, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      For {persona.persona}
                    </h3>
                    <ul className="space-y-3">
                      {persona.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <BsFillCheckCircleFill className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
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

      {/* Stats Block */}
      {feature.stats && feature.stats.length > 0 && (
        <section className="py-16 md:py-24 bg-foreground text-background">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {feature.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="font-mono text-5xl md:text-6xl font-bold text-primary mb-3">
                      {stat.value}
                    </div>
                    <p className="text-lg opacity-90">
                      {stat.label}
                    </p>
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
          className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-hero-background' : ''}`}
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
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

      {/* Comparison Table */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section className="py-16 md:py-24 bg-hero-background">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                What Makes OpsCel Different?
              </h2>
              <div className="overflow-x-auto mt-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-foreground">OpsCel</th>
                      <th className="text-center py-4 px-4 font-bold text-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.comparison.map((row, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="py-4 px-4 text-muted-foreground">{row.feature}</td>
                        <td className="py-4 px-4 text-center">
                          {row.opscel ? (
                            <span className="text-secondary text-2xl">✓</span>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center text-muted-foreground">
                          {row.others === 'Yes' ? '✓' : row.others === 'No' ? '—' : row.others}
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
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={feature.faq} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Win More Work?
            </h2>
            <p className="text-xl mb-2 opacity-90">
              {feature.slug === 'quotations'
                ? 'Quotations is available on Business and Pro plans.'
                : 'Available on all plans.'}
            </p>
            <p className="text-lg mb-8 opacity-75">
              No credit card required. Full access to every feature. 90-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={feature.ctaUrl}
                className="bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
              >
                {feature.ctaText}
              </Link>
              <Link
                href="/features"
                className="border-2 border-background hover:bg-background/10 text-background px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
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
