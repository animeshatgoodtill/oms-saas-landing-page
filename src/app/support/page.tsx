import { Metadata } from 'next';
import Link from 'next/link';
import {
  FiHelpCircle,
  FiCalendar,
  FiMail,
  FiShield,
  FiMessageCircle,
  FiClock,
  FiArrowRight,
} from 'react-icons/fi';

import PageHero from '@/components/PageHero';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Support | ${siteDetails.siteName}`,
  description: `Get help with ${siteDetails.siteName}. Browse our help articles, watch tutorials, or contact our support team.`,
};

interface SupportCard {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  linkLabel: string;
  linkColor?: string;
  href?: string;
  external?: boolean;
}

const SupportPage: React.FC = () => {
  const cards: SupportCard[] = [
    {
      icon: <FiHelpCircle size={22} />,
      iconBg: 'rgba(2,128,196,0.1)',
      iconColor: 'var(--secondary)',
      title: 'Help Centre',
      description: 'Browse articles, guides, and step-by-step tutorials for every feature in Opscel.',
      linkLabel: 'Visit Help Centre',
      href: companyDetails.links.helpCentre || '#',
      external: true,
    },
    {
      icon: <FiCalendar size={22} />,
      iconBg: 'rgba(254,216,53,0.2)',
      iconColor: 'var(--foreground)',
      title: 'Book a Walkthrough',
      description: "Get a live screen-share with our team. We'll set up your account, import your data, and answer every question.",
      linkLabel: 'Book 15 mins',
      href: 'https://calendar.app.google/Tp8Hwzbf6tVMGDkW6',
      external: true,
    },
    {
      icon: <FiMail size={22} />,
      iconBg: 'rgba(22,163,74,0.1)',
      iconColor: 'var(--success)',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours (Mon–Fri). Priority queue for Team and Business plans.',
      linkLabel: companyDetails.contact.supportEmail,
      href: `mailto:${companyDetails.contact.supportEmail}`,
    },
    {
      icon: <FiShield size={22} />,
      iconBg: 'rgba(22,163,74,0.1)',
      iconColor: 'var(--success)',
      title: 'Status Page',
      description: 'Check real-time uptime for the Opscel platform, API, and customer portal. Subscribe to incident notifications.',
      linkLabel: 'All systems operational',
      linkColor: 'var(--success)',
      href: companyDetails.links.statusPage,
      external: true,
    },
    {
      icon: <FiMessageCircle size={22} />,
      iconBg: 'rgba(48,79,255,0.1)',
      iconColor: 'var(--secondary)',
      title: 'Contact Sales',
      description: 'Questions about pricing, multi-seat licences, or enterprise needs? Talk to us directly.',
      linkLabel: 'Get in touch',
      href: '/contact',
    },
    {
      icon: <FiClock size={22} />,
      iconBg: 'rgba(245,158,11,0.1)',
      iconColor: 'var(--warning)',
      title: 'Support Hours',
      description: `${companyDetails.contact.supportHours}. We aim to respond to all emails within 24 hours on business days.`,
      linkLabel: 'London, United Kingdom',
      linkColor: 'var(--muted-foreground)',
      // no href = non-clickable info card
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We're here to help"
        description="Find answers, get in touch, or book a walkthrough. We're Monday–Friday, 9am–5:30pm GMT."
        gradient="linear-gradient(135deg,#1e3a2f 0%,#16a34a 100%)"
      />

      <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => {
              const inner = (
                <>
                  <div
                    className="w-12 h-12 rounded-[0.875rem] flex items-center justify-center"
                    style={{ background: card.iconBg, color: card.iconColor }}
                  >
                    {card.icon}
                  </div>
                  <div className="font-heading font-bold text-[1.0625rem] text-foreground">
                    {card.title}
                  </div>
                  <div className="text-sm text-muted-foreground leading-[1.55] flex-1">
                    {card.description}
                  </div>
                  <div
                    className="text-sm font-semibold flex items-center gap-1.5"
                    style={{ color: card.linkColor || 'var(--secondary)' }}
                  >
                    {card.linkLabel}
                    {card.href && (
                      <FiArrowRight size={14} />
                    )}
                  </div>
                </>
              );

              const cardClass =
                'bg-white border border-border rounded-[0.75rem] p-7 flex flex-col gap-3.5 transition-all duration-200';
              const linkClass = `${cardClass} no-underline text-inherit hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5`;

              if (!card.href) {
                return (
                  <div key={i} className={cardClass} style={{ cursor: 'default' }}>
                    {inner}
                  </div>
                );
              }

              if (card.external) {
                return (
                  <a
                    key={i}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <Link key={i} href={card.href} className={linkClass}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
