import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeatureShowcase from "@/components/FeatureShowcase";
import BackofficeHero from "@/components/BackofficeHero";
import Benefits from "@/components/Benefits/Benefits";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeatureShowcase />
      <BackofficeHero />

      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Simple pricing. 50% off your first 3 months."
          description="30-day free trial, card required. Full access from day one. Cancel anytime."
        >
          <Pricing />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
