import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";
import { generateSoftwareApplicationSchema } from "@/lib/schema";

const Pricing: React.FC = () => {
    return (
        <div>
            {/* Structured data for the pricing tiers rendered below — offers
                are derived from the same `tiers` array so this can never
                drift from the displayed prices. */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSoftwareApplicationSchema()) }}
            />
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
