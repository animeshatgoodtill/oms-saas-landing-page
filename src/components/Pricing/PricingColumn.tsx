import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, priceGBP, features } = tier;
    const promoPrice = (priceGBP * 0.5).toFixed(2).replace(/\.00$/, '');

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-card rounded-xl border border-border lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-border rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="mb-1">
                    <span className={clsx("font-mono text-3xl md:text-5xl font-bold", { "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    <span className="text-lg font-normal text-muted-foreground"> + VAT</span>
                </p>
                <p className="text-sm text-secondary font-semibold mb-6">
                    £{promoPrice}/month for your first 3 months
                </p>
                <a
                    href="https://app.opscel.com/handler/sign-up"
                    className={clsx("block text-center w-full py-3 px-4 rounded-full transition-all duration-mechanical ease-mechanical", { "bg-primary text-primary-foreground hover:bg-primary-accent": highlight, "bg-muted hover:bg-muted/80": !highlight })}
                >
                    Get Started
                </a>
            </div>
            <div className="p-6 mt-1">
                <p className="font-heading uppercase tracking-wide text-sm mb-0">What&apos;s included</p>
                <p className="text-muted-foreground mb-5">30-day free trial. Card required, first charge on day 30.</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
