import Hero from "@/components/Hero";
import WorkflowProof from "@/components/WorkflowProof/WorkflowProof";
import FeatureShowcase from "@/components/FeatureShowcase";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Container from "@/components/Container";
import Section from "@/components/Section";

// Homepage order is the conversion argument: the promise (Hero), the proof
// (WorkflowProof — the promise happening, office ⇄ phone), the breadth
// (FeatureShowcase, each card links to its feature page), then price,
// objections and the ask. Anything that repeats one of those doesn't belong here.
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WorkflowProof />
      <FeatureShowcase />

      <Container>
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
