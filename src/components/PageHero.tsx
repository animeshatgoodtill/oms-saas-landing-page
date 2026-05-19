import React from 'react';
import Link from 'next/link';

interface PageHeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
  target?: string;
  rel?: string;
}

interface BackLink {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: React.ReactNode;
  title: string;
  description?: string;
  actions?: PageHeroAction[];
  backLink?: BackLink;
  gradient?: string; // override the default navy→blue gradient
}

const defaultGradient = 'linear-gradient(135deg, #0f1a2e 0%, #0280C4 100%)';

const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  actions,
  backLink,
  gradient = defaultGradient,
}) => {
  return (
    <div style={{ background: gradient, paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="mx-auto px-5 w-full max-w-[52rem]">
        {backLink && (
          <Link
            href={backLink.href}
            className="inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white no-underline mb-5 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            {backLink.label}
          </Link>
        )}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-white/65 mb-4">
            {eyebrow}
          </div>
        )}
        <h1
          className="font-heading font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-[1.125rem]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-white/75 leading-[1.6] max-w-[38rem]"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)' }}
          >
            {description}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-[0.875rem] mt-8">
            {actions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                target={action.target}
                rel={action.rel}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-semibold text-base transition-all duration-150 whitespace-nowrap"
                style={
                  action.variant === 'primary'
                    ? {
                        background: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        border: '1.5px solid var(--primary)',
                      }
                    : {
                        background: 'transparent',
                        color: '#fff',
                        border: '1.5px solid rgba(255,255,255,0.3)',
                      }
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHero;
