'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiClock, FiMessageCircle, FiHelpCircle, FiCalendar, FiArrowRight } from 'react-icons/fi';

import PageHero from '@/components/PageHero';
import { companyDetails } from '@/data/companyDetails';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.subject}] Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${companyDetails.contact.generalEmail}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Have questions? We'd love to hear from you. Or just book a 15-minute demo and see Opscel in action."
      />

      <section className="bg-white" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
          {/* ── DEMO CARD with glow ── */}
          <div
            className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-white mb-14"
            style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {/* Glow orbs */}
            <div
              className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] pointer-events-none"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div
              className="absolute -bottom-[20%] -right-[5%] w-[45%] h-[80%] pointer-events-none"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.22) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
              <div>
                <div
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold px-3.5 py-1 rounded-full mb-3 text-[color:var(--secondary)]"
                  style={{ background: 'rgba(48,79,255,0.1)' }}
                >
                  <FiCalendar size={12} />
                  <span>15-minute walkthrough</span>
                </div>
                <h2
                  className="font-heading font-extrabold text-foreground tracking-[-0.02em] mb-2"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  See Opscel in action.
                </h2>
                <p className="text-base text-muted-foreground max-w-[32rem] leading-[1.55]">
                  Pick a time that suits you. We&apos;ll walk through a real certificate workflow, answer your questions, and show you exactly how it fits your business.
                </p>
              </div>
              <a
                href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-base transition-all duration-150 whitespace-nowrap"
                style={{
                  background: 'var(--secondary)',
                  color: '#fff',
                  border: '1.5px solid var(--secondary)',
                }}
              >
                Book a demo
                <FiArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* ── CONTACT INFO + FORM ── 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14">
            {/* Contact info column */}
            <div>
              <h2 className="font-heading font-bold text-foreground text-2xl mb-6">
                Contact info
              </h2>

              <a
                href={`mailto:${companyDetails.contact.generalEmail}`}
                className="flex items-center gap-4 p-4 rounded-[0.75rem] mb-3 border border-border transition-colors hover:bg-border/50"
                style={{ background: 'var(--muted)' }}
              >
                <div
                  className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center flex-shrink-0 text-foreground"
                  style={{ background: 'rgba(254,216,53,0.25)' }}
                >
                  <FiMail size={18} />
                </div>
                <div>
                  <div className="text-[0.8125rem] font-bold text-muted-foreground uppercase tracking-[0.05em] mb-0.5">
                    Email
                  </div>
                  <div className="text-[0.9375rem] text-foreground font-medium">
                    {companyDetails.contact.generalEmail}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyDetails.contact.supportEmail}`}
                className="flex items-center gap-4 p-4 rounded-[0.75rem] mb-3 border border-border transition-colors hover:bg-border/50"
                style={{ background: 'var(--muted)' }}
              >
                <div
                  className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center flex-shrink-0 text-foreground"
                  style={{ background: 'rgba(254,216,53,0.25)' }}
                >
                  <FiMessageCircle size={18} />
                </div>
                <div>
                  <div className="text-[0.8125rem] font-bold text-muted-foreground uppercase tracking-[0.05em] mb-0.5">
                    Support
                  </div>
                  <div className="text-[0.9375rem] text-foreground font-medium">
                    {companyDetails.contact.supportEmail}
                  </div>
                </div>
              </a>

              {companyDetails.contact.phone && (
                <a
                  href={`tel:${companyDetails.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-[0.75rem] mb-3 border border-border transition-colors hover:bg-border/50"
                  style={{ background: 'var(--muted)' }}
                >
                  <div
                    className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center flex-shrink-0 text-foreground"
                    style={{ background: 'rgba(254,216,53,0.25)' }}
                  >
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <div className="text-[0.8125rem] font-bold text-muted-foreground uppercase tracking-[0.05em] mb-0.5">
                      Phone
                    </div>
                    <div className="text-[0.9375rem] text-foreground font-medium">
                      {companyDetails.contact.phone}
                    </div>
                  </div>
                </a>
              )}

              <div
                className="flex items-center gap-4 p-4 rounded-[0.75rem] border border-border"
                style={{ background: 'var(--muted)' }}
              >
                <div
                  className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center flex-shrink-0 text-foreground"
                  style={{ background: 'rgba(254,216,53,0.25)' }}
                >
                  <FiClock size={18} />
                </div>
                <div>
                  <div className="text-[0.8125rem] font-bold text-muted-foreground uppercase tracking-[0.05em] mb-0.5">
                    Support Hours
                  </div>
                  <div className="text-[0.9375rem] text-foreground font-medium">
                    {companyDetails.contact.supportHours}
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-7">
                <div className="text-[0.875rem] font-bold text-muted-foreground uppercase tracking-[0.05em] mb-3">
                  Quick links
                </div>
                <Link
                  href="/support"
                  className="flex items-center gap-2.5 text-[0.9375rem] text-muted-foreground py-2 border-b border-border hover:text-foreground transition-colors"
                >
                  <FiHelpCircle size={16} />
                  Help Centre &amp; Support
                </Link>
                {companyDetails.links.statusPage && (
                  <a
                    href={companyDetails.links.statusPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[0.9375rem] text-muted-foreground py-2 hover:text-foreground transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Status Page
                  </a>
                )}
              </div>
            </div>

            {/* Form column */}
            <div className="bg-white border border-border rounded-[0.75rem] p-8">
              <h2 className="font-heading font-bold text-foreground text-xl mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name <span style={{ color: 'var(--error)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address <span style={{ color: 'var(--error)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-semibold text-foreground">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors"
                      placeholder="ABC Fire Safety Ltd"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors"
                      placeholder="+44 7123 456789"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-5">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                    What can we help with? <span style={{ color: 'var(--error)' }}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors bg-white"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 mb-6">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Your Message <span style={{ color: 'var(--error)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="px-3.5 py-3 rounded-[0.625rem] border-[1.5px] border-border text-[0.9375rem] focus:border-[color:var(--secondary)] focus:ring-2 focus:ring-[color:var(--secondary)]/10 outline-none transition-colors resize-y min-h-[9rem]"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3 rounded-[0.625rem] font-heading font-semibold text-base transition-all duration-150"
                  style={{
                    background: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    border: '1.5px solid var(--primary)',
                  }}
                >
                  Send Message
                </button>

                <p className="text-[0.8125rem] text-muted-foreground text-center mt-3.5">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
