import React from 'react';
import Container from './Container';

const TrustStrip: React.FC = () => {
    const logos = ['BAFE', 'NICEIC', 'FIA', 'ECA', 'NAPIT'];

    return (
        <div className="bg-background border-t border-b border-border py-8 md:py-10">
            <Container>
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                    Trusted by contractors registered with
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {logos.map(logo => (
                        <span
                            key={logo}
                            className="font-heading font-bold text-base md:text-lg text-foreground/25 tracking-wide"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default TrustStrip;
