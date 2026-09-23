'use client';

import React from 'react';
import { Barlow_Condensed, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';

import './mockup-tokens.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--mockup-font-heading-raw',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--mockup-font-body-raw',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--mockup-font-mono-raw',
  display: 'swap',
});

interface DocMockupFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Loads the three product-canvas fonts via next/font/google and exposes
 * them as CSS variables scoped to this wrapper only, so nothing leaks into
 * the site's own Manrope / Source Sans typography.
 */
const DocMockupFrame: React.FC<DocMockupFrameProps> = ({ children, className }) => {
  return (
    <div
      className={`opscel-mockup not-prose ${barlowCondensed.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable} ${className ?? ''}`}
      style={
        {
          '--mockup-font-heading': 'var(--mockup-font-heading-raw), sans-serif',
          '--mockup-font-body': 'var(--mockup-font-body-raw), system-ui, sans-serif',
          '--mockup-font-mono': 'var(--mockup-font-mono-raw), ui-monospace, monospace',
          fontFamily: 'var(--mockup-font-body)',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default DocMockupFrame;

/** A 390px-wide phone frame, screen content scrollable inside at ~740px. */
export const PhoneFrame: React.FC<{ children: React.ReactNode; ariaLabel: string }> = ({
  children,
  ariaLabel,
}) => (
  <div
    role="img"
    aria-label={ariaLabel}
    className="mx-auto flex w-full max-w-[390px] flex-col overflow-hidden rounded-[20px] border-[1.5px] border-[#141619] bg-[var(--bg)]"
  >
    <div className="h-6 flex-shrink-0 border-b border-[var(--line)] bg-[var(--bg)]" aria-hidden="true" />
    <div className="flex h-[740px] flex-col overflow-y-auto bg-[var(--surf)]">{children}</div>
  </div>
);
