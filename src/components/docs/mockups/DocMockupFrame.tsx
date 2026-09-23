'use client';

import React, { useEffect } from 'react';

import './mockup-tokens.css';

/**
 * The three product-canvas faces, loaded at RUNTIME with a stylesheet link
 * (as the design canvas itself does) rather than through next/font/google.
 * next/font fetches Google Fonts at BUILD time and Vercel's build container
 * has failed that fetch twice today ("Cannot read properties of null
 * (reading '1')" in the font loader) - a docs mockup must not be able to
 * fail a deploy of the whole site. Loaded once per page; scoped by the CSS
 * variables below so nothing leaks into the site's own typography.
 */
const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap';
const FONTS_LINK_ID = 'opscel-mockup-fonts';

function ensureFontsLink() {
  if (typeof document === 'undefined' || document.getElementById(FONTS_LINK_ID)) return;
  const link = document.createElement('link');
  link.id = FONTS_LINK_ID;
  link.rel = 'stylesheet';
  link.href = FONTS_HREF;
  document.head.appendChild(link);
}

interface DocMockupFrameProps {
  children: React.ReactNode;
  className?: string;
}

const DocMockupFrame: React.FC<DocMockupFrameProps> = ({ children, className }) => {
  useEffect(() => {
    ensureFontsLink();
  }, []);

  return (
    <div
      className={`opscel-mockup not-prose ${className ?? ''}`}
      style={
        {
          '--mockup-font-heading': "'Barlow Condensed', 'Arial Narrow', sans-serif",
          '--mockup-font-body': "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
          '--mockup-font-mono': "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
          fontFamily: 'var(--mockup-font-body)',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default DocMockupFrame;

/**
 * A 390px-wide phone frame, screen content scrollable inside at ~740px.
 * A labelled region, not role="img": the screen holds real buttons and
 * inputs the reader is meant to use, and an img role would hide them from
 * assistive tech.
 */
export const PhoneFrame: React.FC<{ children: React.ReactNode; ariaLabel: string }> = ({
  children,
  ariaLabel,
}) => (
  <section
    aria-label={ariaLabel}
    className="mx-auto flex w-full max-w-[390px] flex-col overflow-hidden rounded-[20px] border-[1.5px] border-[#141619] bg-[var(--bg)]"
  >
    <div className="h-6 flex-shrink-0 border-b border-[var(--line)] bg-[var(--bg)]" aria-hidden="true" />
    <div className="flex h-[740px] flex-col overflow-y-auto bg-[var(--surf)]">{children}</div>
  </section>
);
