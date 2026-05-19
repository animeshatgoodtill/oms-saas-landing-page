import React from 'react';
import Link from 'next/link';

interface CtaAction {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
  target?: string;
  rel?: string;
}

interface CtaBoxProps {
  title: string;
  subtitle?: string;
  actions: CtaAction[];
}

const CtaBox: React.FC<CtaBoxProps> = ({ title, subtitle, actions }) => {
  return (
    <div style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
      <div className="mx-auto px-5 w-full" style={{ maxWidth: '80rem' }}>
        <div
          className="relative overflow-hidden rounded-[1rem]"
          style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}
        >
          {/* Dark grid background */}
          <div
            className="absolute inset-0"
            style={{
              background: '#050a02',
              backgroundImage:
                'linear-gradient(to right, #12170f 1px, transparent 1px), linear-gradient(to bottom, #12170f 1px, transparent 1px)',
              backgroundSize: '6rem 4rem',
            }}
          />
          {/* Glow overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle 600px at 50% 120%, #1C1C02, transparent)',
            }}
          />
          {/* Content */}
          <div className="relative z-10 text-center max-w-[42rem] mx-auto text-white">
            <h2
              className="font-heading font-bold text-white tracking-[-0.02em] leading-[1.2]"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 1rem, 3rem)' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3.5 text-[1.0625rem] leading-[1.6] text-white/65">{subtitle}</p>
            )}
            <div className="mt-9 flex flex-wrap justify-center gap-[0.875rem]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;
