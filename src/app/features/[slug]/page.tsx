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
      {/* Hero Section - Premium visual treatment */}
      <section className="relative pt-32 md:pt-40 pb-32 md:pb-40 bg-gradient-to-br from-hero-background via-white to-hero-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12 animate-fade-in">
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

            {/* Centered icon and badge */}
            <div className="text-center mb-8 animate-fade-in-up stagger-1">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl mb-6 shadow-lg">
                <svg className="w-14 h-14 text-primary">
                  <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                </svg>
              </div>
              <p className="inline-block text-secondary font-semibold text-xs uppercase tracking-widest px-4 py-2 bg-secondary/10 rounded-full mb-6">
                {feature.subtitle}
              </p>
            </div>

            {/* Hero heading - centered with better spacing */}
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in-up stagger-2">
              {feature.title}
            </h1>

            <p className="text-center text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-3">
              {feature.heroDescription}
            </p>

            {/* CTAs with enhanced visual prominence */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up stagger-4">
              <Link
                href={feature.ctaUrl}
                className="inline-block bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-2xl px-10 py-5 rounded-full font-bold transition-all duration-300 text-center shadow-xl hover:scale-105 text-lg"
              >
                {feature.ctaText}
              </Link>
              {feature.slug === 'certificates' && (
                <Link
                  href="/docs/certificates"
                  className="inline-block border-2 border-secondary/30 bg-white/50 backdrop-blur-sm text-secondary hover:bg-secondary hover:text-white hover:border-secondary px-10 py-5 rounded-full font-bold transition-all duration-300 text-center shadow-lg hover:shadow-xl text-lg"
                >
                  View Complete User Guide
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights Grid - Enhanced cards */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to manage compliance and stay ahead of regulations
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {feature.featureHighlights.map((highlight, index) => (
                  <div key={index} className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}>
                    <div className="flex gap-5">
                      {/* Icon with gradient background */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-9 h-9 text-secondary">
                            <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                          </svg>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* How It Works Steps - Premium visual treatment */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <Container>
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get started in minutes with our intuitive workflow
                </p>
              </div>

              {/* Steps with vertical flow and connecting line */}
              <div className="relative max-w-3xl mx-auto">
                {/* Enhanced connecting line */}
                <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 rounded-full hidden md:block" />

                {feature.howItWorksSteps.map((step, index) => (
                  <div key={index} className={`relative flex gap-8 mb-16 last:mb-0 animate-fade-in-up stagger-${index + 1}`}>
                    {/* Step number with enhanced gradient and shadow */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-2xl hover:scale-110 transition-transform">
                      {step.stepNumber}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
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

      {/* Persona Benefits - Enhanced cards */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for Your Role
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tailored benefits for every member of your team
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {feature.personaBenefits.map((persona, index) => (
                  <div key={index} className={`group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        For {persona.persona}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-24 transition-all duration-300" />
                    </div>
                    <ul className="space-y-4">
                      {persona.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <BsFillCheckCircleFill className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{benefit}</span>
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

      {/* Stats Block - Premium treatment */}
      {feature.stats && feature.stats.length > 0 && (
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <Container>
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid sm:grid-cols-3 gap-12 lg:gap-16">
                {feature.stats.map((stat, index) => (
                  <div key={index} className={`text-center group animate-fade-in-up stagger-${index + 1}`}>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xs mx-auto">
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

      {/* Comparison Table - Premium visual treatment */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Makes OpsCel Different?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Compare our features with traditional job management software
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                <table className="w-full border-collapse bg-white">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-7 px-8 font-bold text-lg text-foreground">Feature</th>
                      <th className="text-center py-7 px-8 font-bold text-lg">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-secondary text-xl">OpsCel</span>
                          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                        </div>
                      </th>
                      <th className="text-center py-7 px-8 font-bold text-lg text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.comparison.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200"
                      >
                        <td className="py-6 px-8 text-foreground font-medium">
                          {row.feature}
                        </td>
                        <td className="py-6 px-8 text-center bg-secondary/5">
                          {row.opscel ? (
                            <BsFillCheckCircleFill className="inline text-3xl text-green-600 drop-shadow-sm" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )}
                        </td>
                        <td className="py-6 px-8 text-center text-muted-foreground">
                          {typeof row.others === 'boolean' ? (
                            row.others ? (
                              <BsFillCheckCircleFill className="inline text-3xl text-gray-400" />
                            ) : (
                              <span className="text-gray-400 text-lg">—</span>
                            )
                          ) : (
                            <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{row.others}</span>
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

      {/* FAQ Section - Enhanced */}
      {feature.faq && feature.faq.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to know about this feature
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
                <FAQAccordion faqs={feature.faq} />
              </div>
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
