
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Powerful Features</span> for Content Creators
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and scale your content strategy
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Content Generation */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Content Generation</h3>
                <p className="text-gray-400 mb-4">
                  Generate high-quality, SEO-optimized content with our advanced AI that adapts to your brand voice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Blog posts & articles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Social media captions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Email newsletters</span>
                  </li>
                </ul>
              </div>

              {/* SEO Optimization */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                <p className="text-gray-400 mb-4">
                  Maximize your content's search visibility with built-in SEO tools and recommendations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Keyword analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">On-page SEO suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Readability scoring</span>
                  </li>
                </ul>
              </div>

              {/* Multi-platform Publishing */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-platform Publishing</h3>
                <p className="text-gray-400 mb-4">
                  Create once, publish everywhere with our integrated platform connections.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Social media integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">WordPress plugin</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Direct scheduling</span>
                  </li>
                </ul>
              </div>

              {/* Content Analytics */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Analytics</h3>
                <p className="text-gray-400 mb-4">
                  Measure performance and optimize your strategy with comprehensive analytics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Engagement metrics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Content performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Audience insights</span>
                  </li>
                </ul>
              </div>

              {/* Team Collaboration */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-400 mb-4">
                  Work seamlessly with your team with collaborative workflows and approval processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Role-based permissions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Content approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Real-time collaboration</span>
                  </li>
                </ul>
              </div>

              {/* Content Templates */}
              <div className="bg-black/30 border border-border rounded-xl p-6 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Templates</h3>
                <p className="text-gray-400 mb-4">
                  Get started quickly with 100+ pre-built templates optimized for different content types.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Industry-specific templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Customizable frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-cyan mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">Save your own templates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* New Feature Alert */}
            <Alert className="mb-16 bg-brand-purple/10 border-brand-purple/30">
              <AlertDescription className="flex items-center text-center justify-center p-2">
                <span className="text-white font-medium">New!</span>
                <span className="mx-2 text-gray-300">
                  We've just launched our TikTok content generator. Create viral-worthy TikTok scripts and ideas instantly.
                </span>
                <Button variant="link" asChild>
                  <a href="/tiktok" className="text-brand-cyan hover:text-brand-cyan/80 flex items-center">
                    Try it now <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </AlertDescription>
            </Alert>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to transform your content strategy?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of creators and marketing teams already using ContentCraftAI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                  <a href="/signup">Start Free Trial</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
