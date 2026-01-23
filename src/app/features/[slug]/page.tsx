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
      {/* Hero Section - Split layout with image */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 bg-white overflow-hidden">
        <Container>
          <div className="max-w-7xl mx-auto">
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

            {/* Split Layout: Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 animate-fade-in-up stagger-1">
                  <svg className="w-5 h-5 text-secondary">
                    <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                  </svg>
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                    {feature.subtitle}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-in-up stagger-2">
                  {feature.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up stagger-3">
                  {feature.heroDescription}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
                  <Link
                    href={feature.ctaUrl}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-2xl px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    {feature.ctaText}
                  </Link>
                  {feature.slug === 'certificates' && (
                    <Link
                      href="/docs/certificates"
                      className="inline-flex items-center justify-center border-2 border-gray-300 bg-white text-foreground hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      View User Guide
                    </Link>
                  )}
                </div>
              </div>

              {/* Right: Hero Image/Mockup */}
              <div className="relative animate-fade-in-up stagger-4">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Placeholder mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="w-24 h-24 mx-auto mb-4 text-gray-400">
                        <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium">Feature Mockup</p>
                      <p className="text-gray-400 text-sm mt-2">Product screenshot placeholder</p>
                    </div>
                  </div>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 pointer-events-none" />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights - Alternating layout sections */}
      {feature.featureHighlights && feature.featureHighlights.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-gray-50">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to manage compliance and stay ahead of regulations
                </p>
              </div>

              {/* Show first 4 highlights in alternating image/content layout */}
              <div className="space-y-24 mb-20">
                {feature.featureHighlights.slice(0, 4).map((highlight, index) => (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-up`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-4">
                        <svg className="w-4 h-4 text-secondary">
                          <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                        </svg>
                        <span className="text-secondary font-semibold text-xs uppercase tracking-wide">
                          Feature {index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Image placeholder */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-fade-in-up`}>
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <svg className="w-16 h-16 mx-auto mb-3 text-gray-300">
                              <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                            </svg>
                            <p className="text-gray-400 text-sm font-medium">{highlight.title}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Remaining highlights in card grid */}
              {feature.featureHighlights.length > 4 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {feature.featureHighlights.slice(4).map((highlight, index) => (
                    <div
                      key={index + 4}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-secondary">
                          <use href={`/icons/features-sprite.svg#${highlight.iconId}`} />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* How It Works - Dark section with visual workflow */}
      {feature.howItWorksSteps && feature.howItWorksSteps.length > 0 && (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <Container>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  How It Works
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Get started in minutes with our intuitive workflow
                </p>
              </div>

              {/* Horizontal step layout on larger screens */}
              <div className="hidden lg:grid lg:grid-cols-5 gap-4 mb-20">
                {feature.howItWorksSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step card */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-xl font-bold text-white mb-4 shadow-lg">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {/* Arrow connector */}
                    {index < (feature.howItWorksSteps?.length ?? 0) - 1 && (
                      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary/50 text-2xl">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Vertical layout on mobile */}
              <div className="lg:hidden space-y-6">
                {feature.howItWorksSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg">
                      {step.stepNumber}
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
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

      {/* Persona Benefits - Clean white section */}
      {feature.personaBenefits && feature.personaBenefits.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for Your Role
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tailored benefits for every member of your team
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {feature.personaBenefits.map((persona, index) => (
                  <div key={index} className="animate-fade-in-up">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-secondary">
                          <use href={`/icons/features-sprite.svg#icon-team`} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        For {persona.persona}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {persona.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-muted-foreground leading-relaxed text-sm">{benefit}</span>
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

      {/* Stats Block - Light section */}
      {feature.stats && feature.stats.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-12 lg:gap-16">
                {feature.stats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in-up">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xs mx-auto">
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

      {/* Comparison Table - White section */}
      {feature.comparison && feature.comparison.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-white">
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
              <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left py-6 px-6 md:px-8 font-bold text-base md:text-lg text-foreground">Feature</th>
                      <th className="text-center py-6 px-4 md:px-8 font-bold text-base md:text-lg">
                        <span className="text-secondary">OpsCel</span>
                      </th>
                      <th className="text-center py-6 px-4 md:px-8 font-bold text-base md:text-lg text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.comparison.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-5 px-6 md:px-8 text-foreground text-sm md:text-base">
                          {row.feature}
                        </td>
                        <td className="py-5 px-4 md:px-8 text-center">
                          {row.opscel ? (
                            <BsFillCheckCircleFill className="inline text-2xl md:text-3xl text-green-600" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )}
                        </td>
                        <td className="py-5 px-4 md:px-8 text-center text-muted-foreground">
                          {typeof row.others === 'boolean' ? (
                            row.others ? (
                              <BsFillCheckCircleFill className="inline text-2xl md:text-3xl text-gray-400" />
                            ) : (
                              <span className="text-gray-400 text-lg">—</span>
                            )
                          ) : (
                            <span className="text-xs md:text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{row.others}</span>
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
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }} className="bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about this feature
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
                <FAQAccordion faqs={feature.faq} />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section - Dark section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              {feature.slug === 'quotations'
                ? 'Quotations is available on Business and Pro plans.'
                : 'Available on all plans.'}
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-10">
              No credit card required. Full access to every feature. 90-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={feature.ctaUrl}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {feature.ctaText}
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
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
