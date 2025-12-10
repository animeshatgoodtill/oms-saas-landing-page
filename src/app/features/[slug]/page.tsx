import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';
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

// Generate metadata for each feature page
export async function generateMetadata({ params }: FeatureDetailPageProps): Promise<Metadata> {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    return {
      title: `Feature Not Found | ${siteDetails.siteName}`,
    };
  }

  return {
    title: `${feature.title} | ${siteDetails.siteName}`,
    description: feature.heroDescription,
  };
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

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href={feature.ctaUrl}
                className="inline-block bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
              >
                {feature.ctaText}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Sections */}
      {feature.sections.map((section, index) => (
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

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              See It in Action—90 Days Free
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No credit card required. Full access to every feature. See if OpsCel works for your business with zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={feature.ctaUrl}
                className="bg-primary text-primary-foreground hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-all duration-mechanical ease-mechanical"
              >
                Start Free Trial
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
