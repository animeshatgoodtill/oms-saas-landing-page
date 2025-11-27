import { Metadata } from 'next';
import Link from 'next/link';
import { FiTarget, FiSmartphone, FiEye, FiHeart } from 'react-icons/fi';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `About Us | ${siteDetails.siteName}`,
  description: `Learn about ${siteDetails.siteName} - ${companyDetails.about.tagline}. We're on a mission to simplify operations for fire safety and electrical contractors.`,
};

const valueIcons = [
  <FiTarget key="target" size={28} />,
  <FiSmartphone key="mobile" size={28} />,
  <FiEye key="eye" size={28} />,
  <FiHeart key="heart" size={28} />,
];

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="About Opscel"
        description={companyDetails.about.tagline}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground-accent leading-relaxed">
              {companyDetails.about.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-hero-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-foreground-accent leading-relaxed">
              &ldquo;{companyDetails.about.mission}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {companyDetails.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-foreground mb-4">
                  {valueIcons[index]}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground-accent">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* UK Focus Section */}
      <section className="py-16 md:py-24 bg-hero-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Proudly UK-Based
            </h2>
            <p className="text-foreground-accent leading-relaxed mb-6">
              Opscel is headquartered in {companyDetails.about.location}, United Kingdom.
              We understand the specific requirements of British fire safety regulations,
              electrical standards, and the day-to-day realities of running a contracting
              business in the UK.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-accent">
              {companyDetails.credentials.ukDataCentres && (
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  UK Data Centres
                </span>
              )}
              {companyDetails.credentials.gdprCompliant && (
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  GDPR Compliant
                </span>
              )}
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
                UK Support Team
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Simplify Your Operations?
            </h2>
            <p className="text-foreground-accent mb-8">
              Join the fire safety and electrical contractors who are already saving
              hours every week with Opscel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.opscel.com/handler/sign-up"
                className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border border-foreground/30 hover:border-foreground/60 text-foreground px-8 py-3 rounded-full font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
