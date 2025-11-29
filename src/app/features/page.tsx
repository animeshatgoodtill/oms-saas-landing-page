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
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-foreground flex-shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-foreground-accent">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-accent leading-relaxed">
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
                className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/#pricing"
                className="border border-foreground/30 hover:border-foreground/60 text-foreground px-8 py-3 rounded-full font-medium transition-colors"
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
