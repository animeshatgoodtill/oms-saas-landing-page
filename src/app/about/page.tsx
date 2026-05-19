import { Metadata } from 'next';
import { FiTarget, FiSmartphone, FiEye, FiHeart } from 'react-icons/fi';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBox from '@/components/CtaBox';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `About Us | ${siteDetails.siteName}`,
  description: `Learn about ${siteDetails.siteName} - ${companyDetails.about.tagline}. We're on a mission to simplify operations for fire safety and electrical contractors.`,
};

const valueIcons = [
  <FiTarget key="target" size={20} />,
  <FiSmartphone key="mobile" size={20} />,
  <FiEye key="eye" size={20} />,
  <FiHeart key="heart" size={20} />,
];

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About Opscel"
        title="Built by people who've lived the problem"
        description="After years implementing systems for fire safety and electrical contractors, we saw the same story repeat. We built the software we wished existed."
      />

      {/* ── OUR STORY ── White background, left-aligned prose */}
      <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full max-w-[48rem]">
          <SectionHeading eyebrow="Our Story" title="Why we built Opscel" align="left" />
          <div className="flex flex-col gap-5">
            {companyDetails.about.story.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[1.0625rem] text-muted-foreground leading-[1.75]">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── Muted background, blockquote */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
        <div className="mx-auto px-5 w-full max-w-[48rem] text-center">
          <SectionHeading eyebrow="Mission" title="What we're here to do" />
          <blockquote
            className="font-heading font-semibold text-foreground italic leading-[1.5] text-left max-w-[42rem] mx-auto"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              borderLeft: '4px solid var(--primary)',
              paddingLeft: '1.5rem',
            }}
          >
            &ldquo;{companyDetails.about.mission}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── VALUES ── White, 2x2 grid */}
      <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          <SectionHeading eyebrow="Values" title="What we believe" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[50rem] mx-auto">
            {companyDetails.about.values.map((value, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-[0.75rem] p-6"
              >
                <div
                  className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center text-foreground mb-3.5"
                  style={{ background: 'rgba(254,216,53,0.25)' }}
                >
                  {valueIcons[i]}
                </div>
                <h3 className="font-heading font-bold text-[1.0625rem] text-foreground mb-1.5">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.6]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UK-BASED ── Muted background, credentials chips */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--muted)' }}>
        <div className="mx-auto px-5 w-full max-w-[40rem] text-center">
          <SectionHeading
            eyebrow="UK-Based"
            title="Proudly built in London"
            description={`Opscel is headquartered in ${companyDetails.about.location}, United Kingdom. We understand UK fire safety regulations, British Standards, and the day-to-day realities of running a UK contracting business.`}
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {companyDetails.credentials.ukDataCentres && (
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                UK Data Centres
              </div>
            )}
            {companyDetails.credentials.gdprCompliant && (
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 11 12 14 22 4" />
                </svg>
                GDPR Compliant
              </div>
            )}
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              UK Support Team
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
              Companies House {companyDetails.companiesHouseNumber}
            </div>
          </div>
        </div>
      </section>

      <CtaBox
        title="Ready to simplify your operations?"
        subtitle="Join the contractors already saving hours every week with Opscel."
        actions={[
          { label: 'Start Free Trial', href: 'https://app.opscel.com/handler/sign-up', variant: 'primary' },
          { label: 'Contact Us', href: '/contact', variant: 'outline' },
        ]}
      />
    </>
  );
};

export default AboutPage;
