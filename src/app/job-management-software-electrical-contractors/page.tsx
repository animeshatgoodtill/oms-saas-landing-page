import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import { generateFAQSchema } from '@/lib/schema';

// Single source of truth for the FAQ section rendered further down the page
// — also fed straight into the FAQPage JSON-LD so the two can never drift.
const faqs = [
  {
    question: 'Is This For My Business Size?',
    answer: 'The software fits teams with five to fifty employees. It works well for small British electrical firms that want to grow. Starter plans help micro-firms with up to three users. Business plans support larger teams with more needs.',
  },
  {
    question: 'Do Engineers Need A New Phone?',
    answer: 'No, they can use the phones they already own. The Telegram bot works on most modern devices. A web app also exists for those who do not use Telegram. No big app store downloads are required.',
  },
  {
    question: 'Can I Use It In A Basement?',
    answer: 'The product catalog stays saved on the device. Engineers can add parts and log work without a signal. Data will sync as soon as they get back to the van. This offline mode is vital for electrical work.',
  },
  {
    question: 'Does It Link To Xero?',
    answer: 'Yes, it has a one-click link to Xero and QuickBooks. Invoices move over with all tax details. Payment status updates in the job system automatically. This prevents the need for double entry.',
  },
  {
    question: 'How Long Is The Setup?',
    answer: 'A guided checklist walks you through every step. Most firms are up and running very fast. The 4-step wizard makes creating customers a breeze. You will not feel overwhelmed by the start.',
  },
  {
    question: 'What About NICEIC or ECA Registration?',
    answer: 'The system creates certificates that follow British Standards. It supports BS 7671 for electrical work. These forms match official model types perfectly. This helps you pass audits with ease.',
  },
  {
    question: 'Is My Data Safe?',
    answer: 'All data stays in UK-based data centers. The system follows GDPR rules for privacy. It uses bank-level security for accounting links. You have full control over your records.',
  },
  {
    question: 'Can I Try It For Free?',
    answer: 'A 30-day free trial is available on all plans (a card is required at signup, but you are not charged until day 30). You get full access to every feature during the trial, and every new plan gets 50% off its base price for the first 3 months on top of that.',
  },
];

export const metadata: Metadata = {
  title: 'Best Job Management Software For UK Electrical Contractors | Opscel',
  description: 'Discover the best job management software for electrical contractors. Streamline BS 7671 compliance, scheduling, invoicing, and customer management to boost productivity and profitability.',
  openGraph: {
    title: 'Best Job Management Software For UK Electrical Contractors | Opscel',
    description: 'Streamline BS 7671 compliance, scheduling, invoicing, and customer management for electrical contractors.',
  },
};

const ElectricalContractorsPage: React.FC = () => {
  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      {/* Hero Section */}
      <section className="bg-hero-background border-b border-border pt-32 md:pt-40 pb-16">
        <Container>
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Best Job Management Software For UK Electrical Contractors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Streamline BS 7671 compliance, scheduling, invoicing, and customer management to boost productivity and profitability for your electrical contracting business.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <div className="max-w-4xl mx-auto py-16 md:py-24">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-16">
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              British electrical contractors face a big choice today. The electrical services market continues to expand with EV chargers, solar installations, and smart home technology. Many companies struggle with too much paperwork, which is why implementing effective job management software can streamline operations. Hard work on-site should not lead to hours at a desk.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              A review of the UK trade market shows a gap. Many tools are too complex for a small crew. They feel like they were built for a boardroom, not a van. Opscel fills this gap with simple screens designed for electricians.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              UK SMEs make up over ninety-nine percent of the business world. Small changes in work speed can add billions to the British economy. Most electrical firms now use cloud tools to handle their daily tasks. A shift to digital work helps teams win more bids and keep clients happy. Opscel job management software offers the right path for these firms.
            </p>

            {/* Key Features Callout */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="font-heading font-bold text-xl text-blue-900 mb-3">AI-Native Tools Integrated</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Opscel stays 100% UK-based with data kept in local centers</li>
                <li>• Every certificate checks itself against British Standards like BS 7671 and is automatically generated</li>
                <li>• Automatic Zs lookups and test result validation built-in</li>
              </ul>
            </div>
          </section>

          {/* Why Go Digital */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Why UK Electrical Contractors Must Go Digital
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The world of electrical work is more complex now. You wire buildings and also set up solar power or EV chargers. Manual notes lead to delays and high costs. Over fifty percent of electrical firms already use digital forms. A lack of clear tools can hurt your growth.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Efficiency is the main goal for most owners. Software should feel invisible in the field. It must simply help the team do a good job. Digital tools can boost company growth by eighteen percent over time. The right tool saves time for every staff member.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              NICEIC and ECA registered contractors need audit trails, retest tracking, and BS 7671 compliance. Opscel handles all of this automatically.
            </p>
          </section>

          {/* Opscel Section */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Opscel: The Best Job Management Software For Electrical Contractors
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              This is a modern system. It uses AI to save you time. The AI assistant is very smart. Type or paste customer data in any format. The AI fills the form in 30 seconds.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The industry is changing fast. New tech like EV chargers and smart homes adds complexity. Therefore, you need a tool that stays ahead. Opscel is the first of its kind. It is built for the future.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Additionally, the tool tracks retest dates. It flags when an EICR or periodic inspection is due. Never miss a job. This creates a steady income for years. This is why many choose Opscel as the best job management software for electrical contractors in the UK.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              The platform works for teams with five to fifty staff members. It helps firms that are NICEIC or ECA registered stay in line with the law. No hidden fees exist here. You do not sign long contracts to get started.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">
              Key Features for Electrical Contractors
            </h2>

            {/* Telegram Integration */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Telegram Linking</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                Most engineers already use Telegram for chatting. Opscel uses a bot on that same app. No new software needs to be installed on their phones. Account linking takes just a few minutes. Then, job alerts arrive as simple messages.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                The bot handles GPS check-ins in two seconds. Engineers snap photos of consumer units or test equipment. They can dictate notes instead of typing. Voice capture saves a lot of time in the van. All data syncs to the office in real time.
              </p>
            </div>

            {/* Xero Integration */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Xero Integration</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                Double data entry is a waste of money. Opscel links directly to Xero and QuickBooks. One click posts your invoice to the books. Line items and tax codes move over perfectly. This makes the life of your accountant much easier.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                Payment status updates back to the app automatically. You see what is paid without opening the bank site. It also creates new customers in the accounting tool. No duplicate records will clutter your files. This flow keeps your cash moving fast.
              </p>
            </div>

            {/* Dashboard */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Unique Dashboard</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                A good dashboard shows you what to do next. Opscel loads your data in under half a second. It uses colour codes to show if staff are too busy. Green means capacity, while red means overloaded. You can assign emergency calls to the right person fast.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                The quote pipeline shows your win rate. You see which deals are stuck in a queue. 4-week sparklines show if jobs are trending up. This helps you see growth without running a report. An activity feed shows work as it happens.
              </p>
            </div>

            {/* Customer Portal */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Customer Portal</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                Customers want to help themselves. The portal gives them twenty-four-hour access to their docs. They view quotes and pay deposits on their phones. Quote approval happens in thirty seconds instead of days. This professional look builds massive trust.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                Calls to the office drop by forty percent. Clients do not need to ask &ldquo;Where is my certificate?&rdquo;. They download PDFs with one click from a secure link. The system logs when they view the document. You have proof that they received the compliance cert.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                All these make Opscel as the best job management software for electrical contractors in the UK a safe bet for growth.
              </p>
            </div>
          </section>

          {/* British Standards */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              British Standards and Electrical Certificates
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Electrical work must follow the BS 7671 rules. This tool knows every rule in the book. It even knows Table 41.4 by heart. It checks your test results for you. No errors. It stops a person from sending a bad certificate.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The system uses an auto-lookup for Zs limits. If an engineer enters a wrong value, the tool flags a warning. Safety first. It applies temperature correction math as well. No more manual lookups. No more calculators.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Opscel supports all standard electrical certificates: EIC, EICR, Minor Works, and PAT Testing. Each form matches the official BS 7671 model forms perfectly.
            </p>

            {/* Feature Table */}
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-6 py-3 text-left font-heading font-bold">Feature</th>
                    <th className="border border-border px-6 py-3 text-left font-heading font-bold">User Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-6 py-3">Zs Lookup</td>
                    <td className="border border-border px-6 py-3">Zero manual math errors</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3">GPS Check-ins</td>
                    <td className="border border-border px-6 py-3">Proof of being on-site</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3">Telegram Bot</td>
                    <td className="border border-border px-6 py-3">No app store delays</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3">Circuit Schedule</td>
                    <td className="border border-border px-6 py-3">Auto-filled from previous visits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-foreground-accent">
              The software prevents the issue of bad certificates. You cannot issue an EICR if a major defect is marked as safe. It blocks mistakes before they happen. This reduces legal risk for the business owner. It builds a clear audit trail for every single job.
            </p>
          </section>

          {/* Managing Electrical Jobs */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Managing Electrical Jobs with Ease
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Electrical work requires very deep detail. You must track circuits, test results, and observations. Opscel handles multiple certificate types. Each one follows official model forms. This keeps your NICEIC or ECA status in good standing.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The system tracks when a periodic inspection is due. It flags these dates on your dashboard. You will never miss a chance for repeat work. This creates a steady flow of cash for the firm. A clear history shows every installation in just two clicks.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              Service contracts automate recurring inspections. The system generates new jobs based on your maintenance schedules. Five-year EICR reminders appear automatically. You spend less time on admin and more time on-site.
            </p>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Simple Pricing for British Electrical Contractors
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              The cost of software is often a big worry. Some tools charge a fee for every single job. Opscel uses a flat monthly rate instead, plus £29/month for each extra user on any plan. This helps you plan your budget with ease. A 30-day free trial (card required, first charge on day 30) lets you test everything first — and every new plan gets 50% off its base price for the first 3 months, no code needed.
            </p>

            {/* Pricing Table */}
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-6 py-3 text-left font-heading font-bold">Plan Name</th>
                    <th className="border border-border px-6 py-3 text-left font-heading font-bold">Monthly Cost</th>
                    <th className="border border-border px-6 py-3 text-left font-heading font-bold">Included Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-6 py-3 font-semibold">Starter</td>
                    <td className="border border-border px-6 py-3">£49 + VAT</td>
                    <td className="border border-border px-6 py-3">1 User</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3 font-semibold">Team</td>
                    <td className="border border-border px-6 py-3">£99 + VAT</td>
                    <td className="border border-border px-6 py-3">3 Users</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3 font-semibold">Business</td>
                    <td className="border border-border px-6 py-3">£149 + VAT</td>
                    <td className="border border-border px-6 py-3">5 Users</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-foreground-accent">
              A small team can start on the Team plan. It includes multi-engineer scheduling, Good-Better-Best quoting, and Xero sync for ninety-nine pounds. Larger firms might pick the Business tier. That plan adds a customer portal, asset register, and RAMS. Every plan includes unlimited jobs and customers, plus certificates as standard.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{faq.question}</h3>
                  <p className="text-lg leading-relaxed text-foreground-accent">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Wrapping Up
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The choice for a new system is always big. UK electrical contractors need a partner that knows their rules. Opscel as the best job management software for electrical contractors in the UK provides that local touch.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              It turns field chaos into a smooth flow of cash and data. The time for paper notes is over. A shift to this AI-native tool will save hours every week.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              You will win more work with tiered quotes. You will keep clients longer with a clear portal. Opscel as the best job management software for electrical contractors in the UK is the top choice for the modern trade. Give your team the gift of time today.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-secondary to-[#0280c4] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Electrical Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading UK electrical contractors who trust Opscel to manage their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.opscel.com/handler/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary-accent transition-colors"
              >
                Start 30-Day Free Trial
              </Link>
              <Link
                href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-secondary font-heading font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
};

export default ElectricalContractorsPage;
