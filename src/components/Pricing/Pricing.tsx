import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
                Growing fast? <a href="/contact" className="text-secondary hover:underline">Get in touch for volume pricing</a>.
            </p>
        </div>
    )
}

export default Pricing
