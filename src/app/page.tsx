import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import CapabilityGrid from "@/components/CapabilityGrid";
import BackofficeHero from "@/components/BackofficeHero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CapabilityGrid />
      <BackofficeHero />

      <Container>
        <Section
          id="pricing"
          title="Straightforward pricing. No per-job fees. No contracts."
          description=""
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Social Proof"
          description=""
        >
          <Testimonials />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
