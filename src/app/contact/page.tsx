'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiHelpCircle } from 'react-icons/fi';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
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
    // For now, open mailto with the form data
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
      <PageHeader
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Get in touch with our team."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${companyDetails.contact.generalEmail}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-hero-background hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-foreground-accent">{companyDetails.contact.generalEmail}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  {companyDetails.contact.phone && (
                    <a
                      href={`tel:${companyDetails.contact.phone.replace(/\s/g, '')}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-hero-background hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiPhone className="text-foreground" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-foreground-accent">{companyDetails.contact.phone}</p>
                      </div>
                    </a>
                  )}

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-hero-background">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-foreground-accent">
                        {companyDetails.businessAddress.line1}<br />
                        {companyDetails.businessAddress.line2 && <>{companyDetails.businessAddress.line2}<br /></>}
                        {companyDetails.businessAddress.city}, {companyDetails.businessAddress.postcode}<br />
                        {companyDetails.businessAddress.country}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-hero-background">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Support Hours</p>
                      <p className="text-foreground-accent">{companyDetails.contact.supportHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <Link
                    href="/support"
                    className="flex items-center gap-3 text-foreground-accent hover:text-foreground transition-colors"
                  >
                    <FiHelpCircle size={18} />
                    <span>Help Centre</span>
                  </Link>
                  <a
                    href={`mailto:${companyDetails.contact.supportEmail}`}
                    className="flex items-center gap-3 text-foreground-accent hover:text-foreground transition-colors"
                  >
                    <FiMessageCircle size={18} />
                    <span>Technical Support</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="ABC Fire Safety Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="+44 7123 456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      What can we help with? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors bg-white"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-foreground-accent text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
