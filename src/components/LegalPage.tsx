import React from 'react';
import Container from './Container';
import PageHeader from './PageHeader';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, children }) => {
  return (
    <>
      <PageHeader title={title} />
      <Container className="py-12 md:py-16">
        <p className="text-sm text-foreground-accent mb-8">
          Last updated: {lastUpdated}
        </p>
        <article className="max-w-4xl mx-auto legal-content">
          {children}
        </article>
      </Container>
    </>
  );
};

export default LegalPage;
