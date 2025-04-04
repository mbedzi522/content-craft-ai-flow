
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import TradingPostSection from '@/components/TradingPostSection';
import TikTokSection from '@/components/TikTokSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Create content that converts</span>
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI to create platform-specific content that resonates with your audience and drives results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Content',
                  description: 'Create high-quality content in seconds with our advanced AI trained on top-performing campaigns'
                },
                {
                  title: 'Platform Optimization',
                  description: 'Content specifically optimized for the unique requirements of TikTok, Instagram, and more'
                },
                {
                  title: 'Ready-to-Use Templates',
                  description: 'Access the Trading Post marketplace for proven templates from successful creators'
                }
              ].map((feature, index) => (
                <div key={index} className="content-card bg-black/30">
                  <div className="h-12 w-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                    <span className="text-brand-cyan font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <TikTokSection />
        <TradingPostSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
