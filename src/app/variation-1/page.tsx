import HeroVariation1 from "@/components/HeroVariation1";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const Variation1Page: React.FC = () => {
  return (
    <>
      <HeroVariation1 />
      <Logos />

      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pilot Program & Pricing"
          description="Partnership approach with committed fire safety contractors to validate and refine AI capabilities."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from fire safety contractors who are leading the AI revolution in field operations."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default Variation1Page;
