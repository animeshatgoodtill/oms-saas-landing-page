/**
 * Company Details - Centralized company information
 *
 * INSTRUCTIONS: Update the placeholder values below with your real company information.
 * All pages (About, Contact, Privacy, Terms, etc.) pull from this file.
 */

export const companyDetails = {
  // === LEGAL INFORMATION ===
  registeredName: 'Opscel Limited',                    // Full legal name as registered with Companies House
  tradingName: 'Opscel',                               // Brand/trading name
  companiesHouseNumber: '17090049',                    // 8-digit Companies House number
  incorporationYear: '2024',                           // Year company was incorporated

  // === REGISTERED ADDRESS ===
  // Not displayed publicly - SaaS company, no public address
  registeredAddress: {
    line1: '',
    line2: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
  },

  // === BUSINESS ADDRESS ===
  // Not displayed publicly
  businessAddress: {
    line1: '',
    line2: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
  },

  // === CONTACT INFORMATION ===
  contact: {
    generalEmail: 'hello@opscel.com',
    supportEmail: 'support@opscel.com',
    privacyEmail: 'privacy@opscel.com',
    phone: '',                                           // Email-only contact
    supportHours: 'Monday - Friday, 9:00 AM - 5:30 PM GMT',
  },

  // === DATA PROTECTION & COMPLIANCE ===
  compliance: {
    icoRegistrationNumber: 'ZA123456',                 // ICO registration number (required for UK GDPR)
    dataProtectionOfficerEmail: 'privacy@opscel.com',  // DPO contact email
    dataHostingLocation: 'United Kingdom',             // Where data is hosted
    lastPolicyUpdate: '2024-01-15',                    // Date policies were last updated (YYYY-MM-DD)
  },

  // === SOCIAL MEDIA & EXTERNAL LINKS ===
  links: {
    app: 'https://app.opscel.com',
    signIn: 'https://app.opscel.com/handler/sign-in',
    signUp: 'https://app.opscel.com/handler/sign-up',
    helpCentre: 'https://help.opscel.com',             // External help docs (set to '' if not available)
    statusPage: 'https://status.opscel.com',           // Status page (set to '' if not available)
    linkedIn: 'https://www.linkedin.com/company/opscel',
    facebook: 'https://www.facebook.com/profile.php?id=61575396313261',
    reddit: 'https://www.reddit.com/r/Opscel/',
    youtube: 'https://www.youtube.com/channel/UCG6rw49ob1qY--Vwr3TUMmg',
  },

  // === ABOUT PAGE CONTENT ===
  about: {
    foundedYear: '2024',
    location: 'London',
    tagline: 'Built by people who\'ve lived the problem',

    // The story - this will appear on the About page
    story: `After years of implementing CRM and operations systems for fire safety and electrical contractors,
we saw the same story repeat: hardworking engineers drowning in paperwork, and "solutions" that only added complexity.

Field engineers want simplicity. They want to do their job well, keep people safe, and go home to their families—not
wrestle with clunky software. Yet the systems meant to help them often got in the way.

That's why we created Opscel. A powerful yet simple operations management system that doesn't demand attention—it
simply helps. Every team member, from field engineer to office administrator, can get things done with less friction
and maybe even a bit of joy.

We believe technology should be invisible when it's working well. You shouldn't feel like you're "using software."
You should just feel like your day is easier.`,

    // Mission statement
    mission: 'To give fire safety and electrical contractors the gift of time—eliminating paperwork burden so they can focus on what matters: keeping people safe.',

    // Values (displayed on About page)
    values: [
      {
        title: 'Simplicity First',
        description: 'If it feels complicated, we haven\'t finished designing it. Every feature must earn its place.',
      },
      {
        title: 'Built for the Field',
        description: 'We design for engineers in vans, not executives in boardrooms. Mobile-first, always.',
      },
      {
        title: 'Invisible When Working',
        description: 'The best software doesn\'t feel like software. It just makes your day easier.',
      },
      {
        title: 'Honest Partnership',
        description: 'We succeed when you succeed. No hidden fees, no lock-in, no surprises.',
      },
    ],
  },

  // === INDUSTRY CREDENTIALS (for trust signals) ===
  credentials: {
    // Set to true when you have these, false to hide
    cyberEssentials: false,
    iso27001: false,
    gdprCompliant: true,
    ukDataCentres: true,

    // Industry associations (add when applicable)
    associations: [
      // { name: 'Fire Industry Association (FIA)', logo: '/images/fia-logo.png' },
      // { name: 'BAFE', logo: '/images/bafe-logo.png' },
    ],
  },
};

// Helper function to format the full registered address
export const getFormattedRegisteredAddress = (): string => {
  const addr = companyDetails.registeredAddress;
  const parts = [addr.line1];
  if (addr.line2) parts.push(addr.line2);
  parts.push(addr.city, addr.postcode, addr.country);
  return parts.join(', ');
};

// Helper function to format the business address
export const getFormattedBusinessAddress = (): string => {
  const addr = companyDetails.businessAddress;
  const parts = [addr.line1];
  if (addr.line2) parts.push(addr.line2);
  parts.push(addr.city, addr.postcode, addr.country);
  return parts.join(', ');
};
