import { Metadata } from 'next';
import Link from 'next/link';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { siteDetails } from '@/data/siteDetails';
import { featureCategories, featuresPageDetails } from '@/data/featuresPage';
import { featureDetails } from '@/data/featureDetails';

export const metadata: Metadata = {
  title: `Features | ${siteDetails.siteName}`,
  description: 'Discover all the features that make OpsCel the complete job management solution for UK trade contractors. Mobile field service, instant certificates, team management, and more.',
};

const FeaturesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={featuresPageDetails.title}
        description={featuresPageDetails.description}
      />

      {/* All Feature Detail Pages - Grid */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore All Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click any feature to see detailed information, pricing, and how it works
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureDetails.map((feature) => (
                <Link
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-7 h-7">
                        <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 1 ? 'bg-hero-background' : ''}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="flex items-start gap-6 mb-12">
                <div className="w-20 h-20 bg-primary/15 rounded-2xl flex items-center justify-center text-foreground flex-shrink-0">
                  <svg className="w-14 h-14">
                    <use href={`/icons/features-sprite.svg#${category.iconId}`} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {category.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  {category.detailSlug && (
                    <Link
                      href={`/features/${category.detailSlug}`}
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Features Grid - Clean Stripe Style */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-12">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    {/* Icon - Large and prominent */}
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <svg className="w-10 h-10">
                        <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Try Every Feature Free for 90 Days
            </h2>
            <p className="text-foreground-accent mb-8">
              No limitations, no &ldquo;trial version.&rdquo; See if OpsCel works for your business with zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.opscel.com/handler/sign-up"
                className="bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
              >
                Start Free Trial
              </Link>
              <Link
                href="/#pricing"
                className="border border-border hover:border-foreground/60 text-foreground px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeaturesPage;
