import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} mb-10 ${className}`}>
      {eyebrow && (
        <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[color:var(--secondary)] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className="font-heading font-bold tracking-[-0.02em] leading-[1.15]"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[1.0625rem] text-muted-foreground leading-[1.6] max-w-[44rem] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
