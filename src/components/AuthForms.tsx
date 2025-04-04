
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would connect to your auth backend in a real app
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sign in successful",
        description: "Welcome back to ContentCraftAI",
      });
      // In a real app, redirect to dashboard
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-400 mt-2">Sign in to your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-secondary/50 border-border"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-sm text-brand-cyan hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-secondary/50 border-border"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brand-cyan hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to our terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This would connect to your auth backend in a real app
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "Your free trial has started!",
      });
      // In a real app, redirect to dashboard or onboarding
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-gray-400 mt-2">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="workEmail">Work email</Label>
          <Input
            id="workEmail"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-secondary/50 border-border"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="newPassword">Password</Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="8+ characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="bg-secondary/50 border-border"
          />
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="terms" 
            checked={agreeTerms}
            onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-400 leading-tight"
          >
            I agree to the{' '}
            <Link to="/terms" className="text-brand-cyan hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-brand-cyan hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-brand-cyan hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export const CreatorApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expertise: '',
    portfolio: '',
    contentTypes: [],
    industry: '',
    sample: null,
    agreedToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would connect to your backend in a real app
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Application submitted",
        description: "We'll review your application and get back to you within 2-3 business days.",
      });
      // In a real app, redirect to dashboard or confirmation page
    }, 1500);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Apply for Creator Account</h1>
        <p className="text-gray-400 mt-2">
          Join our marketplace and start selling your content templates
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div 
                className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${
                  s === step ? 'bg-brand-purple text-white' : 
                  s < step ? 'bg-brand-cyan text-white' : 'bg-secondary text-gray-400'
                }`}
              >
                {s}
              </div>
              <span className="text-xs text-gray-400">
                {s === 1 ? 'Your Info' : s === 2 ? 'Portfolio' : 'Review'}
              </span>
            </div>
          ))}
          <div 
            className={`h-1 flex-grow mx-2 ${
              step > 1 ? 'bg-brand-cyan' : 'bg-secondary'
            }`}
          />
          <div 
            className={`h-1 flex-grow mx-2 ${
              step > 2 ? 'bg-brand-cyan' : 'bg-secondary'
            }`}
          />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
                className="bg-secondary/50 border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-secondary/50 border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expertise">Area of Expertise</Label>
              <Input
                id="expertise"
                value={formData.expertise}
                onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                required
                placeholder="e.g. Social Media Marketing, Copywriting"
                className="bg-secondary/50 border-border"
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-brand-purple hover:bg-brand-purple/90"
              >
                Next Step
              </Button>
            </div>
          </>
        )}
        
        {step === 2 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio or Website URL</Label>
              <Input
                id="portfolio"
                type="url"
                value={formData.portfolio}
                onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                placeholder="https://"
                className="bg-secondary/50 border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="industry">Primary Industry</Label>
              <select
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                required
                className="w-full h-10 px-3 bg-secondary/50 border-border rounded-md"
              >
                <option value="">Select industry</option>
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="finance">Finance</option>
                <option value="health">Health & Fitness</option>
                <option value="education">Education</option>
                <option value="creative">Creative & Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Sample Content</Label>
              <div className="border-2 border-dashed border-border p-6 rounded-md text-center">
                <p className="text-gray-400 mb-2">
                  Upload a sample of your content template (PDF, Word, or Zip)
                </p>
                <Button type="button" variant="outline">
                  Choose File
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                type="button" 
                onClick={prevStep}
                variant="outline"
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-brand-purple hover:bg-brand-purple/90"
              >
                Next Step
              </Button>
            </div>
          </>
        )}
        
        {step === 3 && (
          <>
            <div className="bg-secondary/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-4">Review Your Application</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p>{formData.fullName || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>{formData.email || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Expertise</p>
                    <p>{formData.expertise || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p>{formData.portfolio || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Industry</p>
                    <p>{formData.industry || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Sample</p>
                    <p>{formData.sample ? 'Uploaded' : 'Not uploaded'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="creatorTerms" 
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                />
                <label
                  htmlFor="creatorTerms"
                  className="text-sm text-gray-400 leading-tight"
                >
                  I agree to the{' '}
                  <Link to="/creator-terms" className="text-brand-cyan hover:underline">
                    Creator Terms of Service
                  </Link>{' '}
                  and understand the{' '}
                  <Link to="/revenue-sharing" className="text-brand-cyan hover:underline">
                    Revenue Sharing Agreement
                  </Link>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                onClick={prevStep}
                variant="outline"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                disabled={isLoading || !formData.agreedToTerms}
              >
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
