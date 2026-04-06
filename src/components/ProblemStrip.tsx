import React from 'react';
import Container from './Container';

const ProblemStrip: React.FC = () => {
    return (
        <section className="py-12 bg-background">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                            Job done at 3pm
                        </h3>
                        <p className="text-foreground-accent">
                            Your engineer finishes on-site but the paperwork sits in a notebook until someone types it up.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                            Certificate sent next Tuesday
                        </h3>
                        <p className="text-foreground-accent">
                            The office chases details, builds the certificate, checks it, and posts it. Five days gone.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                            Invoice follows a week later
                        </h3>
                        <p className="text-foreground-accent">
                            The customer can&apos;t be invoiced until the certificate lands. Cash flow stalls.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProblemStrip;
