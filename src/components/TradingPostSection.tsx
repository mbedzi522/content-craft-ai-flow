
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star, Download } from 'lucide-react';

type ContentTemplate = {
  id: string;
  title: string;
  creator: string;
  price: string;
  category: string;
  industry: string;
  rating: number;
  usageCount: number;
  image: string;
};

const mockTemplates: ContentTemplate[] = [
  {
    id: '1',
    title: 'E-commerce Product Description Bundle',
    creator: 'MarketingPro',
    price: '$49',
    category: 'Product Template',
    industry: 'E-commerce',
    rating: 4.8,
    usageCount: 283,
    image: 'placeholder.svg',
  },
  {
    id: '2',
    title: 'SaaS Onboarding Email Series',
    creator: 'GrowthHacker',
    price: '$79',
    category: 'Email Series',
    industry: 'SaaS',
    rating: 4.9,
    usageCount: 157,
    image: 'placeholder.svg',
  },
  {
    id: '3',
    title: 'Fitness Transformation TikTok Scripts',
    creator: 'FitContent',
    price: '$39',
    category: 'Social Scripts',
    industry: 'Fitness',
    rating: 4.7,
    usageCount: 219,
    image: 'placeholder.svg',
  },
  {
    id: '4',
    title: 'Real Estate Property Listing Templates',
    creator: 'HomeMarketer',
    price: '$59',
    category: 'Product Template',
    industry: 'Real Estate',
    rating: 4.6,
    usageCount: 186,
    image: 'placeholder.svg',
  },
  {
    id: '5',
    title: 'Restaurant Social Media Content Calendar',
    creator: 'FoodBizPro',
    price: '$69',
    category: 'Content Calendar',
    industry: 'Food & Beverage',
    rating: 4.8,
    usageCount: 142,
    image: 'placeholder.svg',
  },
  {
    id: '6',
    title: 'Fashion Brand Story Templates',
    creator: 'StyleNarrative',
    price: '$89',
    category: 'Brand Story',
    industry: 'Fashion',
    rating: 4.9,
    usageCount: 178,
    image: 'placeholder.svg',
  },
];

const TradingPostSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Trading Post</span> Marketplace
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Buy and sell premium content templates, scripts, and strategies
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates, scripts..."
              className="pl-10 pr-4 py-2 w-full bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Industry <Filter className="h-4 w-4" />
            </Button>
            <Link to="/trading-post">
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTemplates.map((template) => (
            <div key={template.id} className="content-card flex flex-col h-full">
              <div className="h-40 bg-black/50 rounded-md mb-4 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{template.title}</h3>
                <span className="text-lg font-bold text-brand-cyan">{template.price}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-secondary/80 text-gray-300 text-xs mr-2">
                  {template.category}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-secondary/80 text-gray-300 text-xs">
                  {template.industry}
                </span>
              </div>
              <div className="flex items-center mt-1 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.floor(template.rating) ? "#33FDD8" : "none"}
                      stroke={i < Math.floor(template.rating) ? "#33FDD8" : "#6b7280"}
                    />
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-400">{template.rating}</span>
                <div className="ml-auto flex items-center text-xs text-gray-400">
                  <Download className="h-3 w-3 mr-1" />
                  <span>{template.usageCount} uses</span>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm text-gray-400">by {template.creator}</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/trading-post">
            <Button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
              View All Templates
            </Button>
          </Link>
          <div className="mt-6">
            <Link to="/creator-application" className="text-brand-cyan hover:underline text-sm">
              Apply for Creator Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPostSection;
