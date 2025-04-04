
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Zap, UserPlus, Calendar, Hash, TrendingUp, CheckCircle } from 'lucide-react';

const strategies = [
  {
    id: 1,
    title: 'Trending Sounds Optimization',
    icon: Music,
    description: 'Identify and leverage trending sounds to boost content visibility and engagement',
    effectiveness: 92,
    features: [
      'AI-driven audio trend detection',
      'Categorized sound library by niche',
      'Sound performance analytics',
      'Weekly trending audio reports'
    ]
  },
  {
    id: 2,
    title: 'Pattern Interruption Hooks',
    icon: Zap,
    description: 'Craft attention-grabbing first 3 seconds that stop users from scrolling',
    effectiveness: 87,
    features: [
      'Hook templates by industry',
      'Pattern interrupt formulas',
      'Visual attention analytics',
      'A/B testing for hook performance'
    ]
  },
  {
    id: 3,
    title: 'User-Generated Content Integration',
    icon: UserPlus,
    description: 'Incorporate UGC strategies to build authenticity and trust with your audience',
    effectiveness: 95,
    features: [
      'UGC creator brief templates',
      'Script frameworks for authentic delivery',
      'Content repurposing workflows',
      'Legal usage guidelines'
    ]
  },
  {
    id: 4,
    title: 'AI-Driven Content Calendar',
    icon: Calendar,
    description: 'Optimize posting schedule based on audience activity and algorithm patterns',
    effectiveness: 78,
    features: [
      'Optimal posting time calculator',
      'Content variety planner',
      'Trend-based scheduling',
      'Performance-based posting optimization'
    ]
  },
  {
    id: 5,
    title: 'Hashtag Strategy Optimization',
    icon: Hash,
    description: 'Data-driven hashtag selection to maximize discoverability and reach',
    effectiveness: 84,
    features: [
      'Niche-specific hashtag libraries',
      'Trending hashtag analyzer',
      'Hashtag combination recommendations',
      'Performance tracking by hashtag'
    ]
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'How We Generated $1.2M in Revenue Using TikTok Content Marketing',
    industry: 'Fitness Brand',
    metrics: {
      duration: '12 weeks',
      budget: '$110K',
      demographic: '18-34',
      roi: '11.3x'
    },
    image: 'placeholder.svg'
  },
  {
    id: 2,
    title: 'From 0 to 500K Followers: A Fashion Brand TikTok Growth Case Study',
    industry: 'Fashion',
    metrics: {
      duration: '6 months',
      budget: '$75K',
      demographic: '16-28',
      roi: '8.7x'
    },
    image: 'placeholder.svg'
  }
];

const TikTok = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-brand-purple/20 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4">
                  <span className="gradient-text">TikTok</span> Content Strategy
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  AI-powered optimization for the platform that's changing everything. Create content that resonates, engages, and converts.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-secondary/30 px-4 py-2 rounded-full flex items-center">
                    <TrendingUp className="h-5 w-5 text-brand-cyan mr-2" />
                    <span className="text-sm">92% Engagement Increase</span>
                  </div>
                  <div className="bg-secondary/30 px-4 py-2 rounded-full flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-cyan mr-2" />
                    <span className="text-sm">Proven ROI</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                  >
                    Generate TikTok Content
                  </Button>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl border border-border p-1 bg-secondary/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 to-brand-cyan/30 rounded-xl blur opacity-30" />
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="TikTok Content Strategy" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">AI-Powered Strategy</span> Components
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Our data-driven approach combines multiple optimization factors to create TikTok content that performs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strategies.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <div key={strategy.id} className="content-card bg-black/30 flex flex-col h-full">
                    <div className="mb-4 bg-brand-purple/10 text-brand-purple rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{strategy.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{strategy.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Effectiveness</span>
                        <span className="text-sm font-medium text-brand-cyan">{strategy.effectiveness}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/50 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full"
                          style={{ width: `${strategy.effectiveness}%` }}
                        />
                      </div>
                    </div>
                    
                    <ul className="mt-auto space-y-2">
                      {strategy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from brands using our TikTok optimization strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-black/30 border border-border rounded-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-3 p-8">
                      <div className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple text-sm font-medium rounded-full mb-6">
                        {study.industry}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-secondary/30 rounded-lg p-3">
                          <span className="text-xs text-gray-400">Campaign Duration</span>
                          <p className="text-lg font-medium text-white">{study.metrics.duration}</p>
                        </div>
                        <div className="bg-secondary/30 rounded-lg p-3">
                          <span className="text-xs text-gray-400">Initial Budget</span>
                          <p className="text-lg font-medium text-white">{study.metrics.budget}</p>
                        </div>
                        <div className="bg-secondary/30 rounded-lg p-3">
                          <span className="text-xs text-gray-400">Target Demographic</span>
                          <p className="text-lg font-medium text-white">{study.metrics.demographic}</p>
                        </div>
                        <div className="bg-secondary/30 rounded-lg p-3">
                          <span className="text-xs text-gray-400">ROI Achieved</span>
                          <p className="text-lg font-medium text-brand-cyan">{study.metrics.roi}</p>
                        </div>
                      </div>
                      
                      <Link to={`/case-studies/${study.id}`}>
                        <Button className="bg-brand-purple hover:bg-brand-purple/90">
                          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="col-span-2 relative hidden lg:block">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 mix-blend-overlay" />
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/case-studies">
                <Button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to transform your TikTok strategy?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Start your 14-day free trial today. No credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/signup">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                      >
                        Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/trading-post">
                      <Button size="lg" variant="outline">
                        View Templates
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div className="absolute inset-0 bg-black/40" />
                  <img 
                    src="/placeholder.svg" 
                    alt="TikTok Strategy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TikTok;
