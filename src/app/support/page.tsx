import { Metadata } from 'next';
import Link from 'next/link';
import {
  FiBook,
  FiMessageCircle,
  FiMail,
  FiPhone,
  FiPlayCircle,
  FiFileText,
  FiUsers,
  FiSettings,
  FiSmartphone,
  FiCreditCard,
  FiRefreshCw,
} from 'react-icons/fi';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Help Centre | ${siteDetails.siteName}`,
  description: `Get help with ${siteDetails.siteName}. Browse our help articles, watch tutorials, or contact our support team.`,
};

const helpTopics = [
  {
    icon: <FiPlayCircle size={24} />,
    title: 'Getting Started',
    description: 'New to Opscel? Learn the basics and set up your account.',
    articles: ['Creating your account', 'Adding your first job', 'Inviting team members'],
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Team Management',
    description: 'Manage engineers, permissions, and team settings.',
    articles: ['Adding engineers', 'Setting up roles', 'Managing schedules'],
  },
  {
    icon: <FiFileText size={24} />,
    title: 'Jobs & Certificates',
    description: 'Create jobs, generate certificates, and manage documentation.',
    articles: ['Creating a new job', 'Generating certificates', 'Customising templates'],
  },
  {
    icon: <FiSmartphone size={24} />,
    title: 'Mobile App',
    description: 'Use Opscel on the go with our mobile application.',
    articles: ['Installing the app', 'Offline mode', 'Photo capture'],
  },
  {
    icon: <FiCreditCard size={24} />,
    title: 'Billing & Subscriptions',
    description: 'Manage your subscription, invoices, and payment methods.',
    articles: ['Viewing invoices', 'Changing plans', 'Payment methods'],
  },
  {
    icon: <FiSettings size={24} />,
    title: 'Account Settings',
    description: 'Configure your account, notifications, and preferences.',
    articles: ['Profile settings', 'Notification preferences', 'Company details'],
  },
];

const SupportPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Help Centre"
        description="Find answers, watch tutorials, and get support from our team."
      />

      {/* Search Section - Placeholder for future search functionality */}
      <section className="py-8 bg-hero-background border-b border-gray-200">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-black px-6 py-2 rounded-full font-medium hover:bg-primary-accent transition-colors">
                Search
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={companyDetails.links.helpCentre || '#'}
              className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <FiBook className="text-foreground" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-sm text-foreground-accent">Browse our detailed guides and tutorials</p>
            </a>

            <a
              href={`mailto:${companyDetails.contact.supportEmail}`}
              className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <FiMail className="text-foreground" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-foreground-accent">Get help from our support team</p>
            </a>

            {companyDetails.links.statusPage && (
              <a
                href={companyDetails.links.statusPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <FiRefreshCw className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">System Status</h3>
                <p className="text-sm text-foreground-accent">Check service availability</p>
              </a>
            )}
          </div>
        </Container>
      </section>

      {/* Help Topics */}
      <section className="py-12 bg-hero-background">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {topic.title}
                </h3>
                <p className="text-foreground-accent text-sm mb-4">
                  {topic.description}
                </p>
                <ul className="space-y-2">
                  {topic.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a
                        href="#"
                        className="text-sm text-secondary hover:underline"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-foreground-accent mb-8">
              Our support team is here to help. Reach out and we&apos;ll get back to you
              as soon as possible.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="bg-hero-background rounded-2xl p-6">
                <FiMail className="mx-auto mb-3 text-foreground" size={28} />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <a
                  href={`mailto:${companyDetails.contact.supportEmail}`}
                  className="text-secondary hover:underline"
                >
                  {companyDetails.contact.supportEmail}
                </a>
                <p className="text-sm text-foreground-accent mt-2">
                  We respond within 24 hours
                </p>
              </div>

              {companyDetails.contact.phone && (
                <div className="bg-hero-background rounded-2xl p-6">
                  <FiPhone className="mx-auto mb-3 text-foreground" size={28} />
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <a
                    href={`tel:${companyDetails.contact.phone.replace(/\s/g, '')}`}
                    className="text-secondary hover:underline"
                  >
                    {companyDetails.contact.phone}
                  </a>
                  <p className="text-sm text-foreground-accent mt-2">
                    {companyDetails.contact.supportHours}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors"
              >
                <FiMessageCircle size={18} />
                Contact Support
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-foreground text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70">
                Find quick answers to common questions about Opscel.
              </p>
            </div>
            <Link
              href="/#faq"
              className="bg-white text-foreground hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
            >
              View FAQs
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SupportPage;
