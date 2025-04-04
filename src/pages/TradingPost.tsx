
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, Star, Download, Grid3X3, List } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  description: string;
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
    description: 'A complete bundle of templates for creating compelling e-commerce product descriptions that convert. Includes 15 different styles and formats.'
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
    description: 'A 7-part email sequence designed to onboard new SaaS users and increase activation rates. Each email is optimized for engagement.'
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
    description: '10 proven TikTok script templates specifically for fitness brands and personal trainers. Designed to showcase transformations effectively.'
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
    description: 'A comprehensive set of templates for real estate listings across different platforms. Includes website, social media, and email formats.'
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
    description: 'A 30-day social media content calendar with post templates specifically designed for restaurants and food service businesses.'
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
    description: 'Brand story frameworks and templates for fashion brands. Includes about us pages, founder stories, and brand mission statements.'
  },
  {
    id: '7',
    title: 'B2B Lead Generation Email Templates',
    creator: 'B2BMarketer',
    price: '$69',
    category: 'Email Series',
    industry: 'B2B',
    rating: 4.7,
    usageCount: 201,
    image: 'placeholder.svg',
    description: 'A collection of 12 cold email templates proven to generate B2B leads. Includes follow-up sequences and subject line variations.'
  },
  {
    id: '8',
    title: 'App Launch PR Kit',
    creator: 'AppGrowth',
    price: '$129',
    category: 'PR Templates',
    industry: 'Technology',
    rating: 4.8,
    usageCount: 98,
    image: 'placeholder.svg',
    description: 'A complete PR kit for mobile app launches. Includes press release templates, media pitches, and launch announcement frameworks.'
  },
  {
    id: '9',
    title: 'Wedding Photography Social Posts',
    creator: 'PhotoPro',
    price: '$49',
    category: 'Social Scripts',
    industry: 'Photography',
    rating: 4.6,
    usageCount: 156,
    image: 'placeholder.svg',
    description: '25 caption templates and post ideas specifically for wedding photographers. Designed to showcase your work and attract engaged couples.'
  },
];

const industries = [
  'All Industries',
  'E-commerce',
  'SaaS',
  'Fitness',
  'Real Estate',
  'Food & Beverage',
  'Fashion',
  'B2B',
  'Technology',
  'Photography'
];

const categories = [
  'All Categories',
  'Product Template',
  'Email Series',
  'Social Scripts',
  'Content Calendar',
  'Brand Story',
  'PR Templates'
];

const TradingPost = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  // Filter templates based on search, industry, category and price
  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All Industries' || template.industry === selectedIndustry;
    const matchesCategory = selectedCategory === 'All Categories' || template.category === selectedCategory;
    const price = parseInt(template.price.replace('$', ''));
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;
    
    return matchesSearch && matchesIndustry && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Trading Post</span> Marketplace
              </h1>
              <p className="text-gray-400">
                Buy and sell premium content templates, scripts, and strategies
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Button variant="outline">
                Browse All
              </Button>
              <Link to="/creator-application">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  Sell Your Content
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black/30 border border-border rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-medium mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Price Range</h4>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        min={0}
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                        className="bg-secondary/50 border-border w-24"
                      />
                      <span className="text-gray-500">to</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        min={0}
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 0})}
                        className="bg-secondary/50 border-border w-24"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Industry</h4>
                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <div key={industry} className="flex items-center">
                          <Checkbox
                            id={`industry-${industry}`}
                            checked={selectedIndustry === industry}
                            onCheckedChange={() => setSelectedIndustry(industry)}
                          />
                          <label
                            htmlFor={`industry-${industry}`}
                            className="ml-2 text-sm text-gray-400 cursor-pointer"
                          >
                            {industry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategory === category}
                            onCheckedChange={() => setSelectedCategory(category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-sm text-gray-400 cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedIndustry('All Industries');
                        setSelectedCategory('All Categories');
                        setPriceRange({ min: 0, max: 200 });
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates, scripts..."
                    className="pl-10 pr-4 py-2 w-full bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {filteredTemplates.length === 0 ? (
                <div className="bg-black/30 border border-border rounded-xl p-12 text-center">
                  <p className="text-gray-400 mb-4">No templates found matching your criteria</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedIndustry('All Industries');
                      setSelectedCategory('All Categories');
                      setPriceRange({ min: 0, max: 200 });
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTemplates.map((template) => (
                    <Link to={`/trading-post/${template.id}`} key={template.id} className="content-card flex flex-col h-full">
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
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTemplates.map((template) => (
                    <Link to={`/trading-post/${template.id}`} key={template.id} className="content-card block">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-48 h-32 bg-black/50 rounded-md overflow-hidden shrink-0">
                          <img
                            src={template.image}
                            alt={template.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">{template.title}</h3>
                            <span className="text-lg font-bold text-brand-cyan">{template.price}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <span className="px-2 py-0.5 rounded-full bg-secondary/80 text-gray-300 text-xs mr-2">
                              {template.category}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary/80 text-gray-300 text-xs mr-2">
                              {template.industry}
                            </span>
                            <div className="flex items-center ml-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-3 w-3"
                                    fill={i < Math.floor(template.rating) ? "#33FDD8" : "none"}
                                    stroke={i < Math.floor(template.rating) ? "#33FDD8" : "#6b7280"}
                                  />
                                ))}
                              </div>
                              <span className="ml-1 text-xs text-gray-400">{template.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 mb-3 line-clamp-2">{template.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-400 mr-4">by {template.creator}</span>
                              <div className="flex items-center text-xs text-gray-400">
                                <Download className="h-3 w-3 mr-1" />
                                <span>{template.usageCount} uses</span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="text-xs">
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              
              <div className="mt-8 flex justify-center">
                <div className="join">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? 'default' : 'outline'}
                      className={`join-item ${page === 1 ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}`}
                      size="sm"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TradingPost;
