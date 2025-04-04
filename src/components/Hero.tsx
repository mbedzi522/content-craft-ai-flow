
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/10 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">AI-powered</span> content generation for modern creators
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Create high-converting content for social media, blogs, ads, and more — using advanced AI designed for today's digital landscape.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                >
                  Try 14 Days Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/examples">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  See Examples
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-brand-purple to-brand-cyan opacity-80" />
                  </div>
                ))}
              </div>
              <div className="ml-3 flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-brand-cyan" fill="currentColor" />
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-300">from 2,100+ reviews</span>
              </div>
            </div>
          </div>
          
          <div 
            className="relative rounded-xl border border-border p-1 bg-secondary/30 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 to-brand-cyan/30 rounded-xl blur opacity-30" />
            <div className={`relative rounded-lg overflow-hidden transition-all duration-700 ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}>
              <div className="bg-brand-dark/80 p-4 rounded-lg">
                <div className="space-y-4">
                  <div className="h-10 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 text-sm text-gray-400">ContentCraftAI</div>
                  </div>
                  <div className="space-y-4 p-4 rounded-lg bg-black/50">
                    <p className="text-brand-cyan font-mono text-sm">{`> Generate TikTok hook for fitness product`}</p>
                    <div className="pl-4 border-l-2 border-brand-purple animate-pulse">
                      <p className="text-gray-300">Creating attention-grabbing hook...</p>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <p className="text-white font-medium">"Struggling with your fitness journey? What if I told you the problem isn't your motivation... it's your [PRODUCT]. Here's how we helped over 10,000 people transform their bodies in just 30 days..."</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-xs">Pattern Interrupt</span>
                      <span className="px-2 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs">High Conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
