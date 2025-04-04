
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for solo creators and small businesses',
    features: [
      'Unlimited AI content generation',
      'Basic SEO optimization',
      '50+ content templates',
      'Email support',
      'Social media captions',
      'Blog post generation',
    ],
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Ideal for marketing teams and agencies',
    features: [
      'Everything in Starter',
      'Advanced SEO optimization',
      '100+ professional templates',
      'Plagiarism detection',
      'Brand voice customization',
      'Priority support',
      'Team collaboration (up to 3 seats)',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$249',
    description: 'Full solution for larger organizations',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom templates',
      'API access',
      'Advanced analytics',
      'White-label exports',
      'Training sessions',
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Flexible Pricing</span> for Every Creator
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl border bg-card overflow-hidden transition-all",
                tier.popular
                  ? "border-brand-purple shadow-lg shadow-brand-purple/20 scale-105 md:scale-110 z-10"
                  : "border-border hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-purple to-brand-cyan py-1.5 text-center text-xs font-medium text-white">
                  MOST POPULAR
                </div>
              )}
              <div className={cn("p-8", tier.popular && "pt-12")}>
                <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </p>
                <Link to="/signup">
                  <Button
                    className={cn(
                      "mt-6 w-full",
                      tier.popular
                        ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                        : "bg-secondary hover:bg-secondary/80"
                    )}
                  >
                    Start 14-Day Free Trial
                  </Button>
                </Link>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-cyan shrink-0 mr-2" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
