
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, Zap, UserPlus, Calendar, Hash } from 'lucide-react';

const strategies = [
  {
    id: 1,
    title: 'Trending Sounds Optimization',
    icon: Music,
    description: 'Identify and leverage trending sounds to boost content visibility and engagement',
    effectiveness: 92,
  },
  {
    id: 2,
    title: 'Pattern Interruption Hooks',
    icon: Zap,
    description: 'Craft attention-grabbing first 3 seconds that stop users from scrolling',
    effectiveness: 87,
  },
  {
    id: 3,
    title: 'User-Generated Content Integration',
    icon: UserPlus,
    description: 'Incorporate UGC strategies to build authenticity and trust with your audience',
    effectiveness: 95,
  },
  {
    id: 4,
    title: 'AI-Driven Content Calendar',
    icon: Calendar,
    description: 'Optimize posting schedule based on audience activity and algorithm patterns',
    effectiveness: 78,
  },
  {
    id: 5,
    title: 'Hashtag Strategy Optimization',
    icon: Hash,
    description: 'Data-driven hashtag selection to maximize discoverability and reach',
    effectiveness: 84,
  },
];

const TikTokSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">TikTok</span> Strategy
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered content optimization for the platform that's changing everything
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {strategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <div key={strategy.id} className="content-card bg-black/30 flex flex-col h-full">
                <div className="mb-4 bg-brand-purple/10 text-brand-purple rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{strategy.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{strategy.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Effectiveness</span>
                    <span className="text-sm font-medium text-brand-cyan">{strategy.effectiveness}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary/50 rounded-full mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full"
                      style={{ width: `${strategy.effectiveness}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-black/30 border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple text-sm font-medium rounded-full mb-6">
                Case Study
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How We Generated $1.2M in Revenue Using TikTok Content Marketing
              </h3>
              <p className="text-gray-300 mb-6">
                Learn how our AI-powered strategy helped a fitness brand achieve 11.3x ROI through optimized TikTok content.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <span className="text-sm text-gray-400">Campaign Duration</span>
                  <p className="text-xl font-medium text-white">12 weeks</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <span className="text-sm text-gray-400">Initial Budget</span>
                  <p className="text-xl font-medium text-white">$110K</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <span className="text-sm text-gray-400">Target Demographic</span>
                  <p className="text-xl font-medium text-white">18-34</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <span className="text-sm text-gray-400">ROI Achieved</span>
                  <p className="text-xl font-medium text-brand-cyan">11.3x</p>
                </div>
              </div>
              
              <Link to="/case-studies/tiktok">
                <Button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 mix-blend-overlay" />
              <img
                src="/placeholder.svg"
                alt="TikTok Case Study"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
