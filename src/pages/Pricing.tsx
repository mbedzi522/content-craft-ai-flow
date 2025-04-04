
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
  popular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for solo creators and small businesses',
    features: [
      { text: 'Unlimited AI content generation', included: true },
      { text: 'Basic SEO optimization', included: true },
      { text: '50+ content templates', included: true, tooltip: 'Access to our library of basic templates for various content types' },
      { text: 'Email support', included: true },
      { text: 'Social media captions', included: true },
      { text: 'Blog post generation', included: true },
      { text: 'Plagiarism detection', included: false },
      { text: 'Brand voice customization', included: false },
      { text: 'Priority support', included: false },
      { text: 'Team collaboration', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'White-label exports', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Ideal for marketing teams and agencies',
    features: [
      { text: 'Unlimited AI content generation', included: true },
      { text: 'Advanced SEO optimization', included: true, tooltip: 'Enhanced SEO features including keyword analysis and optimization recommendations' },
      { text: '100+ professional templates', included: true },
      { text: 'Email & chat support', included: true },
      { text: 'Social media captions', included: true },
      { text: 'Blog post generation', included: true },
      { text: 'Plagiarism detection', included: true },
      { text: 'Brand voice customization', included: true, tooltip: 'Train the AI to match your brand\'s unique voice and style' },
      { text: 'Priority support', included: true },
      { text: 'Team collaboration (up to 3 seats)', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'White-label exports', included: false },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$249',
    description: 'Full solution for larger organizations',
    features: [
      { text: 'Unlimited AI content generation', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'Custom templates', included: true, tooltip: 'Create and save your own templates or request custom templates from our team' },
      { text: 'Dedicated account manager', included: true },
      { text: 'Social media captions', included: true },
      { text: 'Blog post generation', included: true },
      { text: 'Plagiarism detection', included: true },
      { text: 'Brand voice customization', included: true },
      { text: 'Priority support', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'Advanced analytics', included: true, tooltip: 'Comprehensive analytics dashboard with performance metrics and content insights' },
      { text: 'White-label exports', included: true, tooltip: 'Export content without ContentCraftAI branding for client deliverables' },
    ],
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start, and you can cancel anytime."
  },
  {
    question: "How does the AI content generation work?",
    answer: "Our AI is trained on top-performing content across multiple platforms. You provide basic inputs about your topic, audience, and goals, and our system generates optimized content tailored to your specific needs and platform."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change will take effect at your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing."
  },
  {
    question: "Do I need technical skills to use ContentCraftAI?",
    answer: "No technical skills required! Our platform is designed with an intuitive interface that makes it easy for anyone to generate professional content, regardless of their technical expertise."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. Once canceled, you'll maintain access until the end of your current billing cycle."
  },
];

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  const getAdjustedPrice = (basePrice: string, interval: 'monthly' | 'yearly') => {
    const numericPrice = parseInt(basePrice.replace('$', ''));
    if (interval === 'yearly') {
      const yearlyPrice = Math.round(numericPrice * 10); // 2 months free
      return `$${yearlyPrice}`;
    }
    return basePrice;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold">
                <span className="gradient-text">Flexible Pricing</span> for Every Creator
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Start free for 14 days. No credit card required. Cancel anytime.
              </p>
              
              <div className="mt-8 inline-flex items-center p-1 rounded-full bg-secondary/50 border border-border">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    billingInterval === 'monthly'
                      ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setBillingInterval('monthly')}
                >
                  Monthly billing
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    billingInterval === 'yearly'
                      ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setBillingInterval('yearly')}
                >
                  Yearly billing
                  <span className="ml-2 bg-brand-purple/20 text-brand-cyan px-2 py-0.5 rounded-full text-xs">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border bg-card overflow-hidden transition-all ${
                    tier.popular
                      ? "border-brand-purple shadow-lg shadow-brand-purple/20 scale-105 md:scale-105 z-10"
                      : "border-border hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-purple to-brand-cyan py-1.5 text-center text-xs font-medium text-white">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`p-8 ${tier.popular && "pt-12"}`}>
                    <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
                    <p className="mt-4">
                      <span className="text-4xl font-bold text-white">
                        {billingInterval === 'monthly' ? tier.price : getAdjustedPrice(tier.price, 'yearly')}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingInterval === 'monthly' ? 'month' : 'year'}
                      </span>
                    </p>
                    <Link to="/signup">
                      <Button
                        className={`mt-6 w-full ${
                          tier.popular
                            ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        Start 14-Day Free Trial
                      </Button>
                    </Link>
                    <ul className="mt-8 space-y-3">
                      {tier.features.map((feature) => (
                        <TooltipProvider key={feature.text}>
                          <li className="flex items-start">
                            <Check 
                              className={`h-5 w-5 shrink-0 mr-2 ${feature.included ? 'text-brand-cyan' : 'text-gray-600'}`} 
                            />
                            <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature.text}
                            </span>
                            {feature.tooltip && feature.included && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 ml-1 text-gray-500" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                  <p>{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </li>
                        </TooltipProvider>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {frequentlyAskedQuestions.map((faq, index) => (
                  <div key={index} className="bg-black/30 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need a custom solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our enterprise plan can be tailored to your specific needs. Contact our sales team for a custom quote.
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
