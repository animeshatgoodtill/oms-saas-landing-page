import React from 'react';
import Container from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <section className="bg-hero-background pt-32 md:pt-40 pb-12 md:pb-16">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground text-center">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-foreground-accent text-center max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
};

export default PageHeader;
