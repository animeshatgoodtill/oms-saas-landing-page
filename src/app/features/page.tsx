import { Metadata } from 'next';
import Link from 'next/link';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { siteDetails } from '@/data/siteDetails';
import { featureCategories, featuresPageDetails } from '@/data/featuresPage';

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

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 1 ? 'bg-hero-background' : ''}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-foreground flex-shrink-0">
                  <svg className="w-10 h-10">
                    <use href={`/icons/features-sprite.svg#${category.iconId}`} />
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-mechanical ease-mechanical"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7">
                          <use href={`/icons/features-sprite.svg#${feature.iconId}`} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-16">
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
