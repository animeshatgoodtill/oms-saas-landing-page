import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Best Job Management Software For UK Fire Safety Contractors | OpsCel',
  description: 'Discover the best job management software for fire safety contractors. Streamline BS 5839 compliance, scheduling, invoicing, and customer management to boost productivity and profitability.',
  openGraph: {
    title: 'Best Job Management Software For UK Fire Safety Contractors | OpsCel',
    description: 'Streamline BS 5839 compliance, scheduling, invoicing, and customer management for fire safety contractors.',
  },
};

const FireSafetyContractorsPage: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <section className="bg-hero-background border-b border-border pt-32 md:pt-40 pb-16">
        <Container>
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Best Job Management Software For UK Fire Safety Contractors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Streamline BS 5839 compliance, scheduling, invoicing, and customer management to boost productivity and profitability for your fire safety business.
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
              British fire safety firms face a big choice today. The global fire safety market will grow to eighty-four billion pounds by 2032. Many companies struggle with too much paperwork, which is why implementing effective job management software can streamline operations. Hard work on-site should not lead to hours at a desk.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              A review of the UK trade market shows a gap. Many tools are too complex for a small crew. They feel like they were built for a boardroom, not a van. OpsCel fills this gap with simple screens.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              UK SMEs make up over ninety-nine percent of the business world. Small changes in work speed can add billions to the British economy. Most fire safety firms now use cloud tools to handle their daily tasks. A shift to digital work helps teams win more bids and keep clients happy. OpsCel job management software offers the right path for these firms.
            </p>

            {/* Key Features Callout */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="font-heading font-bold text-xl text-blue-900 mb-3">AI-Native Tools Integrated</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• OpsCel stays 100% UK-based with data kept in local centers</li>
                <li>• Every certificate checks itself against British Standards like BS 5839 and is automatically generated</li>
                <li>• Track fire alarm panels, emergency lighting, and extinguisher services with ease</li>
              </ul>
            </div>
          </section>

          {/* Why Go Digital */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Why UK Fire Safety Contractors Must Go Digital
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The world of fire safety work is more complex now. You service fire alarms, emergency lighting, extinguishers, and more. Manual notes lead to delays and high costs. Over fifty percent of fire safety firms already use digital forms. A lack of clear tools can hurt your growth.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Efficiency is the main goal for most owners. Software should feel invisible in the field. It must simply help the team do a good job. Digital tools can boost company growth by eighteen percent over time. The right tool saves time for every staff member.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              BAFE-registered contractors need audit trails, retest tracking, and BS 5839 compliance. OpsCel handles all of this automatically.
            </p>
          </section>

          {/* OpsCel Section */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              OpsCel: The Best Job Management Software For Fire Safety Contractors
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              This is a modern system. It uses AI to save you time. The AI assistant is very smart. Type or paste customer data in any format. The AI fills the form in 30 seconds.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The industry is changing fast. New regulations and stricter compliance checks add complexity. Therefore, you need a tool that stays ahead. OpsCel is the first of its kind. It is built for the future.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Additionally, the tool tracks retest dates. It flags when a fire alarm service or emergency lighting test is due. Never miss a job. This creates a steady income for years. This is why many choose OpsCel as the best job management software for fire safety contractors in the UK.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              The platform works for teams with five to fifty staff members. It helps firms that are BAFE or FIA registered stay in line with the law. No hidden fees exist here. You do not sign long contracts to get started.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">
              Key Features for Fire Safety Contractors
            </h2>

            {/* Telegram Integration */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Telegram Linking</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                Most engineers already use Telegram for chatting. OpsCel uses a bot on that same app. No new software needs to be installed on their phones. Account linking takes just a few minutes. Then, job alerts arrive as simple messages.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                The bot handles GPS check-ins in two seconds. Engineers snap photos of panels or defects. They can dictate notes instead of typing. Voice capture saves a lot of time in the van. All data syncs to the office in real time.
              </p>
            </div>

            {/* Xero Integration */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Xero Integration</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                Double data entry is a waste of money. OpsCel links directly to Xero and QuickBooks. One click posts your invoice to the books. Line items and tax codes move over perfectly. This makes the life of your accountant much easier.
              </p>
              <p className="text-lg leading-relaxed text-foreground-accent">
                Payment status updates back to the app automatically. You see what is paid without opening the bank site. It also creates new customers in the accounting tool. No duplicate records will clutter your files. This flow keeps your cash moving fast.
              </p>
            </div>

            {/* Dashboard */}
            <div className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Unique Dashboard</h3>
              <p className="text-lg leading-relaxed text-foreground-accent mb-4">
                A good dashboard shows you what to do next. OpsCel loads your data in under half a second. It uses colour codes to show if staff are too busy. Green means capacity, while red means overloaded. You can assign emergency calls to the right person fast.
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
            </div>
          </section>

          {/* British Standards */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              British Standards and Fire Safety Certificates
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Fire safety work must follow BS 5839 and other British Standards. This tool knows every rule in the book. It checks your inspection results for you. No errors. It stops a person from sending a bad certificate.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The software has 25 custom fields just for fire safety. It tracks panel types, zone counts, and device locations with ease. Reliable records? Absolutely. It makes audit trails that no one can change.
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
                    <td className="border border-border px-6 py-3">BS 5839 Compliance</td>
                    <td className="border border-border px-6 py-3">Zero compliance errors</td>
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
                    <td className="border border-border px-6 py-3">Panel Identity Tracking</td>
                    <td className="border border-border px-6 py-3">Auto-filled on return visits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-foreground-accent">
              The software prevents the issue of bad certificates. You cannot issue a fire alarm service cert if critical defects are marked. It blocks mistakes before they happen. This reduces legal risk for the business owner. It builds a clear audit trail for every single job.
            </p>
          </section>

          {/* Managing Fire Safety Jobs */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Managing Fire Safety Jobs with Ease
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              Fire safety work requires very deep detail. You must track extinguishers, alarms, emergency lights, and more. OpsCel handles nine types of fire safety certificates. Each one follows official model forms. This keeps your BAFE status in good standing.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The system tracks when a retest is due. It flags these dates on your dashboard. You will never miss a chance for repeat work. This creates a steady flow of cash for the firm. A clear history shows every panel service in just two clicks.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              Service contracts automate recurring inspections. The system generates new jobs based on your maintenance schedules. Annual fire alarm services appear automatically. You spend less time on admin and more time on-site.
            </p>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Simple Pricing for British Fire Safety Contractors
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-6">
              The cost of software is often a big worry. Some tools charge a fee for every single job. OpsCel uses a flat monthly rate instead. This helps you plan your budget with ease. A ninety-day free trial lets you test everything first.
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
                    <td className="border border-border px-6 py-3">£29</td>
                    <td className="border border-border px-6 py-3">3 Users</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3 font-semibold">Team</td>
                    <td className="border border-border px-6 py-3">£49</td>
                    <td className="border border-border px-6 py-3">5 Users</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-3 font-semibold">Business</td>
                    <td className="border border-border px-6 py-3">£79</td>
                    <td className="border border-border px-6 py-3">8 Users</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-foreground-accent">
              A small team can start on the Team plan. It includes multi-engineer scheduling for forty-nine pounds. Larger firms might pick the Business tier. That plan adds a customer portal and Xero links. Every plan includes unlimited jobs and customers.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Is This For My Business Size?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  The software fits teams with five to fifty employees. It works well for small British fire safety firms that want to grow. Starter plans help micro-firms with up to three users. Business plans support larger teams with more needs.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Do Engineers Need A New Phone?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  No, they can use the phones they already own. The Telegram bot works on most modern devices. A web app also exists for those who do not use Telegram. No big app store downloads are required.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Can I Use It In A Basement?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  The product catalog stays saved on the device. Engineers can add parts and log work without a signal. Data will sync as soon as they get back to the van. This offline mode is vital for fire safety work in commercial buildings.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Does It Link To Xero?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  Yes, it has a one-click link to Xero and QuickBooks. Invoices move over with all tax details. Payment status updates in the job system automatically. This prevents the need for double entry.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">How Long Is The Setup?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  A guided checklist walks you through every step. Most firms are up and running very fast. The 4-step wizard makes creating customers a breeze. You will not feel overwhelmed by the start.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">What About BAFE or FIA Registration?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  The system creates certificates that follow British Standards. It supports BS 5839 for fire alarm systems. These forms match official model types perfectly. This helps you pass audits with ease.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Is My Data Safe?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  All data stays in UK-based data centers. The system follows GDPR rules for privacy. It uses bank-level security for accounting links. You have full control over your records.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Can I Try It For Free?</h3>
                <p className="text-lg leading-relaxed text-foreground-accent">
                  A ninety-day free trial is available for all plans. You get full access to every feature during the test. This gives you time to see the value.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Wrapping Up
            </h2>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              The choice for a new system is always big. UK fire safety firms need a partner that knows their rules. OpsCel as the best job management software for fire safety contractors in the UK provides that local touch.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent mb-4">
              It turns field chaos into a smooth flow of cash and data. The time for paper notes is over. A shift to this AI-native tool will save hours every week.
            </p>
            <p className="text-lg leading-relaxed text-foreground-accent">
              You will win more work with tiered quotes. You will keep clients longer with a clear portal. OpsCel as the best job management software for fire safety contractors in the UK is the top choice for the modern trade. Give your team the gift of time today.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-secondary to-[#0280c4] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Fire Safety Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading UK fire safety contractors who trust OpsCel to manage their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.opscel.com/handler/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary-accent transition-colors"
              >
                Start 90-Day Free Trial
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

export default FireSafetyContractorsPage;
